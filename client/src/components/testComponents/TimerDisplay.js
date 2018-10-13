import React from "react";
import styled from "react-emotion";

const Display = styled("div")({});

const TimerDisplay = ({ minutes, seconds }) => {
  <Display>
    {minutes}:{seconds}
  </Display>;
};

export default TimerDisplay;
