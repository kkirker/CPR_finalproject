import React from 'react'
import styled from 'react-emotion'
import Hero from '../components/heroComponents/Hero'
import MenuBar from '../components/menuBarComponents/MenuBar'
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