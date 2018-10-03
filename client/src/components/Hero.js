import React from 'react'
import styled from 'react-emotion'
import LoginButton from './LoginButton'
import About from '../pages/Landing'

const HeroWrapper = styled('div')({
  height: '100vh',
  width: '100vw',
  backgroundImage: "url('https://images.unsplash.com/photo-1533026080863-c503c50220af?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=378d37d0a8694ddc8a854bc36a279079&auto=format&fit=crop&w=1630&q=80')",
  backgroundSize: 'cover',
  display: 'flex',
  alignText: 'center',
  justifyContent: 'center',
})


const Hero = ({ text }) => {
  return (
    <HeroWrapper>
        {text}
        <LoginButton/>
    </HeroWrapper>
  )
}

export default Hero