import React, { useState, useEffect } from "react";
import * as s from "./style";

import PageTemplate from "../PageTemplate";
import RegisterLabel from "../../component/RegisterLabel";
import LocationDropDown from "../../component/LocationDropDown";
import Agreement from "../../component/Agreement";
import PlaneSection from "../../common/layer/PlaneSection";
import DonationForm from "../../component/DonationForm";

const RegisterPage = () => {
  const simpleFormList = [
    { name: "name", title: "1. 귀하의 이름을 적어주세요.", placeholder: "내 답변" },
    { name: "age", title: "2. 귀하의 만 나이를 적어주세요.", placeholder: "내 답변" },
    { name: "phone", title: "3. 귀하의 핸드폰 번호를 적어주세요.", placeholder: "내 답변" },
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
      // const response = await axios.post("/submit-url", formData);
      // console.log(response.data); // 서버 응답 처리
      console.log(formData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PageTemplate>
      <s.PageWrapper>
        <PlaneSection>
          <RegisterLabel />
        </PlaneSection>
        {simpleFormList.map((item, index) => (
          <s.PlaneSectionWrapper>
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
          <PlaneSection key="agreement">
            <Agreement agreement={formData.agreement} onAgreementChange={handleChange} />
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
