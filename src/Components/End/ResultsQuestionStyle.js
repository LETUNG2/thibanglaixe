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
    font-weight: 500;
    padding: 10px 10px 0;
    font-size: 20px;
    display: flex;
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
    cursor: not-allowed;
}`
export const AnswerText = styled.div`{
    
}`

export const QuestionImage = styled.img`{
    width: 24vw;
    margin: 8px 0 5px 36px;
    
}`

export const Result = styled.div`{
    display: flex;
    margin: 6px 2px;
}`
export const ResultText = styled.div`{
    width: 30vw;
    padding: 10px;
    margin-left: 10px;
    font-size: 18px;
    border-radius: 3px;
    font-weight:500;
    display:flex;
    align-items: center;
    &.Correct {
        background-color:#EAF4DD;
        color: #027654;
    }
    &.fail {
        background-color: #feeded;
        color: #ef1010;
    }
}`