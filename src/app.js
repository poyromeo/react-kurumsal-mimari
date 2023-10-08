import React, { useState } from "react";
import "./app.css";
import LoadingOverlay from "./components/Loader/loadingOverview";
import LayoutCls from "./layouts/layout";
import LoginCls from "./pages/Login/login";
import SplashCls from "./pages/Splash/splash";
import { UseHubContextProvider } from "./utils/hooks/UseContext";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);

  const tokenControlFunc = (value) => {
    setIsLoading(true);
    setSplashLoading(true);

    setTimeout(() => {
      localStorage.setItem(
        "token",
        value
          ? "asdfghjkldıfuhvcjdkuryfhvncmkdeoırufhjkdloeırfujcmkdloeıurfjsdsdsds"
          : ""
      );
    }, 1500);
    setIsLoading(false);
    setSplashLoading(false);
  };

  return (
    <UseHubContextProvider>
      <LoadingOverlay isLoading={isLoading} />
      {splashLoading ? (
        <SplashCls />
      ) : localStorage.getItem("token") === "" ? (
        <LoginCls tokenControl={() => tokenControlFunc} />
      ) : (
        <LayoutCls tokenControlAppFunc={tokenControlFunc} />
      )}
    </UseHubContextProvider>
  );
}

export default App;
