import React, { Suspense, lazy } from "react";
import "./app.css";
import LoadingOverlay from "./components/Loader/loadingOverview";
import { UseHubContextProvider } from "./utils/hooks/UseContext";

const LoginCls = lazy(() => import("./pages/Login/login"));
const LayoutCls = lazy(() => import("./layouts/layout"));
const SplashCls = lazy(() => import("./pages/Splash/splash"));

class App extends React.PureComponent {
  state = {
    isLoading: false,
    splashLoading: false,
  };

  tokenControlFunc = (value) => {
    console.log("token", value);

    this.setState({
      isLoading: true,
      splashLoading: true,
    });
    setTimeout(() => {
      localStorage.setItem(
        "token",
        value
          ? "asdfghjkldıfuhvcjdkuryfhvncmkdeoırufhjkdloeırfujcmkdloeıurfjsdsdsds"
          : ""
      );
      this.setState({
        isLoading: false,
        splashLoading: false,
      });
    }, 1500);
    console.log("localStorage", localStorage.getItem("token"));
  };

  render() {
    return (
      <UseHubContextProvider>
        <LoadingOverlay isLoading={this.state.isLoading} />
        <Suspense>
          {this.state.splashLoading ? (
            <SplashCls />
          ) : localStorage.getItem("token") === "" ? (
            <LoginCls tokenControl={(e) => this.tokenControlFunc(e)} />
          ) : (
            <LayoutCls tokenControlAppFunc={(e) => this.tokenControlFunc(e)} />
          )}
        </Suspense>
      </UseHubContextProvider>
    );
  }
}

export default App;
