import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import '../assets/vendors/style';
import '../assets/styles/wieldy.less';
import App from './containers/App/index';

const NextApp = () =>
  <BrowserRouter>
    <Switch>
      <Route path='/' component={App} />
    </Switch>
  </BrowserRouter>

export default NextApp;
