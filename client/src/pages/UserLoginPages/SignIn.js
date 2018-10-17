import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from './SignUp';
import { PasswordForgetLink } from './PasswordForget';

import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import styled from 'react-emotion'
import Button from '@material-ui/core/Button';

const StyledInput = styled('input')({
  display: 'block',
  marginBottom: '10px',
  width: '365px',
  maxWidth: '100%',
  borderRadius: '2px',
  border: '1px solid silver',
  background: '#FFFFFF',
  fontSize: '15px',
  padding: '4px'
})

const StyledH2 = styled('h2')({
  fontFamily: '"Raleway", "Helvetica Neue", Verdana, Arial, sans-serif',
  fontSize: '24px',
  fontWeight: '400',
  fontStyle: 'normal',
  lineHeight: '1.2',
  textRendering: 'optimizeLegibility',
  textTransform: 'uppercase',
  color: '#FF3B3F'
})


const SignInPage = ({ history }) =>
  <div className='sign-in-container'>
  <h1 className='signin-h1'>LOGIN OR CREATE AN ACCOUNT</h1>
  <div className='mod-container'>
    <div className='sign-up-container'>
    <StyledH2>NEW HERE?</StyledH2>
    <p className="form-instructions">Registration is free and easy!</p>
    <ul>
      <li>Must have for testing</li>
      <li>Check test results</li>
      <li>Update Profile and more</li>
    </ul>
      <SignUpLink />
    </div>
    <div className='login-container'>
      <StyledH2>Already registered?</StyledH2>
        <p className="form-instructions">If you have an account with us, please log in.</p>
        <p class="required">* Required Fields</p>
        <SignInForm history={history} />
        <PasswordForgetLink />
        </div>
    </div>
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        history.push(routes.DASHBOARD);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit}>
      <label for="email-address">Email Address *</label><br />
        <StyledInput
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        /><br />
        <label for="password">Password *</label><br />
        <StyledInput
          value={password}
          onChange={event => this.setState(byPropKey('password', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <Button variant="contained" color="secondary" disabled={isInvalid} type="submit">
          Sign In
        </Button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};