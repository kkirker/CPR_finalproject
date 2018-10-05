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


const Content = styled('div')({
  marginTop: 50
})

class App extends Component {
  render() {
    return (
      <Router>
          <Content>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/signin" component={SignIn} />
              <Route path="/test" component={Test} />
              <Route path="/Results" component={Results} />
            </Switch>
          </Content>
      </Router>
    );
  }
}

export default App;
