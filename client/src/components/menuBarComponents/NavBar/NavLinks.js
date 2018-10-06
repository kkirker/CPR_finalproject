import React from "react";
import { Link } from "react-router-dom";
import styled from 'react-emotion'


const NavStyles = styled(Link)({
    marginRight: 10,
    
})

const NavLinks = () => (
  <div>
    <NavStyles to="/dashboard">Dashboard</NavStyles>
    <NavStyles to="/tests">Tests</NavStyles>
    <NavStyles to="/score">Score</NavStyles>
    <NavStyles to="/resources">Resources</NavStyles>
  </div>
);
export default NavLinks;
