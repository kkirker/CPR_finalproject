import React from 'react'
import styled from 'react-emotion'

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

const ScoreCardContainer = (props) => {
    return (
        <ResultsContainerStyle>
            <h1>Test Results</h1>
            <ScoreStyle>
                <h1>
                    Your Score: {props.score} !
                </h1>
                <div>
                {props.emoji}
                </div>
            </ScoreStyle>
        </ResultsContainerStyle>
    )
}

export default ScoreCardContainer

