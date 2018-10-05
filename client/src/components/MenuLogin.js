import React from 'react'
import styled from 'react-emotion'
import MenLoginIcon from './MenuLoginIcon'
import MenuLoginIcon from './MenuLoginIcon';


const MenuLoginStyling = styled('div')({
//   width: '100vw',
//   height: '10vh',
//   display: 'flex',
//   justifyContent: 'end',
})



const MenuLogin = ({ text }) => {
  return (
    <MenuLoginStyling>
        <MenuLoginIcon/>
    </MenuLoginStyling>
  )
}

export default MenuLogin