import styled from "styled-components";

export const CodeBlockContainer = styled.div`
    height: 80vh;
    width: 70vw;
    background-color: white;
    border-radius: 16px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`

export const CodeBlockHeader = styled.div`
    background-color: rgb(25, 21, 97);
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
    border-radius: 16px 16px 0 0;
`
export const CodeBlockHeaderTitle = styled.span`
    color: white;
    font-size: 20px;
`

export const CodeBlockBody = styled.div`
    padding: 15px;
    width: 100%;
    height: 90%;
`

export const CodeTextArea = styled.textarea`
    all: unset;
    font-size: 18px;
    color: transparent;
    width: 90%;
    height:70%;
    position:absolute;
    overflow: scroll ;
    font-family: "Courier New";
    letter-spacing: translate(normal+1);
    word-wrap: break-word; 
    overflow-wrap: break-word;
    padding: 1em;
`
export const CodeTag = styled.code`
    all: unset;
    font-size: 18px;
    width: 90%;
    height:70%;
    line-break: pre-wrap;
    position:absolute; 
    overflow: scroll ;
    padding:1em;
`

export const ViewOnlySign = styled.span`
    font-size: 20px;
    background-color: rgba(147, 149, 153, 0.5);
    color: rgb(32, 38, 48);
    position: absolute;
    left: 10px;
    bottom: 10px;
    padding:10px 30px;
    border-radius: 9px;
    
`