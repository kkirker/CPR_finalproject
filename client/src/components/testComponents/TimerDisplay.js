import React from "react";
import styled from "react-emotion";

const Display = styled("div")({
    height:20,
    width:200
});

const TimerDisplay = ({ minutes, seconds }) => 
  (<Display>
    {minutes}:{seconds}
  </Display>)
;

export default TimerDisplay;
