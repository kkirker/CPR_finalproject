import React from 'react'
import styled from 'react-emotion'

const WelcomePageWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

const Welcome = () => (
  <WelcomePageWrapper>
    Hello, welcome to my welcome page!
  </WelcomePageWrapper>
)

export default Welcome