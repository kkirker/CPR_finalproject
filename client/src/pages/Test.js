import React, { Component } from 'react'
import styled from 'react-emotion'
import TestContainer from '../components/testComponents/TestContainer'
import MenuBar from '../components/menuBarComponents/MenuBar'


const TestPageWrapper = styled('div') ({
    backgroundColor: '#A9A9A9',
    width: '100%',
    height: '1000px',
})

class Test extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          version: 1,
        };
      }


    render() {



        return(
            <TestPageWrapper>
            <MenuBar/>
            <TestContainer/>
            </TestPageWrapper>

        );
    }
}

export default Test;