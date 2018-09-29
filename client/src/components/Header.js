import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'react-emotion'

const HeaderWrapper = styled('header')({
  width: '100%',
  height: 60,
  boxShadow: '0 2px 2px 2px rgba(0,0,0,.3)',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around'
})

const Header = () => (
  <HeaderWrapper>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
  </HeaderWrapper>
)

export default Header