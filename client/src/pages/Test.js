import React, { Component } from 'react'
import styled from 'react-emotion'
import TestContainer from '../components/testComponents/TestContainer'


class Test extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          version: 1,
        };
      }


    render() {



        return(
            <TestContainer/>
        );
    }
}

export default Test;