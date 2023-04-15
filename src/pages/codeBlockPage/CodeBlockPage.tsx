import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IStore } from "../../interfaces/IStore";
import { updateCode } from "../../store/codeBlocksSlicer";
import {
    CodeTextArea,
    CodeBlockContainer,
    CodeTag,
    CodeBlockHeader,
    CodeBlockBody,
    CodeBlockHeaderTitle,
    ViewOnlySign
} from "../../styledComponents/codeBlockPageStyledComponents";
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import "highlight.js/styles/github.css";
import io from 'socket.io-client';

const socket = io('https://mentoring-server.onrender.com');

export const CodeBlockPage: React.FC = () => {

    const { codeID = '' } = useParams();
    const codeBlocksData = useSelector((state: IStore) => state.codeBlocks.value);
    const currentCodeBlock = codeBlocksData.filter((codeBlock) => codeBlock._id === codeID);
    const [codeBlockCode, setCodeBlockCode] = useState(currentCodeBlock[0].code);
    const [codeBlockName, setCodeBlockName] = useState(currentCodeBlock[0].name);
    const [isMentor, setIsMentor] = useState<boolean>(false);
    const codeRef = useRef<HTMLElement>(null);

    hljs.registerLanguage('javascript', javascript);
    const dispatch = useDispatch();

    useEffect(() => {
        socket.emit("join_room", codeID);
        socket.emit('users_count');
    }, []);

    useEffect(() => {

        //  Determine if user is Mentor or student
        socket.on('receive_users_count', (data) => {
            if (data.onlineUsers > 1) {
                const mentorID = sessionStorage.getItem('mentorID');
                if (mentorID) {
                    setIsMentor(true);
                } else {
                    setIsMentor(false);
                }
            } else {
                setIsMentor(true);
                socket.emit('socket_id');
                socket.on('receive_socket_id', (data) => {
                    sessionStorage.setItem('mentorID', data.id);
                })
            }
        });

        socket.on("receive_code_change", (data) => {
            setCodeBlockCode(data.code);
        })

    }, [socket]);

    useEffect(() => {
        // make code highlight on every change
        if (codeRef.current) {
            hljs.highlightElement(codeRef.current);
        }

    }, [codeBlockCode]);

    const handleTextChange = (e: any) => {
        const updatedCode = e.target.value;
        socket.emit('change_code', { code: updatedCode }, codeID)
        setCodeBlockCode(updatedCode);
    }

    window.onpopstate = () => {
        // Updates redux store with updated code when user return to lobby page
        dispatch(updateCode({ codeID, code: codeBlockCode }));
        // leave socket room when user exit codeBlock page
        socket.emit('leave_room', codeID);
    }

    return (
        <>
            <CodeBlockContainer>
                <CodeBlockHeader>
                    <CodeBlockHeaderTitle>{codeBlockName}</CodeBlockHeaderTitle>
                    <CodeBlockHeaderTitle>JavaScript</CodeBlockHeaderTitle>
                </CodeBlockHeader>
                <CodeBlockBody>
                    <pre>
                        <CodeTag ref={codeRef}>{codeBlockCode}</CodeTag>
                    </pre>
                    <CodeTextArea value={codeBlockCode} readOnly={isMentor} spellCheck={false} onChange={(e) => handleTextChange(e)} />
                </CodeBlockBody>
                {isMentor && <ViewOnlySign>View only</ViewOnlySign>}
            </CodeBlockContainer>
        </>
    )
}

export default CodeBlockPage;
