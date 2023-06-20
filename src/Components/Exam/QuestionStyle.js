import styled from "styled-components";

export const Wrapper = styled.div`{
    background-color: white;
    display: flex;
    font-size:30px;
    width: 80vw; 
    margin: 10px;
    font-size: 20px;
    flex-direction: column;
}`

export const QuestionBox = styled.div`{
    background-color: #e7f3f5;
    border-color: #b8dce2;
    padding: 10px;
    width: 80vw;
    display: flex;
    flex-direction: column;
}`

export const Content = styled.div`{
    padding: 10px;
    font-size: 20px;
    display: flex;
    flex-direction: column;
}`

export const QuestionText = styled.div`{
}`

export const AnswerBox = styled.div`{
    margin: -16px 16px 6px;
    display: flex;
    flex-direction: column;
}`

export const Option = styled.div`{
    display: flex;
    padding: 5px;
    align-items: flex-start;
}`

export const AnswerInput = styled.input`{
    display: flex;
    margin: 8px 8px;
    height: 16px;
    width: 24px;
    cursor: pointer;
}`
export const AnswerText = styled.div`{
    display: flex;
    align-items: center;
}`

export const QuestionImage = styled.img`{
    width: 24vw;
    margin: 10px 16px;
}`

