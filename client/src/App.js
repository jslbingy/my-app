import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Foodhome from './components/foodhome.component';
import Strokehome from './components/strokehome.component';
import Strokeform from './components/strokeform.component';
import Authentication from './components/authentication.component';
import Userinfo from './components/userinfo.component';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route exact path='/' component={Login} />
                <Route path="/sign-in" component={Login} />
                <Route path="/sign-up" component={Register} />
                <Authentication>
                  <Route path="/foodhome" component={Foodhome} />
                  <Route path="/strokehome" component={Strokehome} />
                  <Route path="/strokeform" component={Strokeform} />
                  <Route path="/userinfo" component={Userinfo} />
                </Authentication>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
