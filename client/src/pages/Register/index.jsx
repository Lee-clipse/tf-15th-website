import React from "react";
import * as s from "./style";

import PageTemplate from "../PageTemplate";
import RegisterLabel from "../../component/RegisterLabel";
import PlaneSection from "../../common/layer/PlaneSection";
import RegisterForm from "../../component/RegisterForm";

const RegisterPage = () => {
  const simpleFormList = [
    { title: "1. 귀하의 이름을 적어주세요.", placeholder: "내 답변" },
    { title: "2. 귀하의 만 나이를 적어주세요.", placeholder: "내 답변" },
    { title: "3. 귀하의 핸드폰 번호를 적어주세요.", placeholder: "내 답변" },
  ];

  return (
    <PageTemplate>
      <s.PageWrapper>
        <PlaneSection>
          <RegisterLabel></RegisterLabel>
        </PlaneSection>
        {simpleFormList.map((form, index) => (
          <s.PlaneSectionWrapper>
            <PlaneSection>
              <RegisterForm title={form.title} placeholder={form.placeholder}></RegisterForm>
            </PlaneSection>
          </s.PlaneSectionWrapper>
        ))}
      </s.PageWrapper>
    </PageTemplate>
  );
};

export default RegisterPage;
