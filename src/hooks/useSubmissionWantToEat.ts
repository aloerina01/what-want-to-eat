import { useRecoilState, useRecoilValue } from 'recoil';
import { useHistory } from 'react-router-dom';
import { choosedFoodItemIdsRepo } from '../repositories/choosedFoodItemIdsRepo';
import { getToday } from '../utils/date';
import { choosedFoodItemIdsState, userState } from '../states';
import { IChoosedFoodItemId } from '../models/IChoosedFoodItemId';

export const useSubmissionWantToEat = () => {
  const history = useHistory();
  const [choosedFoodItemIds, setChoosedFoodItemIds] = useRecoilState(choosedFoodItemIdsState);
  const user = useRecoilValue(userState);

  return async (myChoosedFoodItemIds: string[]) => {
    const IDToken = await user.IDToken;
    if (!IDToken || myChoosedFoodItemIds.length === 0) {
      console.log('token', IDToken);
      console.log('myChoosedFoodItemIds', myChoosedFoodItemIds);
      return;
    }
    const today = getToday();
    const newMyChoosedFoodItemId = {
      id: `${today}_${IDToken}`,
      userId: IDToken,
      date: today,
      itemIds: myChoosedFoodItemIds,
    };
    choosedFoodItemIdsRepo.add(newMyChoosedFoodItemId);
    const newChoosedFoodItemIds: IChoosedFoodItemId[] = [];
    choosedFoodItemIds.forEach((item) => {
      if (item.userId === IDToken) {
        newChoosedFoodItemIds.push(newMyChoosedFoodItemId);
        return;
      }
      newChoosedFoodItemIds.push(item);
    });
    setChoosedFoodItemIds(newChoosedFoodItemIds);
    // 画面遷移す
    history.push('/choosedResult');
  };
};
