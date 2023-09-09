import React, { useEffect } from "react";
import * as s from "./style";

const ZerogamePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>ZerogamePage</div>;
};

export default ZerogamePage;
