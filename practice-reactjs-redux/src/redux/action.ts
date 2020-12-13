export const ADD_CHAT = "ADD_CHAT";

export interface IAddChatAction {
  type: String,
  msg: String
}
export function addChat(msg:String) {
  return { type: "ADD_CHAT", msg };
}
