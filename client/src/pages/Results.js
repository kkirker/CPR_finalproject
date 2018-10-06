import React, { Component } from 'react'
import styled from 'react-emotion'
import ScoreCardContainer from '../components/resultsComponents/ScoreCardContainer'
import MenuBar from '../components/menuBarComponents/MenuBar'

const ResultsPageWrapper = styled('div') ({

})
class Results extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          Score: 100,
        };
      }

    render() {



        return(
            <ResultsPageWrapper>
                <MenuBar/>
                <ScoreCardContainer/>
            </ResultsPageWrapper>
        )
    }
}

export default Results;