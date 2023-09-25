import React from "react";
import "./app.css";
import LayoutCls from "./layouts/layout";
import LoginCls from "./pages/Login/login";
import LoadingOverlay from "./components/Loader/loadingOverview";
import SplashCls from "./pages/Splash/splash";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      isLoading: false,
      splashLoading: false,
    };
  }

  tokenControlFunc = (value) => {
    console.log("value", value);

    this.setState(
      {
        splashLoading: true,
        isLoading: true,
      },
      () => {
        setTimeout(() => {
          localStorage.setItem(
            "token",
            value
              ? "asdfghjkldıfuhvcjdkuryfhvncmkdeoırufhjkdloeırfujcmkdloeıurfjsdsdsds"
              : ""
          );
          this.setState({
            splashLoading: false,
            isLoading: false,
          });
        }, 1500);
      }
    );
  };

  render() {
    return (
      <>
        <LoadingOverlay isLoading={this.state.isLoading} />
        {this.state.splashLoading ? (
          <SplashCls />
        ) : localStorage.getItem("token") === "" ? (
          <LoginCls tokenControl={() => this.tokenControlFunc} />
        ) : (
          <LayoutCls tokenControlAppFunc={this.tokenControlFunc} />
        )}
      </>
    );
  }
}
export default App;
