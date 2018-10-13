import React, { Component } from "react";
import TimerDisplay from "./TimerDisplay"

class Timer extends Component {
  state = {
      time = 1200,
      minutes,
      seconds
  };

componentDidMount(){
  setInterval(countDown,1000);
    
}
    
// Functions for timer countdown
  countDown= ()=>{
    console.log('foo')
    setState(this.state.time -=1);
    if(this.state.time >0){
      console.log(this.state.time)
      let timer = calTime(this.state.time)
      setState({ minutes= timer.minutes, seconds = timer.seconds })
  };
}

 calcTime=(time)=>{
  let minutes= Math.floor(time/60);
  let seconds= Math.round(((time/60)-minutes)*60);
  if (seconds < 10){
    seconds = `0${seconds}`
  }
  let timer = {minutes, seconds}
  return timer
}

render () { 
  return(
    <TimerDisplay minutes={this.state.minutes} seconds = {this.state.seconds} />
  )
}
}