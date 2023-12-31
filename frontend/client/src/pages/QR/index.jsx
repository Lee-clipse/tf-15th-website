/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import * as s from "./style";
import QRCode from "qrcode";
import axios from "axios";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { RoutePath } from "@constants/enums";
import Swal from "sweetalert2";
import { ENV, API } from "@constants/env";

import PageTemplate from "../PageTemplate";

const QRPage = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const userId = location.state.userId;

  const [show, setShow] = useState(false);
  const [qrImageUrl, setQrImageUrl] = useState("");
  const [donation, setDonation] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    renderQR();
  }, [userId]);

  const renderQR = async () => {
    // API: Get User Info
    const res = await axios.get(ENV.SERVER_PROD_DOMAIN + API.USER_INFO, {
      params: { userId },
    });
    if (Number(res.data.code) !== 200) {
      Swal.fire("QR 오류!", "접수하지 않은 사용자입니다.", "error");
      navigate(RoutePath.MAIN);
      return;
    }
    setDonation(Number(res.data.userInfo.donation));

    const qrUrl = `${ENV.CLIENT_PROD_DOMAIN}/step/qr?user_id=${userId}`;
    // userId를 이용하여 QR 코드 생성
    QRCode.toDataURL(qrUrl, function (err, url) {
      setQrImageUrl(url);
    });
    setShow(true);
    // LS에 저장
    localStorage.setItem("userId", userId);
  };

  return (
    <PageTemplate>
      <s.Wrapper>
        <s.Container>
          <s.AnnouncmentWrapper>
            <s.Logo src="/assets/main_logo_row.png" alt="main_logo_row"></s.Logo>
            <s.Announcment>접수 QR</s.Announcment>
          </s.AnnouncmentWrapper>
          {donation !== 0 ? (
            <s.Announcment>지킴이님의 {donation}원 기부에 감사드립니다!</s.Announcment>
          ) : (
            <s.Announcment>청건부산에 축제에 오신 것을 환영합니다!</s.Announcment>
          )}
          <s.CaptureInduceWrapper>
            <s.CaptureInduceText
              as={motion.div}
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1.2 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 200,
                  restDelta: 0.001,
                },
              }}
            >
              {show ? "캡쳐해주세요!" : ""}
            </s.CaptureInduceText>
          </s.CaptureInduceWrapper>
          <s.QRImageWrapper>
            {qrImageUrl && <s.QRImage src={qrImageUrl} alt="QR Code" />}
          </s.QRImageWrapper>
          <s.MainButtonWrapper>
            <Link to={RoutePath.MAIN}>
              <s.MainButton>
                <s.ButtonText>캡쳐 완료했어요</s.ButtonText>
              </s.MainButton>
            </Link>
          </s.MainButtonWrapper>
        </s.Container>
      </s.Wrapper>
    </PageTemplate>
  );
};

export default QRPage;
