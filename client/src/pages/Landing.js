import React from 'react'
import styled from 'react-emotion'
import Hero from '../components/Hero'
import MenuBar from '../components/MenuBar'

const LandPageWrapper = styled('div')({
  // display: 'flex',
  // alignItems: 'center',
  // justifyContent: 'center'
})

const About = () => (
  <LandPageWrapper>
    <MenuBar/>
    <Hero>
      Hello, welcome to my Landing page!
    </Hero>
  </LandPageWrapper>
)

export default About