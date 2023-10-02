import React, { useState } from "react";
import { DEV_SERVER_DOMAIN } from "../constants/enums";

const AdminGuard = ({ updateTeam }) => {
  const [key, setKey] = useState("");

  const handleKeyVerify = async (e) => {
    e.preventDefault();
    const res = await fetch(`${DEV_SERVER_DOMAIN}/admin/validation?key=${key}`);
    const data = await res.json();
    if (data.verified === "TRUE") {
      // team 증가 후 리랜더링
      localStorage.setItem("team", "1");
      updateTeam();
    } else {
      alert("유효하지 않습니다.");
    }
  };

  return (
    <div>
      <h1>관리자 권한이 필요합니다.</h1>
      <form onSubmit={handleKeyVerify}>
        <div>
          <label htmlFor="key">비밀번호: </label>
          <input type="text" id="key" value={key} onChange={(e) => setKey(e.target.value)} />
        </div>
        <button type="submit">입력</button>
      </form>
    </div>
  );
};

export default AdminGuard;
