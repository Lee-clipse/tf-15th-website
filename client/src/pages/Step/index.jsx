import React, { useEffect } from "react";
import * as s from "./style";
import { useParams, useSearchParams } from "react-router-dom";
import StepRegisterForm from "@components/StepRegisterForm";
import QRViewer from "@components/QRViewer";

const StepPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { purpose } = useParams();
  const [searchParams] = useSearchParams();

  return (
    <div>
      {purpose === "register" && <StepRegisterForm />}
      {purpose === "qr" && <QRViewer />}
    </div>
  );
};

export default StepPage;
