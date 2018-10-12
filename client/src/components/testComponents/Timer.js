let time = 1200;

setInterval(countDown,1000)

function countDown(){
  console.log('foo')
  time -=1;
  if(time >0){
    console.log(time)
    console.log(calTime(time))
  };
}

function calTime(time){
  let minutes= Math.floor(time/60);
  let seconds= Math.round(((time/60)-minutes)*60);
  if (seconds < 10){
    seconds = `0${seconds}`
  }
  return `${minutes} : ${seconds}`
}