import React, { Component } from "react";
import styled from 'react-emotion'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Header from './components/Header'
import Welcome from './pages/Welcome'
import About from './pages/About'
import Contact from './pages/Contact'

const Content = styled('div')({
  marginTop: 50
})

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Content>
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </Content>
        </div>
      </Router>
    );
  }
}

export default App;
