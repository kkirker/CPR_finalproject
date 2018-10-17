import React from 'react'
import styled from 'react-emotion'



const MenuBarStyling = styled('div')({
  height: '8vh',
  backgroundColor: '#A9A9A9',
  color: '#FFFFFF'
})



const Footer = () => {
  return (
    <MenuBarStyling className='footer'>
      <p>American CPR.com | 760-944-9755 | Hours: 8AM – 5PM PT | 565 Westlake St., Suite 100 Encinitas, CA 92024<br />
      Copyright ©1993 - 2018 - American CPR - All rights reserved.
      </p>
    </MenuBarStyling>
  )
}



export default Footer