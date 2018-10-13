import React, { Component } from "react";
import TimerDisplay from "./TimerDisplay";

export default class Timer extends Component {
  state = {
    time: 1200,
    minutes: "20",
    seconds: "00",
    display: false,
    timer: false
  };

  componentDidUpdate() {
    // console.log(this.props);

    if (this.props.display === true && !this.state.timer) {
      let timer = setInterval(this.countDown, 1000);
      this.setState({ timer });
    }
  }

  // Functions for timer countdown
  countDown = () => {
    console.log("foo");
    let time = this.state.time - 1;
    this.setState({ time });
    if (this.state.time === 0) {
      console.log(this.props);
      this.props.props.history.push("/results");
      clearInterval(this.state.timer)
    } else if (this.state.time > 0) {
      console.log(this.state.time);
      let timer = this.calcTime(this.state.time);
      this.setState({ minutes: timer.minutes, seconds: timer.seconds });
    }
  };

  calcTime = time => {
    let minutes = Math.floor(time / 60);
    let seconds = Math.round((time / 60 - minutes) * 60);
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    let timer = { minutes, seconds };
    return timer;
  };

  render() {
    return (
      <TimerDisplay minutes={this.state.minutes} seconds={this.state.seconds} />
    );
  }
}
