import React, { useEffect, useState } from "react";
import * as s from "./style";
import { useParams, useSearchParams } from "react-router-dom";
import StepRegisterForm from "@components/StepRegisterForm";
import QRViewer from "@components/QRViewer";
import StepGuardView from "@components/StepGuardView";

const StepPage = () => {
  const [stepKey, setStepKey] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    // 접속시 스텝 key 인증
    if (localStorage.getItem("key") === "tf") {
      setStepKey(true);
    }
  }, []);

  const { purpose } = useParams();
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("user_id");

  return (
    <div>
      {purpose === "register" && <StepRegisterForm />}

      {/* stepKey에 따라 조건부 랜더링 */}
      {!stepKey && <StepGuardView />}
      {purpose === "qr" && stepKey && <QRViewer userId={userId} />}
    </div>
  );
};

export default StepPage;
