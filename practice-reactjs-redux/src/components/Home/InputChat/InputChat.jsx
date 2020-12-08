import React, { Fragment } from "react";
import "./InputChat.scss";
import { addChat } from "../../../redux/action";
import { connect } from "react-redux";

class InputChat extends React.Component {
  newChatText = "";
  handleSend = () => {
    this.props.addChat(this.newChatText);
  };

  handleChange = (event) => {
    this.newChatText = event.target.value;
  };

  render() {
    return (
      <Fragment>
        <input
          className="input--chat-text"
          type="text"
          placeholder="Enter message"
          onChange={this.handleChange}
        />
        <button className="button--send" onClick={() => this.handleSend()}>
          Send
        </button>
      </Fragment>
    );
  }
}

var mapDispatchToProps = { addChat };
export default connect(null, mapDispatchToProps)(InputChat);
