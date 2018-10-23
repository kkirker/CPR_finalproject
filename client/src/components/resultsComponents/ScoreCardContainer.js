import React, { Component } from 'react'
import styled from 'react-emotion'
import API from '../../utils/API'
import IncorrectAnswerCard from './IncorrectAnswerCard'

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
    border: '0 0 2px 2px',
    borderStyle: 'solid',
    borderColor: 'rgb(255, 59, 63)',
    borderRadius: '25px',
    flexDirection: 'column',
    backgroundColor: 'rgb(239, 239, 239)',
    marginTop: '20px'
})

class ScoreCardContainer extends Component {


    constructor(props) {
        super(props);

        console.log(props.userEmail);

        // Get the user's score & test results from the db
        API.getUser(props.userEmail).then((results) => {
            console.log(results.data.score)
            this.setState({ score: results.data.score, userAnswers: results.data.testAnswers });
        }).then(() => {

            //Get the test questions from the API
            API.getTest("1").then((results) => {
                this.setState({ testQuestions: results.data.questions });
            })
            
            .then(() => {
                for(let i=0; i < this.state.userAnswers.length; i++){
                    if (this.state.userAnswers[i] !== '-' && this.state.userAnswers[i] !== null){

                        //Make variables for the user and test Q/As to make things cleaner
                        let testQ = this.state.testQuestions[i].options
                        let testA = this.state.testQuestions[i].answer
                        let userA = this.state.userAnswers[i]

                        let object = {
                            title: this.state.testQuestions[i].question,
                            correctAnswer: testQ[testA],
                            userAnswer: testQ[userA],

                        }

                        //Update the state with the array
                        let incorrectAnswerObjects = [...this.state.incorrectAnswerObjects]
                        incorrectAnswerObjects.push(object);
                        this.setState({incorrectAnswerObjects})
                        // console.log(this.state.incorrectAnswerObjects);
                    }
                }
            });


        })
        
        this.state = {
          score: 100,
          userAnswers: [],
          incorrectAnswerObjects: [],
          testQuestions: [],
        };
      }


    render(){

            return (
                <ResultsContainerStyle>
                    <h1 className='results-h1'>Exam Results</h1>
                    <ScoreStyle>
                        <h1 className='red-h1'>
                            Your Score: {this.state.score}% !
                        </h1>
                        <div>
                            {this.state.incorrectAnswerObjects.map(obj => { 
                                return <IncorrectAnswerCard 
                                    // questionID={obj.ID}
                                    questionTitle={obj.title}
                                    correctAnswer={obj.correctAnswer}
                                    userAnswer={obj.userAnswer} 
                                    />
                            })}
                        </div>
                    </ScoreStyle>
                </ResultsContainerStyle>
            )
    

        // }
       
    }
    
}

export default ScoreCardContainer

