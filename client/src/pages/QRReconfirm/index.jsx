/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import * as s from "./style";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import PageTemplate from "../PageTemplate";
import TopNavBar from "@common/layer/TopNavBar";
import { RoutePath } from "@constants/enums";
import { ENV, API } from "@constants/env";
import Swal from "sweetalert2";
import inputChecker from "./inputChecker";

const QRReconfirmPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // LS에 userId가 있고, 유효한 경우 바로 이동
    earlyCheck();
  }, []);

  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

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
        navigate(RoutePath.QR, {
          state: {
            userId: res.data.userId,
          },
        });
      } else {
        Swal.fire("접수되지 않은 사용자입니다.", "홈페이지에서 접수하실 수 있습니다.", "warning");
      }
    } catch (error) {
      Swal.fire("API ERROR: Reconfirm QR", "인포데스크로 방문 제보 부탁드립니다.", "error");
    }
  };

  const earlyCheck = async () => {
    const lsUserId = localStorage.getItem("userId");
    if (lsUserId !== null) {
      navigate(RoutePath.QR, {
        state: {
          userId: lsUserId,
        },
      });
    }
  };

  return (
    <PageTemplate>
      <TopNavBar title={"QR"} />
      <s.Wrapper>
        <s.Container>
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
        </s.Container>
      </s.Wrapper>
    </PageTemplate>
  );
};

export default QRReconfirmPage;
