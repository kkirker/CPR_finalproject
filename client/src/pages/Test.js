import React, { Component } from 'react'
import styled from 'react-emotion'
import TestContainer from '../components/testComponents/TestContainer'
import Question from '../components/testComponents/Question'
import TestStartButton from '../components/testComponents/TestStartButton'
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



class Test extends Component {

    constructor(props) {

        API.getTest("1").then((results) => {
            this.setState({ questions: results.data.questions });
        });

        super(props);
    
        this.state = {
          showQuestions: false,
          questions: []
        };
        this.handleClick = this.handleClick.bind(this);
      }

    componentDidUpdate() {
        console.log(this.state);
    }
    
    updateUserAnswer = (questionId, userAnswer) => {
        // debugger
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
        console.log('foo');
        
        this.setState({
            showQuestions: true
        });
        console.log(this.state.showQuestions);
        this.displayQuestions();
        this.displaySubmitButton();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let userAnswers = [];
        let testAnswers = [];
        //gets all user answers from questions object
        userAnswers = this.state.questions.map(question => {
            // userAnswers.push(question.userAnswer);
            return question.userAnswer
        });
        console.log(userAnswers);
        //gets all correct answers from questions object
        testAnswers = this.state.questions.map(question => {
            return question.answer
        });
        console.log(testAnswers);
        


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
            <TestPageWrapper>
                {/* <Timer display={this.state.showQuestions} props = {this.props}/> */}
                <TestContainer displayQuestions={this.state.showQuestions && <Question />}
                                handleSubmit={this.handleSubmit}
                                updateUserAnswer={this.updateUserAnswer}
                                displaySubmitButton={this.state.showQuestions && <TestSubmitButton 
                                />} 
                                
                                questions={this.state.questions}
                                displayTime = {this.displayTimer}/>
                                {/* {this.state.displayQuestions? this.state.CPRTest.data.questions.map(question => (
                                    this.state.QuestionsObj.push(
                                    <Question 
                                        key={question.id}
                                        id={question.id}
                                        question={question.question}
                                        options={question.options}
                                        answer={question.answer}
                                        getUserAnswers={this.getUserAnswers}

                                    />

                                    
                                ))): null} */}
                                {/* </TestContainer> */}
                <TestButtonWrapper >
                    <TestStartButton handleClick={this.handleClick}/>
                </TestButtonWrapper>
            </TestPageWrapper>

        );
    }
}

export default Test;