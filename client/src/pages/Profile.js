import React from 'react';

import AuthUserContext from '../components/userLoginComponents/AuthUserContext';
import { PasswordForgetForm } from './UserLoginPages/PasswordForget';
import PasswordChangeForm from './UserLoginPages/PasswordChange';
import withAuthorization from '../components/userLoginComponents/withAuthorization';

const ProfilePage = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div>
        <h1>Profile: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    }
  </AuthUserContext.Consumer>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(ProfilePage);


//User authUser.uid to get the Firebase ID to then make an API call to get the rest of the user data
