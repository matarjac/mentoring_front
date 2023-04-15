import ICodeBlock from "./ICodeBlock";

export interface IStore{
    codeBlocks: ICodeBlocksState
}

export interface ICodeBlocksState{
    value: ICodeBlock[],
    mentorID: string
}