import React from "react";
import { Link } from "react-router-dom";
import styled from "react-emotion";
import Button from "../button/Button";

// Styles
const Card = styled("div")({
  backgroundColor: "#EFEFEF",
  padding: "20",
  display: "flex",
  flexDirection: "row",
  margin: "10px 0px",
  borderRadius: "5px"
});

const Container = styled("div")({
  width: "90%",
  backgroundColor: "#CAEBF2",
  padding: "20",
  boxShadow: "0 0 2 2 rgba(0,0,0,0.4)",
  flexDirection: "row",
  display: "flex",
  margin: "0 auto"
});

const LinkWrapper = styled("div")({
  flex: "1",
  flexDirection: "column",
  justifyContent: "spaceBetween"
});

const ContentHolder = styled("div")({
  width: "90vw",
  flex: "2"
});

const TextHolder = styled("div")({
  flex: "2",
  textAlign: "center",
  display: "flex",
  margin: "auto"
});

const DashContent = () => (
  <Container>
    {/* <NavLinks /> */}
    <ContentHolder>
      <Card>
        Welcome to Still Alive. This webpage was developed to help you pass your
        written CPR test. You can take the tests, check your scores, update your
        profile, or even look up more resources on CPR.
      </Card>
      <Card>
        <LinkWrapper>
          <Button color="Primary" href="/test" Name="Take the Test" />
          <Button color="Secondary" href="/results" Name="Check your Score" />
        </LinkWrapper>
        <TextHolder>
          If you wish to complete the Test or see what your current results look
          like. Please click on the two links to the left.
        </TextHolder>
      </Card>
      <Card>
        <div>
          If you wish to update your profile to include more information, please
          click on the link to the right?
        </div>
        <LinkWrapper>
          <Button color="Primary" href="/profile" Name="Enter Profile Pages" />
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
