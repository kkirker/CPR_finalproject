import React from 'react'
import styled from 'react-emotion'
import Question from './Question'
import TestStartButton from './TestStartButton'



const TestContainerStyle = styled('div') ({
    paddingRight: '100px',
    paddingLeft: '100px',
    textAlign: 'center',
})

const QuestionsStyle = styled('div') ({
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    border: '0 0 4px 4px rgb(221,221,221)',
    borderStyle: 'solid',
})



const TestContainer = (props) => {
        
        return(
        <TestContainerStyle>
                <h1>CPR Test</h1>
                {/* <TestStartButton onClick={props.handleClick}/> */}
            <QuestionsStyle>
                {/* { props.displayQuestions } */}
            </QuestionsStyle>
        </TestContainerStyle>
        )
    }

export default TestContainer