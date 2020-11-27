import React, { Fragment } from 'react';
import { useRecoilValue } from 'recoil';
import { AnimatePresence } from 'framer-motion';
import { Switch, Route, Redirect, RouteProps } from 'react-router-dom';
import { ChooseWhatToEatPage } from './pages/ChooseWhatToEatPage';
import { ChoosedResultPage } from './pages/ChoosedResultPage';
import { AdmissionLimitPage } from './pages/AdmissionLimitPage';
import { PageHeader } from './components/PageHeader';
import { currentFoodItemsState, userState, permittedUsersState } from './states';

type PrivateRouteProps = RouteProps & {
  userId: string | undefined;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, userId, ...rest }) => {
  const permittedUsers = useRecoilValue(permittedUsersState);
  const permission = userId && permittedUsers.includes(userId);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        permission ? children : <Redirect to={{ pathname: '/403', state: { from: location } }} />
      }
    />
  );
};

export const App: React.FC = () => {
  const myChoosedFoodItems = useRecoilValue(currentFoodItemsState);
  const user = useRecoilValue(userState);
  return (
    <div>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch>
          <Route path="/403" exact>
            <AdmissionLimitPage />
          </Route>
          <PrivateRoute path="/" exact userId={user.userId}>
            <PageHeader title="今日なに食べたい？" userIconImage={user.pictureUrl} />
            <ChooseWhatToEatPage />
          </PrivateRoute>
          <PrivateRoute path="/choosedResult" userId={user.userId}>
            {myChoosedFoodItems.filter((item) => item.choosed).length === 0 ? (
              <Redirect to="/" />
            ) : (
              <Fragment>
                <PageHeader title="今日なに食べたい？" userIconImage={user.pictureUrl} />
                <ChoosedResultPage />
              </Fragment>
            )}
          </PrivateRoute>
        </Switch>
      </AnimatePresence>
    </div>
  );
};
