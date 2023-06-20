import styled from "styled-components";

export const Wrapper = styled.div`
{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    background-image: url(https://www.leadquizzes.com/wp-content/uploads/2019/02/New-blog-graphic.jpg);
}`

export const Description = styled.div`{
    width: 60vw;
    height: 80vh;
    margin-bottom: 32px;
    background-color: cyan;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    overflow: hidden;
}`
export const Title = styled.div`{
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 0 13px;
    font-size: 34px;
    color: red;
    background-color: beige;
}`
export const Content = styled.div`{
    margin: 20px 40px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 24px;
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
    font-size: 22px;
    color: #5353c0;
    font-weight: bold;
    &:hover {
        background-color: rgb(245,245,220,0.9);
        cursor: pointer;
      }
}`
