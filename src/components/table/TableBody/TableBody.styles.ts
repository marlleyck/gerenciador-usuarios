import styled from "styled-components";

export const TBody = styled.tbody``

export const Tr = styled.tr``

export const Td = styled.td`
    padding: 10px;
    text-align: center;
`

export const TdAction = styled.td`
    padding: 10px;
    text-align: center;
`

export const Button = styled.button<{variable: string}>`
    padding: 10px;
    border: none;
    outline: none;
    font-size: 15px;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    background-color: ${(props) => props.variable === 'editar' ? 'green' : 'red'};
    margin-right: ${(props) => props.variable === 'editar' ? '5px' : '0px'};
`