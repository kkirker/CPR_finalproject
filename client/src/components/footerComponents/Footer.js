import React from 'react'
import styled from 'react-emotion'



const MenuBarStyling = styled('div')({
  width: '100%',
  height: '10vh',
  backgroundColor: '#CAEBF2',
  textAlign: 'center',
  marginTop: '6vh',
  padding: '20px'
})



const Footer = () => {
  return (
    <MenuBarStyling>
      <p>Copyright ©1993 - 2018 - American CPR - All rights reserved.</p>
    </MenuBarStyling>
  )
}



export default Footer