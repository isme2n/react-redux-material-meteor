import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Page404 from './components/ErrPage/Page404';
import Shopping from './components/Shopping/Shopping';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="shopping" component={Shopping} />
    <Route path="*" component={Page404} />
  </Route>
);
