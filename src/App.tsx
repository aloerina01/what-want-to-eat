import React, { Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ChooseWhatToEatPage } from './pages/ChooseWhatToEatPage';
import { ChoosedResultPage } from './pages/ChoosedResultPage';
import { PageHeader } from './components/PageHeader';
import { currentFoodItemsState, userState } from './states';

export const App: React.FC = () => {
  // const user = useRecoilValue(userState);
  // user.IDToken.then((token) => {
  //   if (!token) {
  //     throw new Error('token is null');
  //   }
  // }).catch((e) => {
  //   throw new Error(e);
  // });
  const currentFoodItems = useRecoilValue(currentFoodItemsState);
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <PageHeader title="今日何食べたい？" />
          <ChooseWhatToEatPage />
        </Route>
        <Route path="/choosedResult">
          <PageHeader title="今日何食べたい？" />
          <Suspense fallback={<div>current 計算中</div>}>
            {currentFoodItems.length === 0 ? <Redirect to="/" /> : <ChoosedResultPage />}
          </Suspense>
        </Route>
      </Switch>
    </div>
  );
};
