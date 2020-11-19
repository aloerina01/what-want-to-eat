import React from 'react';
import { Switch, Route} from 'react-router-dom'; 
import { ChooseWhatToEatPage } from './pages/ChooseWhatToEatPage';

export const App: React.FC = () => 
<div>
  <Switch>
    <Route path="/"><ChooseWhatToEatPage></ChooseWhatToEatPage></Route>
  </Switch>
</div>;
