import React, { Component } from 'react'
import styled from 'react-emotion'
import ScoreCardContainer from '../components/resultsComponents/ScoreCardContainer'
import API from '../utils/API'
import AuthUserContext from '../components/userLoginComponents/AuthUserContext';
import withAuthorization from '../components/userLoginComponents/withAuthorization';

const ResultsPageWrapper = styled('div') ({
    backgroundColor: '#A9A9A9',
    width: '100%',
    height: '1000px',
})
class Results extends Component {

    

    constructor(props) {
        super(props);

        // API.getUser(userEmail).then((results) => {
        //     this.setState({ score: results.data });
        // });
    
        this.state = {
          score: 100,
        };
      }

    render() {

        
        return(
            <AuthUserContext.Consumer>
                {authUser =>
                    <ResultsPageWrapper>
                        {/* <ScoreCardContainer userEmail={authUser.email} emoji={this.presentEmoji()}/> */}
                        <ScoreCardContainer userEmail={authUser.email}/>

                    </ResultsPageWrapper>
                }
            </AuthUserContext.Consumer>
        )
    }
}

// export default Results;

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Results);