import React from "react";
import "../styles/AlertBox.scss";

export const AlertBox = ({ alertInfo }) => {
  return (
    <p
      className={
        alertInfo?.ifAlert ? "alert-true alert-box" : "alert-false alert-box"
      }
      style={{ backgroundColor: alertInfo.color }}
    >
      {alertInfo?.value}
    </p>
  );
};
