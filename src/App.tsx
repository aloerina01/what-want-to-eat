import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ChooseWhatToEatPage } from './pages/ChooseWhatToEatPage';
import { ChoosedResultPage } from './pages/ChoosedResultPage';
import { PageHeader } from './components/PageHeader';

export const App: React.FC = () => (
  <div>
    <Switch>
      <Route path="/" exact>
        <PageHeader title="今日何食べたい？" />
        <Suspense fallback={<div>Loading...</div>}>
          <ChooseWhatToEatPage />
        </Suspense>
      </Route>
      <Route path="/choosedResult">
        <PageHeader title="今日何食べたい？" />
        <Suspense fallback={<div>Loading...</div>}>
          <ChoosedResultPage />
        </Suspense>
      </Route>
    </Switch>
  </div>
);
