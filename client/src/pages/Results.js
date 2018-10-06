import React, { Component } from 'react'
import styled from 'react-emotion'
import ScoreCardContainer from '../components/resultsComponents/ScoreCardContainer'


class Results extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          Score: 100,
        };
      }

    render() {



        return(
            <ScoreCardContainer/>
        )
    }
}

export default Results;