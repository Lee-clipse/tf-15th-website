import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RoutePath } from "@constants/enums";
import { Suspense, lazy } from "react";
import React from "react";

const MainPage = lazy(() => import("./pages/Main/index"));
const RegisterPage = lazy(() => import("./pages/Register/index"));
const IntroducePage = lazy(() => import("./pages/Introduce/index"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={RoutePath.MAIN} element={<MainPage />}></Route>
          <Route path={RoutePath.REGISTER} element={<RegisterPage />}></Route>
          <Route path={RoutePath.INTRODUCE} element={<IntroducePage />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
