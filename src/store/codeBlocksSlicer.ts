import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

interface ICodeBlock {
    _id: string,
    name: string,
    code: string
}

const getAllCodeBlocks = axios.get('https://mentoring-server.onrender.com/codeBlocks');
const { data } = await getAllCodeBlocks;

export const codeBlocksSlicer = createSlice({
    name: "codeBlocks",
    initialState: {
        value: data,
        mentorID: ''
    },
    reducers: {
        updateCode: (state, action) => {
            const { code, codeID } = action.payload;
            const index = state.value.findIndex((obj: ICodeBlock) => obj._id === codeID);
            state.value[index].code = code;
        }
    }
})

export const { updateCode } = codeBlocksSlicer.actions;
export default codeBlocksSlicer.reducer;