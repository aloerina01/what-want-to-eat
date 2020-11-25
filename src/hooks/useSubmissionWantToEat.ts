import { useRecoilState } from 'recoil';
import { useHistory } from 'react-router-dom';
import { getDecodedIDToken } from '../liff';
import { choosedFoodItemIdsRepo } from '../repositories/choosedFoodItemIdsRepo';
import { getToday } from '../utils/date';
import { choosedFoodItemIdsState } from '../states';
import { IChoosedFoodItemId } from '../models/IChoosedFoodItemId';

export const useSubmissionWantToEat = () => {
  const history = useHistory();
  const [choosedFoodItemIds, setChoosedFoodItemIds] = useRecoilState(choosedFoodItemIdsState);

  return (myChoosedFoodItemIds: string[]) => {
    const token = getDecodedIDToken();
    if (!token || !token.sub || myChoosedFoodItemIds.length === 0) {
      return;
    }
    const today = getToday();
    const newMyChoosedFoodItemId = {
      id: `${today}_${token.sub}`,
      userId: token.sub,
      date: today,
      itemIds: myChoosedFoodItemIds,
    };
    choosedFoodItemIdsRepo.add(newMyChoosedFoodItemId);
    const newChoosedFoodItemIds: IChoosedFoodItemId[] = [];
    choosedFoodItemIds.forEach((item) => {
      if (item.userId === token.sub) {
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
