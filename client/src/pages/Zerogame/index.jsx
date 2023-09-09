import React, { useEffect } from "react";
import * as s from "./style";
import { useLocation } from "react-router-dom";

const ZerogamePage = () => {
  const location = useLocation();
  const { userId, teamId } = location.state;

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(userId, teamId);
  }, []);

  return <div>ZerogamePage</div>;
};

export default ZerogamePage;
