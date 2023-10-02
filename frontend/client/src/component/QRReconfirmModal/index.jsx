import React, { useState } from "react";
import * as s from "./style";
import { ENV, API } from "@constants/env";
import axios from "axios";
import inputChecker from "../../pages/QRReconfirm/inputChecker";
import Swal from "sweetalert2";

const QRReconfirmModal = ({ closeModal }) => {
  const [formData, setFormData] = useState({});

  // 모달 닫기 << 상위 컴포넌트 동작
  const handleModalClose = () => {
    closeModal();
  };

  const simpleFormList = [
    { name: "name", title: "이름", placeholder: "입력" },
    { name: "phoneNumber", title: "휴대전화 뒷 번호 4자리", placeholder: "입력" },
  ];

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    // 입력 검증 후 alert
    const { isValid, title, comment, type } = inputChecker(formData);
    if (!isValid) {
      Swal.fire(title, comment, type);
      return;
    }

    try {
      // API: Reconfirm QR
      const res = await axios.get(ENV.SERVER_PROD_DOMAIN + API.RECONFIRM_QR, {
        params: {
          name: formData.name,
          phoneNumber: formData.phoneNumber,
        },
      });
      if (Number(res.data.code) === 200) {
        localStorage.setItem("userId", res.data.userId);
        handleModalClose();
        return;
      } else {
        Swal.fire("접수되지 않은 사용자입니다.", "홈페이지에서 접수하실 수 있습니다.", "warning");
        return;
      }
    } catch (error) {
      Swal.fire("API ERROR: Reconfirm QR", "인포데스크로 방문 제보 부탁드립니다.", "error");
    }
  };

  return (
    <s.Wrapper>
      <s.Container>
        <s.TopRow>
          <s.CloseButtonWrapper onClick={handleModalClose}>
            <s.CloseButton src="/assets/zerogame/close.svg" alt="close" />
          </s.CloseButtonWrapper>
        </s.TopRow>

        <s.InputWrapper>
          {simpleFormList.map((item, index) => (
            <s.FormWrapper key={index}>
              <s.Label>{item.title}</s.Label>
              <s.Input
                type="text"
                name={item.name}
                placeholder={item.placeholder}
                onChange={handleChange}
              ></s.Input>
              <s.BR />
            </s.FormWrapper>
          ))}

          <s.SubmitButtonWrapper onClick={handleSubmit}>
            <s.SubmitButton>제출</s.SubmitButton>
          </s.SubmitButtonWrapper>
        </s.InputWrapper>
        {/* {!rolled && <s.RollButton onClick={rollDice}>가자!</s.RollButton>} */}
      </s.Container>
    </s.Wrapper>
  );
};

export default QRReconfirmModal;
