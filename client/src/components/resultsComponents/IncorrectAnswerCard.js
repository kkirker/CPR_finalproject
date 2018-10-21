import React from "react";
import styled from "react-emotion";

const IncorrectAnswerCard = (props) => {

    return(

        <div>
        {props.questionTitle} <br/>
        Correct Answer: {props.correctAnswer}<br/>
        Your Answer: {props.userAnswer}
        <br/><br/>
    </div>
    )
  
}
  
  export default IncorrectAnswerCard;