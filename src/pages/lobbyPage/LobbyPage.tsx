import React, { useState } from "react";
import {
    LobbyContainer,
    LobbyTitle,
    LobbyItemsContainer,
    CodeBlockCube,
    LobbyCodeBlockCubesContainer
} from "../../styledComponents/lobbyStyledComponents";
import { useSelector } from "react-redux";
import { IStore } from "../../interfaces/IStore";
import { useNavigate } from "react-router-dom";

const Lobby: React.FC = () => {
    const codeBlocksData = useSelector((state: IStore) => state.codeBlocks.value);
    const [codeBlocksList, setCodeBlocksList] = useState(codeBlocksData);
    const navigation = useNavigate();

    return (
        <LobbyContainer>
            <LobbyItemsContainer>
                <LobbyTitle>
                    Choose a code Block
                </LobbyTitle>
            </LobbyItemsContainer>
            <LobbyCodeBlockCubesContainer>
                {codeBlocksList.map((codeBlock, index) => (
                    <CodeBlockCube
                        onClick={() => { navigation(`code-block/${codeBlock._id}`) }}
                        key={index}>
                        {codeBlock.name}
                    </CodeBlockCube>
                ))}
            </LobbyCodeBlockCubesContainer>
        </LobbyContainer>
    )
}

export default Lobby;