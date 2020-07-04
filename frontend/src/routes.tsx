import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Sales from './pages/Sales';
import Dashboard from './pages/Dashboard';
import Deliveries from './pages/Deliveries';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sales" component={Sales} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/deliveries" component={Deliveries} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
