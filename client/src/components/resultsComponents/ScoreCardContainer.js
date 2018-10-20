import React, { Component } from 'react'
import styled from 'react-emotion'
import API from '../../utils/API'
import IncorrectAnswersCard from './IncorrectAnswerCard'

const ResultsContainerStyle = styled('div') ({
    paddingRight: '100px',
    paddingLeft: '100px',
    textAlign: 'center',
})

const ScoreStyle = styled('div') ({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignContent: 'center',
    border: '0 0 4px 4px rgb(221,221,221)',
    borderStyle: 'solid',
    minHeight: '400px',
})

class ScoreCardContainer extends Component {


    constructor(props) {
        super(props);

        console.log(props.userEmail);

        //Get the user's score & test results from the db
        API.getUser(props.userEmail).then((results) => {
            console.log(results.data.score)
            this.setState({ score: results.data.score, userAnswers: results.data.testAnswers });
        });

        //Create the new IncorrectAnswers array that will hold an array of objects to render via the IncorrectAnswersCard component 
        //Get the incorrect answers out of the userAnswers 
        // if not - or null, then find the index of that answer, get the test question / answer, and construct and object
        //Object should contain the question number, title, answer, and incorrect user answer
    
    
        this.state = {
          score: 100,
          userAnswers: [],
        };
      }




    render(){
        return (
            <ResultsContainerStyle>
                <h1>Test Results</h1>
                <ScoreStyle>
                    <h1>
                        Your Score: {this.state.score}% !
                    </h1>
                    <div>
                    {/* {props.emoji} */}
                    {/* forEach through the incorrect answers array here and display via the incorrectanswerscard */}
                    </div>
                </ScoreStyle>
            </ResultsContainerStyle>
        )

    }
    
}

export default ScoreCardContainer

