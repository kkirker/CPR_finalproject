import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

const PasswordForgetPage = () =>
  <div className='password-page-container'>
    <h1 className='signin-h1'>FORGOT YOUR PASSWORD?</h1>
    <div className='form-container'>
    <StyledH2>RETRIEVE YOUR PASSWORD HERE</StyledH2>
    <p className="form-instructions">Please enter your email address below. You will receive a link to reset your password.</p>
    <p class="required">* Required Fields</p>
    <PasswordForgetForm />
    </div>
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    auth.doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      error,
    } = this.state;

    const isInvalid = email === '';

    return (
      <form onSubmit={this.onSubmit}>
      <label for="email-address">Email Address *</label><br />
        <StyledInput
          value={this.state.email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <Button disabled={isInvalid} type="submit" variant="contained" color="secondary">
          Reset My Password
        </Button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

const PasswordForgetLink = () =>
  <p>
    <Link to={routes.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>

export default PasswordForgetPage;

export {
  PasswordForgetForm,
  PasswordForgetLink,
};