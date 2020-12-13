import {configureStore,createSlice} from '@reduxjs/toolkit';
import { IState } from './interface';

var initialState : IState = {
    chats: []
}

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        addChat: (state,action)=>void state.chats.push(action.payload)
    }
})

export const addChat = chatSlice.actions.addChat;

export default configureStore({reducer:chatSlice.reducer});