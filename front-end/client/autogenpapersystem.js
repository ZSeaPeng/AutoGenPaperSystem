import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import css from './style/main.css'

//import container
import Navbar from './container/Navbar';
import Details from './container/Details';
import ManualCombine from './container/ManualCombine';
import AutoCombine from './container/AutoCombine';
import Index from './container/Index';
import Update from './container/Update';
import Paper from './container/Paper';
import APaper from './container/APaper'
import Admin from './container/Admin';
import UserIndex from './container/UserIndex';
import Adminlogin from './container/Adminlogin';
import BigUser from './container/BigUser';
import Collections from './container/Collections';
import Userlogin from './container/Userlogin';
import ProductIntro from './container/ProductIntro';
import TeachingTeam from './container/TeachingTeam';
import Wait from './container/Wait';

import store, { history } from './store';

injectTapEventPlugin();

const router = (
  <Provider store={ store }>
    <Router history={ history }>
      <Route path='/' component={Userlogin} />
      <Route path="/index" component={Navbar}>
        <IndexRoute component={Index}/>
        <Route path="/collections(/*)" component={Collections} />
        <Route path="/biguser" component={BigUser}/>
        <Route path="/adminlogin" component={Adminlogin}/>
        <Route path="/updateinfo/*" component={Update} />
        <Route path="/testpaper" component={Paper} />
        <Route path="/autotestpaper" component={APaper} />
        <Route path="/admin" component={Admin} />
        <Route path="/userindex" component={UserIndex} />
        <Route path="/:sub/*" component={Details} />
        <Route path="/manualcombine" component={ManualCombine}/>
        <Route path="/autocombine" component={AutoCombine}/>
        <Route path="/product" component={ProductIntro}/>
        <Route path="/teachingTeam" component={TeachingTeam}/>
        <Route path="/wait" component={Wait}/>
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
