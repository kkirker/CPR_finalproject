import React, { Component } from 'react'
import styled from 'react-emotion'
import ScoreCardContainer from '../components/resultsComponents/ScoreCardContainer'

const ResultsPageWrapper = styled('div') ({
    backgroundColor: '#A9A9A9',
    width: '100%',
    height: '1000px',
})
class Results extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          Score: 100, 
        };
      }

    presentEmoji = (state) => {
        if (this.state.Score > 80) {
            return(
                <img src='http://cdn.shopify.com/s/files/1/1061/1924/products/Smiling_Face_Emoji_with_Blushed_Cheeks_grande.png?v=1480481056' width='20%' height='20%'/>
            )
        } else {
            return(
                <img src='https://cdn.shopify.com/s/files/1/1061/1924/files/Sad_Face_Emoji.png?9898922749706957214' width='20%' height='20%'/>
            )
    }}

    render() {

        
        return(
            <ResultsPageWrapper>
                <ScoreCardContainer score={this.state.Score} emoji={this.presentEmoji()}/>
            </ResultsPageWrapper>
        )
    }
}

export default Results;