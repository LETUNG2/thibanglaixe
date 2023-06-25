import React from 'react';
import { TbFaceIdError, TbFaceId } from "react-icons/tb";
import { AnswerBox, AnswerText, AnswerInput, Content, Option, QuestionBox, QuestionImage, QuestionText, Result, ResultText, Wrapper } from './ResultsQuestionStyle';

const Question = (props) => {
    return (
        <Wrapper>
            <QuestionBox >
                <Content>
                    Câu {props.idQuestion}:
                    <QuestionText value={props.idQuestion}> {props.question}</QuestionText>
                </Content>
                <QuestionImage src={props.image}></QuestionImage>
                {props.select === props.answer ?
                    <AnswerBox>
                        {props.answer === 'A' ?
                            <Option>
                                <AnswerInput disabled type='radio' name={props.idQuestion} value='A' checked />
                                <AnswerText></AnswerText>
                                {props.A}
                            </Option> :
                            <Option>
                                <AnswerInput disabled type='radio' name={props.idQuestion} value='A' />
                                <AnswerText></AnswerText>
                                {props.A}
                            </Option>
                        }
                        {props.answer === 'B' ?
                            <Option>
                                <AnswerInput disabled type='radio' name={props.idQuestion} value='B' checked />
                                <AnswerText></AnswerText>
                                {props.B}
                            </Option> :
                            <Option>
                                <AnswerInput disabled type='radio' name={props.idQuestion} value='B' />
                                <AnswerText></AnswerText>
                                {props.B}
                            </Option>
                        }
                        {props.C ?
                            <Option >
                                {props.answer === 'C' ?
                                    <AnswerInput disabled type='radio' name={props.idQuestion} value='C' checked /> :
                                    <AnswerInput disabled type='radio' name={props.idQuestion} value='C' />
                                }
                                <AnswerText></AnswerText>
                                {props.C}
                            </Option> : null
                        }
                        {props.D ?
                            <Option >
                                {props.answer === 'D' ?
                                    <AnswerInput disabled type='radio' name={props.idQuestion} value='D' checked /> :
                                    <AnswerInput disabled type='radio' name={props.idQuestion} value='D' />
                                }
                                <AnswerText></AnswerText>
                                {props.D}
                            </Option> : null
                        }
                        <Result>
                            <ResultText className='Correct'> <TbFaceId style={{
                                color: 'green', padding: '0 5px',
                                fontSize: '20px'
                            }} />Bạn đã chọn đúng.</ResultText>
                        </Result>

                    </AnswerBox> :
                    <AnswerBox>
                        {props.select === 'A' ?
                            <Option>
                                <AnswerInput disabled type='radio' name={props.idQuestion} value='A' checked />
                                <AnswerText></AnswerText>
                                {props.A}
                            </Option> :
                            <Option>
                                <AnswerInput disabled type='radio' name={props.idQuestion} value='A' />
                                <AnswerText></AnswerText>
                                {props.A}
                            </Option>
                        }
                        {props.select === 'B' ?
                            <Option>
                                <AnswerInput disabled type='radio' name={props.idQuestion} value='B' checked />
                                <AnswerText></AnswerText>
                                {props.B}
                            </Option> :
                            <Option>
                                <AnswerInput disabled type='radio' name={props.idQuestion} value='B' />
                                <AnswerText></AnswerText>
                                {props.B}
                            </Option>
                        }
                        {props.C ?
                            <Option >
                                {props.select === 'C' ?
                                    <AnswerInput disabled type='radio' name={props.idQuestion} value='C' checked /> :
                                    <AnswerInput disabled type='radio' name={props.idQuestion} value='C' />
                                }
                                <AnswerText></AnswerText>
                                {props.C}
                            </Option> : null
                        }
                        {props.D ?
                            <Option >
                                {props.select === 'D' ?
                                    <AnswerInput disabled type='radio' name={props.idQuestion} value='D' checked /> :
                                    <AnswerInput disabled type='radio' name={props.idQuestion} value='D' />
                                }
                                <AnswerText></AnswerText>
                                {props.D}
                            </Option> : null
                        }
                        <Result>
                            <ResultText className='fail'> <TbFaceIdError style={{
                                color: 'red', padding: '0 5px',
                                fontSize: '20px'
                            }} />Bạn đã chọn sai. Đáp án đúng là: {props.answer}</ResultText>

                        </Result>

                    </AnswerBox>
                }
            </QuestionBox>

        </Wrapper>
    )

}
export default Question;