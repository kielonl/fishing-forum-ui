import React from "react";
import "../styles/ErrorBox.scss";

const ErrorBox = (props) => {
  return (
    <p
      className={
        props.error.ifError ? "error-true error-box" : "error-false error-box"
      }
    >
      {props.error.value}
    </p>
  );
};
export default ErrorBox;
