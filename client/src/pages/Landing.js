import React , { Component } from 'react'
import styled from 'react-emotion'
import Hero from '../components/heroComponents/Hero'
import UnderHero1 from '../components/landingComponentsExtra/UnderHero1'

const LandPageWrapper = styled('div')({
  
})

class About extends Component {

  render() {
    let cpr = 'CPR';
    let landingText = 'ONLINE TEST';
    let smallerText = 'Save a life, Motherfucker';

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