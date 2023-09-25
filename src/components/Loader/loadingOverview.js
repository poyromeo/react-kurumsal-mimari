import React from "react";
import Loader from "react-js-loader";

export default class LoadingOverlay extends React.Component {
  render() {
    return (
      <div
        style={{
          display: this.props.isLoading ? "block" : "none",
          position: "fixed" /* Sit on top of the page content */,
          width: "100%" /* Full width (cover the whole page) */,
          height: "100%" /* Full height (cover the whole page) */,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor:
            "rgba(0,0,0,0.5)" /* Black background with opacity */,
          zIndex: 1051 /* Specify a stack order in case you're using a different order for other elements */,
          transition: "opacity 0.15s linear",
          cursor: "progress",
        }}
      >
        <div
          style={{
            position: "fixed",
            top: "calc(50% - 20px)",
            left: "calc(50% - 20px)",
          }}
        >
          <Loader
            type="spinner-circle"
            color={"#79106F"}
            size={100}
          />
        </div>
      </div>
    );
  }
}
