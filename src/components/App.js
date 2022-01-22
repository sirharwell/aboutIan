import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Home from './Home';
import WorkXP from './WorkXP'
import Family from './Family'
import Interests from './Interests';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Work_XP' component={WorkXP} />
            <Route exact path='/Family' component={Family} />
            <Route exact path='/Interests' component={Interests} />
            <Route component={NoMatch} />
          </Switch>
      </div>
    );
  }
}

export default App;
