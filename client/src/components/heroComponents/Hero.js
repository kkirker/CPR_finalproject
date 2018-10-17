import React from 'react'
import styled from 'react-emotion'
import LoginButton from './LoginButton'

const HeroWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center'
})

const HeroImage = styled('div')({
  width: '100%',
  height: '700px',
  backgroundImage: "url('./images/hero-image.jpg')",
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  display: 'flex',
  // justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
})

const LandText = styled('h1')({
    color: '#FF3B3F',
    textAlign: 'center',
})

const AltText = styled('h3')({
  color: 'white',
  textAlign: 'center',

})

const Welcome = styled('h1')({
  color: 'white',
  textAlign: 'center',
  fontSize: '72px'

})


const Hero = (props) => {
  return (
    <HeroWrapper>
      <HeroImage>
          <LandText className='hero-text'>
          <Welcome>{props.landingText}</Welcome>
          <AltText>American CPR Training Online Testing</AltText>
              {props.cpr}
              <AltText>
              {props.smallerText}
              </AltText>
              <LoginButton/>
          </LandText>
      </HeroImage>
    </HeroWrapper>
  )
}

export default Hero