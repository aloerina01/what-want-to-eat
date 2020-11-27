import React from 'react';
import { useRecoilValue } from 'recoil';
import { AnimatePresence } from 'framer-motion';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ChooseWhatToEatPage } from './pages/ChooseWhatToEatPage';
import { ChoosedResultPage } from './pages/ChoosedResultPage';
import { PageHeader } from './components/PageHeader';
import { currentFoodItemsState, userState } from './states';

export const App: React.FC = () => {
  const myChoosedFoodItems = useRecoilValue(currentFoodItemsState);
  const [IDToken, decodedIDToken] = useRecoilValue(userState);
  return (
    <div>
      <PageHeader title="今日なに食べたい？" userIconImage={decodedIDToken?.picture} />
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
