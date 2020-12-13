import {configureStore,createReducer,createAction} from '@reduxjs/toolkit';
import { IState } from './interface';

var initialState : IState = {
    chats: []
}

export const addChat = createAction<String>("ADD_CHAT");

const reducer = createReducer(initialState,{
    [addChat.type]:(state,{payload})=>void state.chats.push(payload)
})

export default configureStore({reducer});