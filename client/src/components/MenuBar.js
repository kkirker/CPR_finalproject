import React from 'react'
import styled from 'react-emotion'
import MenuLogin from './MenuLogin'


const MenuBarStyling = styled('div')({
  width: '100vw',
  height: '10vh',
  display: 'flex',
  justifyContent: 'end',
})



const MenuBar = ({ text }) => {
  return (
    <MenuBarStyling>
        <MenuLogin/>
    </MenuBarStyling>
  )
}

export default MenuBar