import React from 'react';

import AuthUserContext from '../components/AuthUserContext';
import { PasswordForgetForm } from '../components/PasswordForget';
import PasswordChangeForm from '../components/PasswordChange';
import withAuthorization from '../components/withAuthorization';

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