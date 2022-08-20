import styled from "styled-components";


export const Tr = styled.tr``


export const Td = styled.td<{variable?: string}>`
    padding: 10px;
    background-color: ${(props) => props.variable ? '#8E52E7' : '#5A02D8' };
    color: white;
    text-transform: uppercase;
    text-align: center;
`