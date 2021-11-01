import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { CREATE_SUBSCRIPTION, EDIT_SUBSCRIPTION, HOME_PAGE, SUBSCRIPTION_DETAILS } from './assets/constants/pages';
import AllSubscriptions from './pages/AllSubscriptions';
import CreateSubscription from './pages/CreateSubscription';
import EditSubscription from './pages/EditSubscription';
import SubscriptionDetails from './pages/SubscriptionDetails';

const AppRoutes = () => (
  <Switch>
    <Route path={EDIT_SUBSCRIPTION} component={EditSubscription} />
    <Route path={CREATE_SUBSCRIPTION} component={CreateSubscription} />
    <Route path={SUBSCRIPTION_DETAILS} component={SubscriptionDetails} />
    <Route path={HOME_PAGE} component={AllSubscriptions} />
    <Redirect from="*" to={HOME_PAGE} />
  </Switch>
);

export default AppRoutes;
