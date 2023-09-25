import React from "react";
require("./modal-module.css");

class ModalCls extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("this.props.isOpen", this.props.isOpen);
    return (
      <div className={`body-modal ${this.props.isOpen ? "open" : "closed"}`}>
        <div
          className="modal-background"
          onClick={() => this.props.closeModal()}
        ></div>
        <div className="modal">{this.props.content}</div>
      </div>
    );
  }
}
export default ModalCls;
