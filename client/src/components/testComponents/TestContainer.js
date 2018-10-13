import React from 'react'
import styled from 'react-emotion'
import Question from './Question'
import TestSubmitButton from './TestSubmitButton';

const TestContainerStyle = styled('div') ({
    paddingRight: '100px',
    paddingLeft: '100px',
    textAlign: 'center',
})

const QuestionsStyle = styled('div') ({
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    border: '0 0 2px 2px',
    borderStyle: 'solid',
    borderColor: 'rgb(255, 59, 63)',
    flexDirection: 'column',
    backgroundColor: 'rgb(239, 239, 239)',
})

const TestSubmitButtonStyle = styled('div') ({
    display: 'flex',
    justifyContent: 'center',
    padding: '50px',
})


const TestContainer = (props) => {
        
        return(
        <TestContainerStyle>
                <h1>CPR Test</h1>
            <QuestionsStyle>
                {/* {console.log(props)} */}
            {props.displayQuestions? props.CPRTest.map(question => (
                <Question 
                    key={question.id}
                    id={question.id}
                    question={question.question}
                    options={question.options}
                    answer={question.answer}
                />

                
            )): null}
            </QuestionsStyle>
            <TestSubmitButtonStyle>
            {props.displayQuestions ? <TestSubmitButton/>:null}
            </TestSubmitButtonStyle>
        </TestContainerStyle>
        )
    }

export default TestContainer