import React from "react";
import styled from "react-emotion";

const Display = styled("div")({
  width: 200,
  margin: " 10px 10px 5px  auto",
  backgroundColor: "#CAEBF2",
  borderRadius: "5px",
  fontSize: "20px",
  textAlign: "center"
});
const Title = styled("div")({
  fontSize: "24px"
});

const TimerDisplay = ({ minutes, seconds }) => (
  <Display>
    Timer || {minutes}:{seconds}
  </Display>
);

export default TimerDisplay;
