import React, { ChangeEvent, Fragment } from "react";
import "./InputChat.scss";
import { addChat } from "../../../redux";
import { connect,ConnectedProps } from "react-redux";

var mapDispatchToProps = { addChat };
const connector = connect(null, mapDispatchToProps)

type Props = ConnectedProps<typeof connector>;

class InputChat extends React.Component<Props> {
  state = {
    newChatText : ""
  }
  handleSend = () => {
    this.props.addChat(this.state.newChatText);
    this.setState({newChatText: ""})
  };

  handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    this.setState({newChatText: event.target.value})
  };

  render() {
    return (
      <Fragment>
        <input
          className="input--chat-text"
          type="text"
          placeholder="Enter message"
          value={this.state.newChatText}
          onChange={this.handleChange}
        />
        <button className="button--send" onClick={() => this.handleSend()}>
          Send
        </button>
      </Fragment>
    );
  }
}

export default connector(InputChat)
