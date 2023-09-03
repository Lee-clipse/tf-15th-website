import React, { useState, useEffect } from "react";
import * as s from "./style";
import StepRegisterSuccess from "@components/StepRegisterSuccess";

const StepRegisterForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("key") === "tf") {
      alert("이미 등록된 스텝입니다.");
      setIsSubmitted(true);
    }
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue === "선보이다" || inputValue === "선:보이다") {
      localStorage.setItem("key", "tf");
      setIsSubmitted(true);
    } else {
      alert("올바르지 않은 입력입니다.");
    }
  };

  return (
    <s.Wrapper>
      {!isSubmitted ? (
        <s.Container>
          <s.Label>이번 TF의 슬로건은?</s.Label>
          <s.Hint>힌트: 4글자</s.Hint>
          <s.Input value={inputValue} onChange={handleInputChange} placeholder="슬로건 입력" />
          <s.Button onClick={handleSubmit}>스텝 등록</s.Button>
        </s.Container>
      ) : (
        <StepRegisterSuccess />
      )}
    </s.Wrapper>
  );
};

export default StepRegisterForm;
