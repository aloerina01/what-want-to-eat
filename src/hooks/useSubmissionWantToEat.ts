import { useRecoilState } from 'recoil';
import { masterFoodItemsState } from '../states';
import { useHistory } from 'react-router-dom';

export const useSubmissionWantToEat = () => {
  const history = useHistory();

  return () => {
    // apiたたく
    // 画面遷移す
    history.push('/choosedResult');
  };
};
