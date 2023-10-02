import React from "react";
import * as s from "./style";

const RegisterForm = ({ title, placeholder }) => {
  return (
    <s.FormWrapper>
      <s.FormContainer>
        <s.FormTitle>{title}</s.FormTitle>
        <s.FormInput placeholder={placeholder}></s.FormInput>
      </s.FormContainer>
    </s.FormWrapper>
  );
};

export default RegisterForm;
