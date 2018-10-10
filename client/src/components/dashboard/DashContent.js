import React from "react";
import { Link } from "react-router-dom";
import styled from "react-emotion";
import NavLinks from "../menuBarComponents/NavBar/NavLinks";

// Styles
const Card = styled("div")({
  backgroundColor: "#EFEFEF",
  padding: "20",
  border: "1px solid black",
  display: "flex",
  flexDirection: "row"
});

const Container = styled("div")({
  width: "90%",
  backgroundColor: "#CAEBF2",
  padding: "20",
  boxShadow: "0 0 2 2 rgba(0,0,0,0.4)",
  flexDirection:"row",
  display: "flex"
});

const LinkWrapper = styled("div")({
  flex: "1",
  flexDirection: "column",
  justifyContent: "spaceBetween"
});

const ContentHolder = styled('div')({
    width:'90vw',
    flex: "2"
});

const DashContent = () => (
  <Container>
    <NavLinks />
    <ContentHolder>
      <Card>
        Welcome to Still Alive. This webpage was developed to help you pass your
        written CPR test. On this page, you can do multiple things. Take the
        tests, check your scores, update your profile, or even look up more
        resources on CPR.
      </Card>
      <Card>
        <LinkWrapper>
          <Link to="/test">Link to Test</Link>
          <Link to="/Results">Link to Results</Link>
        </LinkWrapper>
        <div>
          If you wish to complete the Test or see what your current results look
          like. Please click on the two links to the left.{" "}
        </div>
      </Card>
      <Card>
        <div>
          If you wish to update your profile to include more information, please
          click on the link to the right?
        </div>
        <LinkWrapper>
          <Link to="/Profile">Link to Profile</Link>
        </LinkWrapper>
      </Card>
      <Card>
        All remaining extra resources can be found here{" "}
        <Link to="/resources">Link</Link>
      </Card>
    </ContentHolder>
  </Container>
);
export default DashContent;
