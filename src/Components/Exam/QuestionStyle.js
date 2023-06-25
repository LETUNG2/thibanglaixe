import styled from "styled-components";

export const Wrapper = styled.div`{
    background-color: white;
    display: flex;
    width: 80vw; 
    margin: 10px;
    font-size: 20px;
    flex-direction: column;
    align-items: center;
    user-select: none;
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
    padding: 10px 10px 0;
    font-size: 20px;
    display: flex;
    font-weight: 500;
}`

export const QuestionText = styled.div`{
    padding-left: 4px;
    flex:1;
}`

export const AnswerBox = styled.div`{
    margin: 0 21px 12px;
    display: flex;
    flex-direction: column;
}`

export const Option = styled.div`{
    display: flex;
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

}`

export const QuestionImage = styled.img`{
    width: 24vw;
    margin: 8px 0 5px 36px;
}`

