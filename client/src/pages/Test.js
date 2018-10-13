import React, { Component } from 'react'
import styled from 'react-emotion'
import TestContainer from '../components/testComponents/TestContainer'
import Question from '../components/testComponents/Question'
import TestStartButton from '../components/testComponents/TestStartButton';
import Timer from '../components/testComponents/Timer'
import CPRTest from '../CPRTest.json'

const TestPageWrapper = styled('div') ({
    backgroundColor: '#A9A9A9',
    width: '100%',
    minHeight: '100vh;',
    height: '100%',
})

const TestButtonWrapper = styled('div') ({
    display: 'flex',
    justifyContent: 'center',
    padding: '50px',
})

class Test extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          version: 1,
          showQuestions: false,
          CPRTest,
          AnswersObj: {
              
          }
        };
        this.handleClick = this.handleClick.bind(this);
      }

    componentDidUpdate() {
        console.log(this.state);
    }


    handleClick = (e) => {
        e.preventDefault();
        console.log('foo');
        
        this.setState({
            showQuestions: true
        });
        console.log(this.state.showQuestions);
        this.displayQuestions();
    }

    displayQuestions = () => {
            return(
                <Question/>
            )
        
    }
    


    render() {



        return(
            <TestPageWrapper>
                {/* <Timer/> */}
                <Timer display={this.state.showQuestions}/>
                <TestContainer displayQuestions={this.state.showQuestions && <Question />} CPRTest={this.state.CPRTest} displayTime = {this.displayTimer}/>
                <TestButtonWrapper>
                    <TestStartButton handleClick={this.handleClick}/>
                </TestButtonWrapper>
            </TestPageWrapper>

        );
    }
}

export default Test;