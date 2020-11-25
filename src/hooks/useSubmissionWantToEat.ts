import { useHistory } from 'react-router-dom';
import { getDecodedIDToken } from '../liff';
import { choosedFoodItemIdsRepo } from '../repositories/choosedFoodItemIdsRepo';
import { getToday } from '../utils/date';

export const useSubmissionWantToEat = () => {
  const history = useHistory();

  return (choosedFoodItemIds: string[]) => {
    const token = getDecodedIDToken();
    if (!token || !token.sub || choosedFoodItemIds.length === 0) {
      return;
    }
    const today = getToday();
    choosedFoodItemIdsRepo.add({
      id: `${today}_${token.sub}`,
      userId: token.sub,
      date: today,
      itemIds: choosedFoodItemIds,
    });
    // 画面遷移す
    history.push('/choosedResult');
  };
};
