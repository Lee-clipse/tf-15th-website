import React, { useState } from "react";
import { DEV_SERVER_DOMAIN } from "../constants/enums";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [qrCodeUrl, setQRCodeUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${DEV_SERVER_DOMAIN}/user/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });

      if (res.ok) {
        const data = await res.json();
        setQRCodeUrl(data.qrCodeUrl);
        // 테스트
        console.log(qrCodeUrl);
      } else {
        console.error("Failed to generate QR code.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">이름: </label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <button type="submit">제출</button>
      </form>
      {qrCodeUrl && <img src={qrCodeUrl} alt="QR Code" />}
    </div>
  );
};

export default RegisterForm;
