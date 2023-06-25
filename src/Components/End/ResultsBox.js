import React from 'react';
import { Content, ContentBox, Wrapper } from './ResultsBoxStyle';

const ResultsBox = (props) => {

    return (
        <Wrapper>
            < ContentBox>
                <Content>Số câu đúng là:</Content>
                <div style={{ color: 'blue', fontWeight: '600' }}>{props.Score}</div>
            </ ContentBox>
            < ContentBox>
                <Content>Kết quả của bạn là:</Content>
                <div style={{ color: 'blue', fontWeight: '600' }}>{props.result}</div>
            </ ContentBox>
        </Wrapper>
    )
}
export default ResultsBox;