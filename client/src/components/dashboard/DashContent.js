import React from "react";
import { Link } from "react-router-dom";
import styled from "react-emotion";
import Button from "../button/Button";
import Iframe from "react-iframe";

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
  width: "100%",
  height: "100%",
  backgroundColor: "#A9A9A9",
  padding: "20",
  boxShadow: "0 0 2 2 rgba(0,0,0,0.4)",
  flexDirection: "row",
  display: "flex",
  margin: "0 auto"
});

const LinkWrapper = styled("div")({
  flexDirection: "row",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  justifyContent:"center"
});

const ContentHolder = styled("div")({
  width: "90vw",
  flex: "2",
  height : "100%"
});

// const TextHolder = styled("div")({
//   fontFamily= "'Niramit', sans-serif",
//   fontSize= "24px"
// });

const Iframes = styled(Iframe)({
  margin:"0 auto"
})

const centerButton ={
  justifyContent: "space-evenly"
}
 
const uniqueButton={

}

const iframeCard={
  height: "100vh"
}

const DashContent = () => (
  <Container>
    {/* <NavLinks /> */}
    <ContentHolder>
      {/* <Card>
        <h4>
        You can take the tests, check your scores, update your
        profile, or even look up more resources on CPR and for written exam.

        </h4>
      </Card> */}
      <Card style = {centerButton}>
        <LinkWrapper>
          <Button color="primary" href="/test" Name="Take the Test" />
          <Button color="secondary" href="/results" Name="Check your Score" />
        </LinkWrapper>
        {/*<TextHolder>
          If you wish to complete the Test or see what your current results look
          like. Please click on the two links to the left.
        </TextHolder> */}
      </Card>
      <Card style = {centerButton}>
        <div>
        <Button
          className="centerAlign"
          color="primary"
          href="/profile"
          Name="Enter Profile Pages"
        />
        </div>
        {/* <div>
          If you wish to update your profile to include more information, please
          click on the link to the right?
        </div>
        <LinkWrapper>
        </LinkWrapper> */}
      </Card>
      <Card style ={iframeCard}>
        <Iframes
          url="https://indd.adobe.com/view/9b04477d-e3ec-4fbd-9a55-043797a3c9a9"
          height="95vh"
          id="myId"
          className="centerAlign"
          display="initial"
          position="relative"
          width="80vw"
        />
      </Card>
    </ContentHolder>
  </Container>
);
export default DashContent;
