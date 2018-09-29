import React from 'react'
import styled from 'react-emotion'

const AboutPageWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

const About = () => (
  <AboutPageWrapper>
    Hello, welcome to my about page!
  </AboutPageWrapper>
)

export default About