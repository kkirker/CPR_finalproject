import React from 'react'
import styled from 'react-emotion'
import Hero from '../components/Hero'

const LandPageWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

const About = () => (
  <LandPageWrapper>
    <Hero/>
    Hello, welcome to my about page!
  </LandPageWrapper>
)

export default About