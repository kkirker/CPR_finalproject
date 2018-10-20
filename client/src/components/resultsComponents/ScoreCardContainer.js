import React, { Component } from 'react'
import styled from 'react-emotion'
import API from '../../utils/API'

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

        API.getUser(props.userEmail).then((results) => {
            console.log(results.data.score)
            this.setState({ score: results.data.score });
        });
    
        this.state = {
          score: 100,
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
                    </div>
                </ScoreStyle>
            </ResultsContainerStyle>
        )

    }
    
}

export default ScoreCardContainer

