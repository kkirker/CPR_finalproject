import React from 'react';

import AuthUserContext from '../components/userLoginComponents/AuthUserContext';
import { PasswordForgetForm } from './UserLoginPages/PasswordForget';
import PasswordChangeForm from './UserLoginPages/PasswordChange';
import withAuthorization from '../components/userLoginComponents/withAuthorization';
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



const ProfilePage = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div className='profile-page-container'>
        <h1 className='signin-h1'>Update Profile For: {authUser.email}</h1>
        <div className='form-container'>
        <StyledH2>RETRIEVE YOUR PASSWORD</StyledH2>
    <p className="form-instructions">Please enter your email address below. You will receive a link to reset your password.</p>
        <PasswordForgetForm />
        <hr />
        <StyledH2>RESET YOUR PASSWORD</StyledH2>
    <p className="form-instructions">Please enter a new password and confirm your password.</p>
        <PasswordChangeForm />
        </div>
      </div>
    }
  </AuthUserContext.Consumer>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(ProfilePage);


//User authUser.uid to get the Firebase ID to then make an API call to get the rest of the user data
