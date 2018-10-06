import React from "react";
import { Link } from "react-router-dom";
import styled from "react-emotion";

const NavStyles = styled(Link)({
  fontSize: "24px"
});
const NavContainer = styled("div")({
  flex: "1",
  padding: "20px",
  color: "a9a9a9",
  height: "80vh",
  flexDirection: "column",
  display: "flex",
  width: '10xw',
  maxWidth: '100px'
});

const NavLinks = () => (
  <NavContainer>
    <NavStyles to="/dashboard">Dashboard</NavStyles>
    <NavStyles to="/tests">Tests</NavStyles>
    <NavStyles to="/score">Score</NavStyles>
    <NavStyles to="/resources">Resources</NavStyles>
  </NavContainer>
);
export default NavLinks;
