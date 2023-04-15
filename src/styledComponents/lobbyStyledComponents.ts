import styled from "styled-components";

export const LobbyContainer = styled.div`
    padding-top:5vh;
    position: relative;
    height: 70vh;
    width: 70vw;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items:center;
    gap: 10px;
`
export const LobbyItemsContainer = styled.div`
    
`

export const LobbyTitle = styled.h1`
    color: white;
    font-size: 40px;
`

export const LobbyCodeBlockCubesContainer = styled.div`
    width: fit-content;
    height: fit-content;
    display: grid;
    align-content:center;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px;
`

export const CodeBlockCube = styled.button`
    all:unset;
    cursor:pointer;
    color: white;
    text-align: center;
    background-color: rgb(29, 38, 79);
    height: 150px;
    width: 150px;
    border-radius: 10px;
`