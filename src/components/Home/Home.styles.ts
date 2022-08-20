import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`

export const Content = styled.div`
    width: 90vw;
    height: 400px;
    box-shadow: 3px 3px 10px rgb(194 192 192);
    border-radius: 8px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;
`

export const Table = styled.table`
    width: 98%;
    position: absolute;
    top: 2%;
    left: 1%;
    user-select: none;
`