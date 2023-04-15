import { configureStore } from '@reduxjs/toolkit';
import codeBlocksReducer from './codeBlocksSlicer';

const store = configureStore({
    reducer:{
        codeBlocks: codeBlocksReducer
    }
});

export default store;
