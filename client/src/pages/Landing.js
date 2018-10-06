import React , { Component } from 'react'
import styled from 'react-emotion'
import Hero from '../components/heroComponents/Hero'
import MenuBar from '../components/menuBarComponents/MenuBar'
import UnderHero1 from '../components/landingComponentsExtra/UnderHero1'
import Footer from '../components/footerComponents/Footer'
import MenuBarSpacing from '../components/menuBarComponents/MenuSpacing'


const LandPageWrapper = styled('div')({
  
})

class About extends Component {

  render() {
    let cpr = 'CPR';
    let landingText = 'ONLINE TEST';
    let smallerText = 'Save a life, Motherfucker';

    return(
      <LandPageWrapper>
        <MenuBar/>
        <MenuBarSpacing/>  
          <Hero cpr={cpr} landingText={landingText} smallerText={smallerText}>
          </Hero>
        <UnderHero1/>
        <Footer/>
    </LandPageWrapper>
    );
  }
}

export default About;