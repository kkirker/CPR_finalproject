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
import Profile from './pages/Profile'
import Navigation from './components/navigationComponents/Navigation';
import SignUpPage from './pages/UserLoginPages/SignUp';
import SignInPage from './pages/UserLoginPages/SignIn';
import PasswordForgetPage from './pages/UserLoginPages/PasswordForget';
import * as routes from './constants/routes';
import withAuthentication from './components/userLoginComponents/withAuthentication';
import Footer from './components/footerComponents/Footer'



const Content = styled('div')({
  marginTop: 0
})

class App extends Component {



  render() {
    return (
      <Router>
          <Content>
          <div className='wrapper'>
            <Navigation />
            <Route exact path={routes.LANDING} component={Landing} />
            <Route exact path={routes.SIGN_UP} component={SignUpPage} />
            <Route exact path={routes.SIGN_IN} component={SignInPage} />
            <Route exact path={routes.PASSWORD_FORGET} component={PasswordForgetPage} />
            <Route exact path={routes.DASHBOARD} component={Dashboard} />
            <Route exact path={routes.PROFILE} component={Profile} />
            <Route exact path={routes.TEST} component={Test}/>
            <Route exact path={routes.RESULTS} component={Results}/>
          </div>
          <Footer/>
          </Content>
      </Router>
    );
  }
}

// export default App;
export default withAuthentication(App);
