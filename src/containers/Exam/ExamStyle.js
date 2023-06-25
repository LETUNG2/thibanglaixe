import styled from "styled-components";

export const Wrapper = styled.div`
{
    height: 100vh; 
    background-color: white;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
}`

export const Header = styled.div`{
    width: 100vw; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
}`

export const Title = styled.div`{
    width: 100vw;
    height: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    box-sizing: border-box;
    font-size: 34px;
    color: #ee6457;
    background-color: #fae0c7;
}`
export const Time = styled.div`{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 90px;
        font-size: 18px;
        color: blue;
        font-weight: 700;
        position: fixed;
        top: calc( 10vh + 10px );
        right: 14px;
        border: 1px solid #333;
        border-radius: 15px;
        background-color: aquamarine;
        padding:5px;
    
}`

export const BodyBox = styled.div`{
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}`


export const Footer = styled.div`{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}`

export const EndButton = styled.button`{
    min-width: 100px;
    height: 50px;
    margin-bottom: 28px;
    background-color: beige;
    border: none;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: 22px;
    color: #034c5f;
    font-weight: 600;
    &:hover {
        background-color: rgb(245,245,220,0.8);
        cursor: pointer;
      }
}`
