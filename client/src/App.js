import React, { Component } from "react";
import styled from 'react-emotion'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Results from './pages/Results'
import Test from './pages/Test'
import SignIn from './pages/SignIn'
import Account from './pages/Profile'

//Christie's Firebase Attempt
import Navigation from './components/navigationComponents/Navigation';
import LandingPage from './components/Landing';
import SignUpPage from './components/SignUp';
import SignInPage from './components/SignIn';
import PasswordForgetPage from './components/PasswordForget';
import HomePage from './components/Home';
import ProfilePage from './pages/Profile';
import * as routes from './constants/routes';
import withAuthentication from './components/withAuthentication';


const Content = styled('div')({
  marginTop: 0
})

class App extends Component {
  render() {
    return (
      <Router>
          <Content>
          <div>
      <Navigation />

      <hr/>

      <Route exact path={routes.LANDING} component={Landing} />
      <Route exact path={routes.SIGN_UP} component={SignUpPage} />
      <Route exact path={routes.SIGN_IN} component={SignInPage} />
      <Route exact path={routes.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route exact path={routes.HOME} component={HomePage} />

      <Route exact path={routes.PROFILE} component={ProfilePage} />
      <Route exact path={routes.TEST} component={Test}/>
      <Route exact path={routes.RESULTS} component={Results}/>

    </div>
            {/* <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/test" component={Test} />
              <Route path="/Results" component={Results} />
            </Switch> */}

          </Content>
      </Router>
    );
  }
}

// export default App;
export default withAuthentication(App);
