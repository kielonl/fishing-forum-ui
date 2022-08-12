import React from "react";
import "../styles/ErrorBox.scss";

const ErrorBox = (props) => {
  return (
    // <p
    //   className={
    //     props.ifError ? "error-true error-box" : "error-false error-box"
    //   }
    // >
    //   {props.error}
    // </p>
    <div>{props.error}</div>
  );
};
export default ErrorBox;
