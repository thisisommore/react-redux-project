import { ADD_CHAT } from "./action";

var initialState = {
  chats: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CHAT:
      return { ...state, chats: [...state.chats].concat(action.msg) };
    default:
      return state;
  }
}

export default reducer;
