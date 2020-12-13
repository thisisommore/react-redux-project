import { ADD_CHAT, IAddChatAction } from "./action";
import { IState } from "./interface";

var initialState = {
  chats: []
};

function reducer(state :IState = initialState, action: IAddChatAction) {
  switch (action.type) {
    case ADD_CHAT:
      return { ...state, chats: [...state.chats].concat(action.msg) };
    default:
      return state;
  }
}

export default reducer;
