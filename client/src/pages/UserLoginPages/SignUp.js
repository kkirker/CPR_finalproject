import React, { Component } from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import API from "../../utils/API";
import styled from 'react-emotion'

const StyledInput = styled('input')({
  margin: '15px',
  display: 'block',
})





const SignUpPage = ({ history }) =>
  <div>
    <h1>SignUp</h1>
    <SignUpForm history={history} />
  </div>


const INITIAL_STATE = {
  fbUserID: '',
  firstname: '',
  lastname: '',
  username: '',
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
      username,
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
            textVersion: '1.0'
          })
          .then( () => {
            this.setState({ ...INITIAL_STATE });
            history.push(routes.HOME);
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
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === '' ||
    email === '' ||
    username === '';

    return (
      <form onSubmit={this.onSubmit}>
      <StyledInput
          value={firstname}
          onChange={event => this.setState(byPropKey('firstname', event.target.value))}
          type="text"
          placeholder="First Name"
        />
         <StyledInput
          value={lastname}
          onChange={event => this.setState(byPropKey('lastname', event.target.value))}
          type="text"
          placeholder="Last Name"
        />
        <StyledInput
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <StyledInput
          value={passwordOne}
          onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <StyledInput
          value={passwordTwo}
          onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>

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