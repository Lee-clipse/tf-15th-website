import React, { useState, useEffect } from "react";
import * as s from "./style";
import { ENV, API } from "@constants/env";
import Swal from "sweetalert2";
import axios from "axios";
import QRReconfirmModal from "@components/QRReconfirmModal";

const VoiceAgreePage = () => {
  const [agreePI, setAgreePI] = useState("-1");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId === null) {
      openModal();
      return;
    }
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onAgreementChange = (e) => {
    setAgreePI(e.target.value);
  };

  const handleButtonClick = async () => {
    if (agreePI === "2") {
      const userId = localStorage.getItem("userId");
      // API: Voice Agree
      const res = await axios.post(ENV.SERVER_PROD_DOMAIN + API.VOICE_AGREE, {
        userId,
      });
      if (Number(res.data.code) !== 200) {
        Swal.fire("접수되지 않은 사용자입니다!", "", "error");
        return;
      }
      window.open("https://open.kakao.com/o/slIJ6THf");
      return;
    }
    if (agreePI === "0") {
      Swal.fire("항목을 입력해주세요.", "", "info");
    } else {
      Swal.fire("항목을 입력해주세요.", "", "info");
    }
  };

  return (
    <s.Wrapper>
      {isModalOpen && <QRReconfirmModal closeModal={closeModal} />}
      <s.Container>
        <s.Label>목소리 활용 정보 동의서</s.Label>
        <s.Text>
          ※ 지킴이들의 외침 부스 참여 시 목소리 활용에 대한 개인정보활용을 동의하며, 사용된 목소리
          및 영상 내용은 투게더페스티벌 홍보에 활용될 수 있습니다.
        </s.Text>
        <s.CheckWrapper>
          <s.AgreeCheck
            type="radio"
            name="agreePI"
            value="2"
            checked={agreePI === "2"}
            onChange={onAgreementChange}
          />
          <s.AgreeText>동의</s.AgreeText>
          <s.AgreeCheck
            type="radio"
            name="agreePI"
            value="0"
            checked={agreePI === "0"}
            onChange={onAgreementChange}
          />
          <s.AgreeText>비동의</s.AgreeText>
        </s.CheckWrapper>
        <s.LinkButton onClick={handleButtonClick}>카카오톡으로 이동하기</s.LinkButton>
      </s.Container>
    </s.Wrapper>
  );
};

export default VoiceAgreePage;
