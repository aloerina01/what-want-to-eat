import React, { Suspense, useEffect, useState } from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ChooseWhatToEatPage } from './pages/ChooseWhatToEatPage';
import { ChoosedResultPage } from './pages/ChoosedResultPage';
import { PageHeader } from './components/PageHeader';
import { currentFoodItemsState } from './states';
import { ICurrentFoodItem } from './models/ICurrentFoodItem';
import { useRecoilValue } from 'recoil';

export const App: React.FC = () => {
  const myChoosedFoodItems = useRecoilValue(currentFoodItemsState);
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <PageHeader title="今日何食べたい？" />
          <ChooseWhatToEatPage />
        </Route>
        <Route path="/choosedResult">
          <PageHeader title="今日何食べたい？" />
          {myChoosedFoodItems.filter((item) => item.choosed).length === 0 ? (
            <Redirect to="/" />
          ) : (
            <ChoosedResultPage />
          )}
        </Route>
      </Switch>
    </div>
  );
};
