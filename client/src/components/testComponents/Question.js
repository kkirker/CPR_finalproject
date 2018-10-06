import React, { Component } from 'react'
import styled from 'react-emotion'
import Dividers from '../UTILS/DividerHorizontal'
import RadioButtonsGroup from './AnswersBoxes'

const QuestionWrapper = styled('div') ({

})

class Question extends Component {
    constructor(props) {
        super(props);

        this.state = {
            UserAnswer: 1,
            QuestionAnswer: 1,
        };
    }


    render() {


        return(
            <QuestionWrapper>
                <div>
                    1. I'm Ron Burgundy?
                </div>
                <Dividers/>
                <RadioButtonsGroup/>
            </QuestionWrapper>
        );
    }
}

export default Question