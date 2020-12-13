import React from "react";
import "./AppChats.scss";
import { connect ,ConnectedProps} from "react-redux";
import { IState } from "../../../redux/interface";

var mapStateToProps = (state:IState) => {
  return { chats: state.chats };
};

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>;

class AppChats extends React.Component<Props> {
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

export default connector(AppChats)


