import React, { Suspense, lazy, useState } from "react";
import "./app.css";
import LoadingOverlay from "./components/Loader/loadingOverview";
import { UseHubContextProvider } from "./utils/hooks/UseContext";

const LoginCls = lazy(() => import("./pages/Login/login"));
const LayoutCls = lazy(() => import("./layouts/layout"));

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
      <Suspense fallback={<LoadingOverlay isLoading={isLoading} />}>
        {splashLoading ? (
          <SplashCls />
        ) : localStorage.getItem("token") === "" ? (
          <LoginCls tokenControl={() => tokenControlFunc} />
        ) : (
          <LayoutCls tokenControlAppFunc={tokenControlFunc} />
        )}
      </Suspense>
    </UseHubContextProvider>
  );
}

export default App;
