import React, { useState } from "react";
import AdminForm from "../../components/AdminForm";
import AdminGuard from "../../components/AdminGuard";

const AdminPage = () => {
  const [team, setTeam] = useState(localStorage.getItem("team"));
  const updateTeam = () => {
    setTeam(localStorage.getItem("team"));
  };
  return (
    <div>
      {team === null ? (
        <AdminGuard updateTeam={updateTeam} />
      ) : (
        <AdminForm updateTeam={updateTeam} />
      )}
    </div>
  );
};

export default AdminPage;
