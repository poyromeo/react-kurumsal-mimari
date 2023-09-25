import React from "react";

class SplashCls extends React.PureComponent {
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <img
          style={{ height: 400, width: 400, borderRadius: 2 }}
          src={require("../../assets/images/logo.png").default}
          alt=""
        />
      </div>
    );
  }
}

export default SplashCls;
