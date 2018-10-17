import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'react-emotion'

import AuthUserContext from '../userLoginComponents/AuthUserContext';
import * as routes from '../../constants/routes';
import SignInButton from './SignInButton';
import SignOutButton from './SignOutButton';
import { auth } from '../../firebase';
import Logo from '../logoComponents/logo'



const NavBarStyling = styled('div')({
  width: '100%',
  height: '10vh',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#FF3B3F',
})

const RowStyling = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
})

const NavItem = styled('div')({
  padding: '1vh',

})

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #FFFFFF;
    font-size: 18px;
    &:hover {
      color: #CAEBF2;
    }
    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

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
  // <ul>
  // <li><Link to={routes.LANDING}>Home</Link></li>
  // <li><Link to={routes.PROFILE}>Profile</Link></li>
  // <li><SignOutButton/> </li>
  // {/* <NavCTAButton name="Sign Out"/> */}
  // </ul>

  <RowStyling>
    <Logo />
    <NavItem><StyledLink to={routes.LANDING}>Home</StyledLink></NavItem>
    <NavItem><StyledLink to={routes.PROFILE}>Profile</StyledLink></NavItem>
    <NavItem><StyledLink to={routes.DASHBOARD}>Dashboard</StyledLink></NavItem>
    <NavItem><SignOutButton/></NavItem>
  </RowStyling>
  



  const NavigationNonAuth = () =>
  // <ul>
  // <li><Link to={routes.LANDING}>Home</Link></li>
  // {/* <li><Link to={routes.SIGN_IN}>Sign In</Link></li> */}
  // <li><SignInButton/></li>

  // {/* <NavCTAButton name="Sign In"/> */}
  // </ul>
    
  <RowStyling>
    <Logo />
    <NavItem><StyledLink to={routes.LANDING}>Home</StyledLink></NavItem>
    <NavItem><SignInButton/></NavItem>
  </RowStyling>

export default Navigation;