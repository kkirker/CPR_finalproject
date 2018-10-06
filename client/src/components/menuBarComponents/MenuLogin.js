import React from 'react'
import styled from 'react-emotion'
import MenuLoginIcon from './MenuLoginIcon';


const MenuLoginStyling = styled('div')({
    marginRight: '50px',
})



const MenuLogin = ({ text }) => {
  return (
    <MenuLoginStyling>
        <MenuLoginIcon/>
    </MenuLoginStyling>
  )
}

export default MenuLogin