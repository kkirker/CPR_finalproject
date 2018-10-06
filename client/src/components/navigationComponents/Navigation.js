import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'react-emotion'

import AuthUserContext from '../AuthUserContext';
import * as routes from '../../constants/routes';
import SignInButton from './SignInButton';
import SignOutButton from './SignOutButton';
import { auth } from '../../firebase';



const NavBarStyling = styled('div')({
  width: '100%',
  height: '10vh',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  backgroundColor: '#ffffff',
})



const Navigation = () =>
<NavBarStyling>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>
  </NavBarStyling>


  const NavigationAuth = () =>
  <ul>
  <li><Link to={routes.LANDING}>Home</Link></li>
  <li><Link to={routes.PROFILE}>Profile</Link></li>
  <li><SignOutButton/> </li>
  {/* <NavCTAButton name="Sign Out"/> */}
  </ul>

  const NavigationNonAuth = () =>
  <ul>
  <li><Link to={routes.LANDING}>Home</Link></li>
  {/* <li><Link to={routes.SIGN_IN}>Sign In</Link></li> */}
  <li><SignInButton/></li>

  {/* <NavCTAButton name="Sign In"/> */}
  </ul>

export default Navigation;