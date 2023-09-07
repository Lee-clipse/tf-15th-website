import React, { useState, useEffect } from "react";
import * as s from "./style";
import QRCode from "qrcode";

import { Link, useLocation } from "react-router-dom";
import { ENV } from "@constants/env";
import { motion } from "framer-motion";
import { RoutePath } from "@constants/enums";

import PageTemplate from "../PageTemplate";

const QRPage = () => {
  const location = useLocation();
  //! TEMP FOR DEV
  const userId = location.state.userId;
  // const userId = "51da7992e107910cd713c4761773877b";

  const [show, setShow] = useState(false);
  const [qrImageUrl, setQrImageUrl] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const qrUrl = `${ENV.CLIENT_PROD_DOMAIN}/step/qr?user_id=${userId}`;
    // userId를 이용하여 QR 코드 생성
    QRCode.toDataURL(qrUrl, function (err, url) {
      setQrImageUrl(url);
    });
    setShow(true);
  }, [userId]);

  return (
    <PageTemplate>
      <s.Wrapper>
        <s.Container>
          <s.AnnouncmentWrapper>
            <s.Logo src="/assets/main_logo_row.png" alt="main_logo_row"></s.Logo>
            <s.Announcment>접수 QR</s.Announcment>
          </s.AnnouncmentWrapper>
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
