import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import css from  './style/main.css'

//import container
import Navbar from './container/Navbar';
import Details from './container/Details';
import ManualCombine from './container/ManualCombine';
import AutoCombine from './container/AutoCombine';
import Index from './container/Index';
import Update from './container/Update';
import Paper from './container/Paper';
import Admin from './container/Admin';

import store, { history } from './store';

injectTapEventPlugin();

const router = (
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={Navbar}>
        <IndexRoute component={Index}/>
        <Route path="/updateinfo/*" component={Update} />
        <Route path="/testpaper" component={Paper} />
        <Route path="/admin" component={Admin} />
        <Route path="/:sub/*" component={Details} />
        <Route path="/manualcombine" component={ManualCombine}/>
        <Route path="/autocombine" component={AutoCombine}/>
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));