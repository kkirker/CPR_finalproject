import React from 'react'
import styled from 'react-emotion'
import Hero from '../components/Hero'
import MenuBar from '../components/MenuBar'
import SignInScreen from '../components/SignInScreen'

const LandPageWrapper = styled('div')({
  // display: 'flex',
  // alignItems: 'center',
  // justifyContent: 'center'
})

const SignIn = () => (
  <SignInScreen/>
)

export default SignIn