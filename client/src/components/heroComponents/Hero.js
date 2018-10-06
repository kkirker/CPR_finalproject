import React from 'react'
import styled from 'react-emotion'
import LoginButton from './LoginButton'

const HeroWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center'
})

const HeroImage = styled('div')({
  width: '100%',
  height: '850px',
  backgroundImage: "url('https://images.unsplash.com/photo-1533026080863-c503c50220af?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=378d37d0a8694ddc8a854bc36a279079&auto=format&fit=crop&w=1630&q=80')",
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






const Hero = (props) => {
  return (
    <HeroWrapper>
      <HeroImage>
          <LandText>
              <h1>{props.cpr}</h1>
              <AltText>
              <h1>{props.landingText}</h1>
              {props.smallerText}
              </AltText>
          </LandText>
          <LoginButton/>
      </HeroImage>
    </HeroWrapper>
  )
}

export default Hero