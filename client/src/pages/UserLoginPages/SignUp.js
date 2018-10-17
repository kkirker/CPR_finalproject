import React, { Component } from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import API from "../../utils/API";
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


const SignUpPage = ({ history }) =>
  <div className='sign-up-page-container'>
    <h1 className='signin-h1'>CREATE AN ACCOUNT</h1>
    <div className='form-container'>
    <p className="form-instructions">Please enter the following information to create your account.</p>
    <p class="required">* Required Fields</p>
    <SignUpForm history={history} />
    </div>
  </div>


const INITIAL_STATE = {
  fbUserID: '',
  firstname: '',
  lastname: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      fbUserID,
      firstname,
      lastname,
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {

        //Create the user in mongodb, using the firebase ID from authUser
          API.createUser({
            fbUserID: authUser.user.uid,
            firstName: firstname,
            lastName: lastname,
            email: email,
            score: 0,
            testVersion: '1'
          })
          .then( () => {
            this.setState({ ...INITIAL_STATE });
            history.push(routes.DASHBOARD);
          })
          .catch(error => {
            this.setState(byPropKey('error', error));
          });

          // this.setState({ ...INITIAL_STATE });
          // history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }



  render() {

    const {
      firstname,
      lastname,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
    firstname === '' ||
    lastname === '' ||
    passwordOne !== passwordTwo ||
    passwordOne === '' ||
    email === '';

    return (
      <form onSubmit={this.onSubmit}>
      <label for="fname">First Name *</label><br />
      <StyledInput
          value={firstname}
          onChange={event => this.setState(byPropKey('firstname', event.target.value))}
          type="text"
          placeholder="First Name"
        />
        <label for="lname">Last Name *</label><br />
         <StyledInput
          value={lastname}
          onChange={event => this.setState(byPropKey('lastname', event.target.value))}
          type="text"
          placeholder="Last Name"
        />
        <label for="email-address">Email Address *</label><br />
        <StyledInput
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <label for="password">Password *</label><br />
        <StyledInput
          value={passwordOne}
          onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <label for="confirm-password">Confirm Password *</label><br />
        <StyledInput
          value={passwordTwo}
          onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirm Password"
        />
        <Button disabled={isInvalid} type="submit" variant="contained" color="secondary" >
          Sign Up
        </Button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};