import React from 'react';
import { AnswerBox, AnswerText, AnswerInput, Content, Option, QuestionBox, QuestionImage, QuestionText, Result, ResultText, Wrapper } from './ResultsQuestionStyle';

const Question = (props) => {
    return (
        <Wrapper>
            <QuestionBox >
                <Content>
                    Câu {props.idQuestion}:
                    <QuestionText value={props.idQuestion}></QuestionText>
                    {props.question}
                    <QuestionImage src={props.image}></QuestionImage>
                </Content>
                {props.select === props.answer ?
                    <AnswerBox>
                        {props.answer === 'A' ?
                            <Option>
                                <AnswerInput type='radio' name={props.idQuestion} value='A' checked />
                                <AnswerText></AnswerText>
                                {props.A}
                            </Option> :
                            <Option>
                                <AnswerInput type='radio' name={props.idQuestion} value='A' />
                                <AnswerText></AnswerText>
                                {props.A}
                            </Option>
                        }
                        {props.answer === 'B' ?
                            <Option>
                                <AnswerInput type='radio' name={props.idQuestion} value='B' checked />
                                <AnswerText></AnswerText>
                                {props.B}
                            </Option> :
                            <Option>
                                <AnswerInput type='radio' name={props.idQuestion} value='B' />
                                <AnswerText></AnswerText>
                                {props.B}
                            </Option>
                        }
                        {props.C ?
                            <Option >
                                {props.answer === 'C' ?
                                    <AnswerInput type='radio' name={props.idQuestion} value='C' checked /> :
                                    <AnswerInput type='radio' name={props.idQuestion} value='C' />
                                }
                                <AnswerText></AnswerText>
                                {props.C}
                            </Option> : null
                        }
                        {props.D ?
                            <Option >
                                {props.answer === 'D' ?
                                    <AnswerInput type='radio' name={props.idQuestion} value='D' checked /> :
                                    <AnswerInput type='radio' name={props.idQuestion} value='D' />
                                }
                                <AnswerText></AnswerText>
                                {props.D}
                            </Option> : null
                        }
                        <Result>
                            <ResultText>Bạn đã chọn đúng.</ResultText>
                        </Result>

                    </AnswerBox> :
                    <AnswerBox>
                        {props.select === 'A' ?
                            <Option>
                                <AnswerInput type='radio' name={props.idQuestion} value='A' checked />
                                <AnswerText></AnswerText>
                                {props.A}
                            </Option> :
                            <Option>
                                <AnswerInput type='radio' name={props.idQuestion} value='A' />
                                <AnswerText></AnswerText>
                                {props.A}
                            </Option>
                        }
                        {props.select === 'B' ?
                            <Option>
                                <AnswerInput type='radio' name={props.idQuestion} value='B' checked />
                                <AnswerText></AnswerText>
                                {props.B}
                            </Option> :
                            <Option>
                                <AnswerInput type='radio' name={props.idQuestion} value='B' />
                                <AnswerText></AnswerText>
                                {props.B}
                            </Option>
                        }
                        {props.C ?
                            <Option >
                                {props.select === 'C' ?
                                    <AnswerInput type='radio' name={props.idQuestion} value='C' checked /> :
                                    <AnswerInput type='radio' name={props.idQuestion} value='C' />
                                }
                                <AnswerText></AnswerText>
                                {props.C}
                            </Option> : null
                        }
                        {props.D ?
                            <Option >
                                {props.select === 'D' ?
                                    <AnswerInput type='radio' name={props.idQuestion} value='D' checked /> :
                                    <AnswerInput type='radio' name={props.idQuestion} value='D' />
                                }
                                <AnswerText></AnswerText>
                                {props.D}
                            </Option> : null
                        }
                        <Result>
                            <ResultText>Bạn đã chọn sai. Đáp án đúng là:</ResultText>
                            <ResultText>{props.answer}</ResultText>

                        </Result>

                    </AnswerBox>
                }
            </QuestionBox>

        </Wrapper>
    )

}
export default Question;