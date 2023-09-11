import React, { useState, useEffect } from "react";
import * as s from "./style";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import PageTemplate from "../PageTemplate";
import RegisterLabel from "@components/RegisterLabel";
import LocationDropDown from "@components/LocationDropDown";
import Agreement from "@components/Agreement";
import PlaneSection from "@common/layer/PlaneSection";
import DonationForm from "@components/DonationForm";
import TopNavBar from "@common/layer/TopNavBar";
import { RoutePath } from "@constants/enums";
import { ENV, API } from "@constants/env";
import Swal from "sweetalert2";

const RegisterPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const simpleFormList = [
    { name: "name", title: "1. 귀하의 이름을 적어주세요.", placeholder: "내 답변" },
    { name: "age", title: "2. 귀하의 만 나이를 적어주세요.", placeholder: "내 답변" },
    { name: "phoneNumber", title: "3. 귀하의 핸드폰 번호를 적어주세요.", placeholder: "내 답변" },
  ];

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
  const handleInputDonation = (donation) => {
    setFormData((prevData) => ({
      ...prevData,
      donation: Number(donation.replace(/,/g, "")),
    }));
  };

  // 제출 버튼 클릭
  const handleSubmit = async () => {
    const { name, age, phoneNumber, location, agreePI, donation } = formData;
    if (!name || !age || !phoneNumber || !location || !agreePI || !donation) {
      Swal.fire("입력 오류!", "모든 항목을 입력해주세요.", "error");
      return;
    }
    try {
      // API: Register User
      const res = await axios.post(ENV.SERVER_PROD_DOMAIN + API.USER_REGISTER, formData);
      navigate(RoutePath.QR, {
        state: {
          userId: res.data.userId,
        },
      });
    } catch (error) {
      Swal.fire("API 접근 오류", "API: Register User", "error");
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
            <DonationForm onInputDonation={handleInputDonation} />
          </PlaneSection>
        </s.PlaneSectionWrapper>

        <s.PlaneSectionWrapper>
          <PlaneSection key="announcment">
            <s.AnnouncementWrapper>
              <s.AnnouncmentContent>
                제출 후 화면 상의 <s.PinkHighlightText>QR 코드</s.PinkHighlightText>를 반드시{" "}
                <s.PinkHighlightText>캡쳐</s.PinkHighlightText>해주세요! <br />
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
