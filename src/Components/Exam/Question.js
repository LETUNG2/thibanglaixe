import React from 'react';
import { AnswerBox, AnswerText, Content, Option, QuestionBox, QuestionImage, QuestionText, Wrapper, AnswerInput } from './QuestionStyle';

const Question = (props) => {
    return (
        <Wrapper>
            <QuestionBox >
                <Content>
                    Câu {props.num}:
                    <QuestionText value={props.num}> {props.question} </QuestionText>
                </Content>
                <QuestionImage src={props.image}></QuestionImage>
                <AnswerBox>
                    <Option>
                        <AnswerInput type='radio' name={props.num} value='A' onChange={(e, idQuestion) => props.selectOnChange(e, props.idQuestion)} />
                        <AnswerText></AnswerText>
                        {props.A}
                    </Option>
                    <Option >
                        <AnswerInput type='radio' name={props.num} value='B' onChange={(e, idQuestion) => props.selectOnChange(e, props.idQuestion)} />
                        <AnswerText></AnswerText>
                        {props.B}
                    </Option>
                    {props.C ?
                        <Option >
                            <AnswerInput type='radio' name={props.num} value='C' onChange={(e, idQuestion) => props.selectOnChange(e, props.idQuestion)} />
                            <AnswerText></AnswerText>
                            {props.C}
                        </Option> : null
                    }
                    {props.D ?
                        <Option >
                            <AnswerInput type='radio' name={props.num} value='D' onChange={(e, idQuestion) => props.selectOnChange(e, props.idQuestion)} />
                            <AnswerText></AnswerText>
                            {props.D}
                        </Option> : null
                    }

                </AnswerBox>
            </QuestionBox>

        </Wrapper>
    )

}
export default Question;