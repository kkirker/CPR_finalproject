import React from 'react'
import styled from 'react-emotion'
import MenuLogin from './MenuLogin'


const MenuBarStyling = styled('div')({
  width: '100%',
  height: '10vh',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  backgroundColor: '#CAEBF2',
})



const MenuBar = (props) => {
  return (
    <MenuBarStyling>
        {props.children}
        <MenuLogin/>
    </MenuBarStyling>
  )
}

export default MenuBar;