import React from 'react';
import { AnswerBox, AnswerText, Content, Option, QuestionBox, QuestionImage, QuestionText, Result, ResultText, Wrapper } from './ResultsQuestionStyle';

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
                                <input type='radio' name={props.idQuestion} value='A' checked />
                                <AnswerText></AnswerText>
                                {props.A}
                            </Option> :
                            <Option>
                                <input type='radio' name={props.idQuestion} value='A' />
                                <AnswerText></AnswerText>
                                {props.A}
                            </Option>
                        }
                        {props.answer === 'B' ?
                            <Option>
                                <input type='radio' name={props.idQuestion} value='B' checked />
                                <AnswerText></AnswerText>
                                {props.B}
                            </Option> :
                            <Option>
                                <input type='radio' name={props.idQuestion} value='B' />
                                <AnswerText></AnswerText>
                                {props.B}
                            </Option>
                        }
                        {props.C ?
                            <Option >
                                {props.answer === 'C' ?
                                    <input type='radio' name={props.idQuestion} value='C' checked /> :
                                    <input type='radio' name={props.idQuestion} value='C' />
                                }
                                <AnswerText></AnswerText>
                                {props.C}
                            </Option> : null
                        }
                        {props.D ?
                            <Option >
                                {props.answer === 'D' ?
                                    <input type='radio' name={props.idQuestion} value='D' checked /> :
                                    <input type='radio' name={props.idQuestion} value='D' />
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
                                <input type='radio' name={props.idQuestion} value='A' checked />
                                <AnswerText></AnswerText>
                                {props.A}
                            </Option> :
                            <Option>
                                <input type='radio' name={props.idQuestion} value='A' />
                                <AnswerText></AnswerText>
                                {props.A}
                            </Option>
                        }
                        {props.select === 'B' ?
                            <Option>
                                <input type='radio' name={props.idQuestion} value='B' checked />
                                <AnswerText></AnswerText>
                                {props.B}
                            </Option> :
                            <Option>
                                <input type='radio' name={props.idQuestion} value='B' />
                                <AnswerText></AnswerText>
                                {props.B}
                            </Option>
                        }
                        {props.C ?
                            <Option >
                                {props.select === 'C' ?
                                    <input type='radio' name={props.idQuestion} value='C' checked /> :
                                    <input type='radio' name={props.idQuestion} value='C' />
                                }
                                <AnswerText></AnswerText>
                                {props.C}
                            </Option> : null
                        }
                        {props.D ?
                            <Option >
                                {props.select === 'D' ?
                                    <input type='radio' name={props.idQuestion} value='D' checked /> :
                                    <input type='radio' name={props.idQuestion} value='D' />
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