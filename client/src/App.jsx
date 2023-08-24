import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RoutePath } from "@constants/enums";
import { Suspense, lazy } from "react";
import React from "react";

const MainPage = lazy(() => import("./pages/Main/index"));
const AdminPage = lazy(() => import("./pages/Admin/index"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={RoutePath.MAIN} element={<MainPage />} />
          <Route path={RoutePath.ADMIN} element={<AdminPage />}>
            <Route path="user" element={<AdminPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
