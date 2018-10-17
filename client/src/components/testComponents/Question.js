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
            // UserAnswer: [],
            // QuestionAnswer: [props.answer],
        };
    }


    render() {


        return(
            <QuestionWrapper>
                <RadioButtonsGroup           
                    key={this.props.key}
                    id={this.props.id}
                    question={this.props.question}
                    options={this.props.options}
                    answer={this.props.answer}
                    updateUserAnswer={this.props.updateUserAnswer}
                />
                <Dividers/>
            </QuestionWrapper>
        );
    }
}

export default Question