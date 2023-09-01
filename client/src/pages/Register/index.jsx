import React, { useState, useEffect } from "react";
import * as s from "./style";

import PageTemplate from "../PageTemplate";
import RegisterLabel from "@components/RegisterLabel";
import LocationDropDown from "@components/LocationDropDown";
import Agreement from "@components/Agreement";
import PlaneSection from "@common/layer/PlaneSection";
import DonationForm from "@components/DonationForm";
import TopNavBar from "@common/layer/TopNavBar";
import { ENV, API } from "@constants/env";

import axios from "axios";

const RegisterPage = () => {
  const simpleFormList = [
    { name: "name", title: "1. 귀하의 이름을 적어주세요.", placeholder: "내 답변" },
    { name: "age", title: "2. 귀하의 만 나이를 적어주세요.", placeholder: "내 답변" },
    { name: "phoneNumber", title: "3. 귀하의 핸드폰 번호를 적어주세요.", placeholder: "내 답변" },
  ];

  const [formData, setFormData] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 1, 2, 3 질문
  const handleChange = (event, index) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 4 질문
  const handleSelectLocation = (location) => {
    setFormData((prevData) => ({
      ...prevData,
      location: location,
    }));
  };

  // 6 질문
  const handleSelectDonation = (donation) => {
    setFormData((prevData) => ({
      ...prevData,
      donation: donation,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(ENV.SERVER_DOMAIN + API.USER_REGISTER, formData);
      console.log(response.data);
      console.log(formData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PageTemplate>
      <TopNavBar title={"접수"} />
      <s.PageWrapper>
        <PlaneSection>
          <RegisterLabel />
        </PlaneSection>
        {simpleFormList.map((item, index) => (
          <s.PlaneSectionWrapper key={index}>
            <PlaneSection key={item.name}>
              <s.SingleSectionWrapper>
                <s.SectionTitle>{item.title}</s.SectionTitle>
                <s.Input
                  type="text"
                  name={item.name}
                  placeholder={item.placeholder}
                  onChange={handleChange}
                />
              </s.SingleSectionWrapper>
            </PlaneSection>
          </s.PlaneSectionWrapper>
        ))}

        <s.PlaneSectionWrapper>
          <PlaneSection key="location">
            <LocationDropDown onSelectLocation={handleSelectLocation} />
          </PlaneSection>
        </s.PlaneSectionWrapper>

        <s.PlaneSectionWrapper>
          <PlaneSection key="agreePI">
            <Agreement agreePI={formData.agreePI} onAgreementChange={handleChange} />
          </PlaneSection>
        </s.PlaneSectionWrapper>

        <s.PlaneSectionWrapper>
          <PlaneSection key="donation">
            <DonationForm onSelectDonation={handleSelectDonation} />
          </PlaneSection>
        </s.PlaneSectionWrapper>

        <s.PlaneSectionWrapper>
          <PlaneSection key="announcment">
            <s.AnnouncementWrapper>
              <s.AnnouncmentContent>
                제출 후 화면 상의 QR 코드를 반드시 캡쳐해주세요! <br />
                개인을 식별하여, 접수 및 제로게임 팀 편성에 사용됩니다.
              </s.AnnouncmentContent>
            </s.AnnouncementWrapper>
          </PlaneSection>
        </s.PlaneSectionWrapper>

        <s.SubmitButton onClick={handleSubmit}>제출</s.SubmitButton>
      </s.PageWrapper>
    </PageTemplate>
  );
};

export default RegisterPage;
