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
    background-color: cyan;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0px 20px 20px 20px;
}`

export const Title = styled.div`{
    width: 100vw;
    height: 10vh;
    background-color: beige;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    box-sizing: border-box;
    font-size: calc( 2vmax + 2px);
    color: red;
}`
export const Time = styled.div`{
    width: 12em;
    height: 3vh; 
    font-size: larger;
    color: blue;
    font-weight: 700;
    margin-right: -89%;
}`

export const BodyBox = styled.div`{
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 10px;

}`


export const Footer = styled.div`{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}`

export const EndButton = styled.button`{
    width: 100px;
    height: 50px;
    margin-top: -10px
    background-color:beige;
    border: none;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
     font-size: large;
     color: blue;
     font-weight: bold;
}`
