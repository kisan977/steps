import React from "react";
import "./Button.css";
import { BsFillPlusCircleFill } from "react-icons/bs";

const Button = (props) => {
  return (
    <div>
      <div className="add_btn">
        <BsFillPlusCircleFill onClick={props.onSubmit} className="add_plus" />
        Add Step
      </div>
    </div>
  );
};

export default Button;
