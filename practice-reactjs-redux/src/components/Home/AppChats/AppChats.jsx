import React from "react";
import "./AppChats.scss";
import { connect } from "react-redux";

class AppChats extends React.Component {
  render = () => {
    return (
      <div className="container--list">
        {this.props.chats.map((ele, index) => {
          return (
            <div className="list--item" key={index}>
              {ele}
            </div>
          );
        })}{" "}
      </div>
    );
  };
}

var mapStateToProps = (state) => {
  return { chats: state.chats };
};

export default connect(mapStateToProps)(AppChats);
