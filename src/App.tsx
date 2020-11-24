import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ChooseWhatToEatPage } from './pages/ChooseWhatToEatPage';
import { ChoosedResultPage } from './pages/ChoosedResultPage';

export const App: React.FC = () => (
  <div>
    <Switch>
      <Route path="/" exact>
        <ChooseWhatToEatPage />
      </Route>
      <Route path="/choosedResult">
        <ChoosedResultPage />
      </Route>
    </Switch>
  </div>
);
