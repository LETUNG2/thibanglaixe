import styled from "styled-components";

export const Wrapper = styled.div`
{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(https://www.leadquizzes.com/wp-content/uploads/2019/02/New-blog-graphic.jpg);
    font-size: calc(9px + 2vmin);
    
}`

export const Description = styled.div`{
    width: 60vw;
    height: 80vh;
    margin-bottom: 20px;
    background-color: cyan;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
}`
export const Title = styled.div`{
    font-weight: bold;
    margin-button: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: calc( 2vmax + 2px);
    color: red;
    background-color: beige;
}`
export const Content = styled.div`{
    margin: 20px;
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}`

export const Startbutton = styled.button`
{
    width: 100px;
    height: 50px;
    background-color:beige;
    border: none;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
     font-size: large;
     color: blue;
     font-weight: bold;
   
}`
