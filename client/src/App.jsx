import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RoutePath } from "@constants/enums";
import { Suspense, lazy } from "react";
import React from "react";

const MainPage = lazy(() => import("./pages/Main/index"));
const RegisterPage = lazy(() => import("./pages/Register/index"));
const IntroducePage = lazy(() => import("./pages/Introduce/index"));
const RuleChoosePage = lazy(() => import("./pages/RuleChoose/index"));
const QRPage = lazy(() => import("./pages/QR/index"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div></div>}>
        <Routes>
          <Route path={RoutePath.MAIN} element={<MainPage />}></Route>
          <Route path={RoutePath.REGISTER} element={<RegisterPage />}></Route>
          <Route path={RoutePath.INTRODUCE} element={<IntroducePage />}></Route>
          <Route path={RoutePath.RULE_CHOOSE} element={<RuleChoosePage />}></Route>
          <Route path={RoutePath.QR} element={<QRPage />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
