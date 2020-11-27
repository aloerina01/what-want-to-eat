import { useRecoilState, useRecoilValue } from 'recoil';
import { useHistory } from 'react-router-dom';
import { choosedFoodItemIdsRepo } from '../repositories/choosedFoodItemIdsRepo';
import { getToday } from '../utils/date';
import { choosedFoodItemIdsState, userState } from '../states';

export const useSubmissionWantToEat = () => {
  const history = useHistory();
  const [choosedFoodItemIds, setChoosedFoodItemIds] = useRecoilState(choosedFoodItemIdsState);
  const user = useRecoilValue(userState);

  return async (myChoosedFoodItemIds: string[]) => {
    // validate
    if (!user.userId || myChoosedFoodItemIds.length === 0) {
      console.log('userId', user.userId);
      console.log('myChoosedFoodItemIds', myChoosedFoodItemIds);
      return;
    }
    // prepare data
    const today = getToday();
    const newMyChoosedFoodItemId = {
      id: `${today}_${user.userId}`,
      userId: user.userId,
      date: today,
      itemIds: myChoosedFoodItemIds,
    };
    // update DB
    choosedFoodItemIdsRepo.add(newMyChoosedFoodItemId);
    // update runtime state
    const oldMyChoosedFoodItemIdIndex = choosedFoodItemIds.findIndex((item) => {
      return item.userId === user.userId;
    });
    if (oldMyChoosedFoodItemIdIndex === -1) {
      setChoosedFoodItemIds([...choosedFoodItemIds, newMyChoosedFoodItemId]);
    } else {
      setChoosedFoodItemIds([
        ...choosedFoodItemIds.slice(0, oldMyChoosedFoodItemIdIndex),
        newMyChoosedFoodItemId,
        ...choosedFoodItemIds.slice(oldMyChoosedFoodItemIdIndex + 1),
      ]);
    }
    // 画面遷移す
    history.push('/choosedResult');
  };
};
