import React from 'react'
import styled from 'react-emotion'
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';

const LogoWrapper = styled('div') ({
  width: '100%',
  height: '100%',
  padding: '15px'
})


const Logo = () => {
  return (
    <LogoWrapper>
      <Link to={routes.LANDING}>
        <img src='/images/ACPR_Logo_200x60.png'/>
      </Link>  
    </LogoWrapper>
  )
}

export default Logo