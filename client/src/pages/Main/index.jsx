import React from "react";
import PageTemplate from "../PageTemplate";
import RegisterForm from "../../components/RegisterForm";

const MainPage = () => {
  return (
    <PageTemplate>
      <h1>청건부산</h1>
      <RegisterForm></RegisterForm>
    </PageTemplate>
  );
};

export default MainPage;
