import React, { Suspense, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ChooseWhatToEatPage } from './pages/ChooseWhatToEatPage';
import { ChoosedResultPage } from './pages/ChoosedResultPage';
import { PageHeader } from './components/PageHeader';
import { currentFoodItemsState } from './states';
import { useRecoilValue } from 'recoil';

export const App: React.FC = () => {
  const myChoosedFoodItems = useRecoilValue(currentFoodItemsState);
  return (
    <div>
      <PageHeader title="今日何食べたい？" />
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route path="/" exact>
            <ChooseWhatToEatPage />
          </Route>
          <Route path="/choosedResult">
            {myChoosedFoodItems.filter((item) => item.choosed).length === 0 ? (
              <Redirect to="/" />
            ) : (
              <ChoosedResultPage />
            )}
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
};
