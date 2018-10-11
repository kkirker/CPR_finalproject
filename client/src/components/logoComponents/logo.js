import React from 'react'
import styled from 'react-emotion'

const LogoWrapper = styled('div') ({
  width: '100%',
  height: '100%',
  padding: '15px'
})


const Logo = () => {
  return (
    <LogoWrapper>
        <img src='/images/ACPR_Logo_200x60.png'/>
    </LogoWrapper>
  )
}

export default Logo