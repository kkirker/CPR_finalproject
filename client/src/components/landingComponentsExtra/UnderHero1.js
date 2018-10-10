import React from 'react'
import styled from 'react-emotion'
import UnderHeroImage from '../landingComponentsExtra/UnderHeroImage'
import UnderHeroBlurb from '../landingComponentsExtra/UnderHeroBlurb'

const UnderHeroWrapper = styled('div') ({
  display: 'flex',
  width: '100%',
  height: '600px',
  alignItems: 'center',
})


const UnderHero1 = () => {
  return (
    <UnderHeroWrapper className="container">
        <UnderHeroImage/>
        <UnderHeroBlurb/>
    </UnderHeroWrapper>
  )
}

export default UnderHero1