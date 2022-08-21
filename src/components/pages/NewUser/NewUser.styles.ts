import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Content = styled.div`
    width: 50%;
    max-width: 670px;
    min-width: 670px;
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    height: 250px;
`

export const Title = styled.h1`
    font-weight: 400;
    text-transform: uppercase;
    color: white;
`

export const Header = styled.header`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    // background-image: linear-gradient(75deg, #3811af 30%, #734aec 90%);
    background-color: #8948E6;
    user-select: none;
    border-radius: 10px;
`

export const FormContainer = styled.div``