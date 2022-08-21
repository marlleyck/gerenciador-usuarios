import styled from "styled-components";

export const FormDiv = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 10px 0px;
    padding: 0 20px;
    width: 100%;
    height: 60%;
    gap: 15px;
`

export const Input = styled.input`
    outline: none;
    padding: 15px;
    border: 1px solid rgb(202, 198, 198);
    font-size: 16px;
    width: 300px;
`

export const Button = styled.button`
    padding: 13px;
    border: none;
    background-color: #5A02D8;
    color: white;
    border-radius: 8px;
    margin-right: 5px;
    cursor: pointer;
    font-size: 14px;

    &:hover {
        background-color: #8948E6;
    }
`