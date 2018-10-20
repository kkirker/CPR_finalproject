import React, { Component } from 'react'
import styled from 'react-emotion'
import { withRouter } from 'react-router-dom';
import * as routes from '../constants/routes';
import TestContainer from '../components/testComponents/TestContainer'
import Question from '../components/testComponents/Question'
import TestStartButton from '../components/testComponents/TestStartButton'
import AuthUserContext from '../components/userLoginComponents/AuthUserContext';
import withAuthorization from '../components/userLoginComponents/withAuthorization';

import Timer from '../components/testComponents/Timer'
// import CPRTest from '../CPRTest.json'
import API from '../utils/API'
import TestSubmitButton from '../components/testComponents/TestSubmitButton'

const TestPageWrapper = styled('div') ({
    backgroundColor: '#A9A9A9',
    width: '100%',
    minHeight: '100vh;',
    height: '100%',
    paddingTop:'.1px'
})

const TestButtonWrapper = styled('div') ({
    display: 'flex',
    justifyContent: 'center',
    padding: '50px',
})

const TestPage = ({ history }) =>
    <Test history={history} />

class Test extends Component {

    constructor(props) {

        //API call gets full test and updates it to state of parent component
        API.getTest("1").then((results) => {
            this.setState({ questions: results.data.questions });
        });

        super(props);
    
        this.state = {
            //initial state is that questions do not show on test page
          showQuestions: false,
          questions: []
        };
        this.handleClick = this.handleClick.bind(this);
      }

    updateUserAnswer = (questionId, userAnswer) => {
        //user answers to test are assigned as userAnswer to questions object on state
        const questionsWithUserAnswer = this.state.questions.map(question => {
            if (question.questionID === questionId) {
                return Object.assign({}, question, { userAnswer })
            }
            return question
        })
        this.setState({ questions: questionsWithUserAnswer })
        console.log(questionsWithUserAnswer)
    }

    handleClick = (e) => {
        e.preventDefault();
        
        //tigger to change whether questions display
        this.setState({
            showQuestions: true
        });
        console.log(this.state.showQuestions);
        this.displayQuestions();
        this.displaySubmitButton();
    }

    handleSubmit = (currentUser) => (e) => {
        const {
            history,
          } = this.props;

        console.log(currentUser);

        e.preventDefault();
        let userAnswers = [];
        let testAnswers = [];
        let incorrectArray = [];
        let count = 0;

        //gets all user answers from questions object
        userAnswers = this.state.questions.map(question => {
            return question.userAnswer
        });
        
        //gets all correct answers from questions object
        testAnswers = this.state.questions.map(question => {
            return question.answer
        });
        
        //loops through both above arrays and returns either '-' for correct or user answer to incorrect array, and raises count for each incorrect
        for( let i=0; i < testAnswers.length; i++) {
            if (userAnswers[i] === testAnswers[i]) {
                incorrectArray.push('-')
            } else {
                incorrectArray.push(userAnswers[i]);
                count++;
            };
        }
        
        let score = ((50 - count) / 50 ) * 100; 

        console.log(score + '%');

        //Update the user with their score to be used on the results page
        API.updateUser(currentUser , {
            score: score,
          })
          .then( (updatedUser) => {
           console.log(updatedUser)
           history.push(routes.RESULTS);
          })
        
    }

    getUserAnswers = () => {
        console.log('answer changed');

    }

    displayQuestions = () => {
        return(
            <Question/>
        )
    }

    displaySubmitButton = () => {
        return(
            <TestSubmitButton handleSubmit={this.handleSubmit}/>
        )
}

    render() {
        return(
            <AuthUserContext.Consumer>
                { authUser =>
                    <TestPageWrapper>
                        {/* <Timer display={this.state.showQuestions} props = {this.props}/> */}
                        <TestContainer displayQuestions={this.state.showQuestions && <Question />}
                                        handleSubmit={this.handleSubmit}
                                        updateUserAnswer={this.updateUserAnswer}
                                        displaySubmitButton={this.state.showQuestions && <TestSubmitButton/>} 
                                        questions={this.state.questions}
                                        displayTime = {this.displayTimer} />
                        <TestButtonWrapper >
                            <TestStartButton handleClick={this.handleClick} />
                        </TestButtonWrapper>
                    </TestPageWrapper>
                }
            </AuthUserContext.Consumer>

        );
    }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Test);

// export default Test;