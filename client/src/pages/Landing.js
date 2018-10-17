import React , { Component } from 'react'
import styled from 'react-emotion'
import Hero from '../components/heroComponents/Hero'
import UnderHero1 from '../components/landingComponentsExtra/UnderHero1'

const LandPageWrapper = styled('div')({
  
})

class About extends Component {

  render() {
    let cpr = '½ the Time, ½ the Price, and TWICE the Fun!™';
    let landingText = 'WELCOME';
    let smallerText = 'Save a Life A.C.T. Now!';

    return(
      <LandPageWrapper>
          <Hero cpr={cpr} landingText={landingText} smallerText={smallerText}>
          </Hero>
        <UnderHero1/>
    </LandPageWrapper>
    );
  }
}

export default About;