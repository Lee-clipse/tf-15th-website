import React from "react";

const AdminForm = ({ updateTeam }) => {
  const handleCheck = () => {
    const currTeamIndex = parseInt(localStorage.getItem("team") || "0", 10);
    // 팀 증가
    localStorage.setItem("team", (currTeamIndex + 1).toString());
    updateTeam();
  };

  return (
    <div>
      <h1>관리자 페이지</h1>
      <button onClick={handleCheck}>팀 증가</button>
      <p>{localStorage.getItem("team")}</p>
    </div>
  );
};

export default AdminForm;
