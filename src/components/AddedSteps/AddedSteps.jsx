import React, { useState, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./AddedSteps.css";
import Draggable from "react-draggable";
import { GiHamburgerMenu } from "react-icons/gi";

const AddedSteps = ({ nameArr }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div className="added_steps">
      <div className="hamburger">
        <GiHamburgerMenu className="icon_ham" onClick={handleToggle}>
          {navbarOpen ? "Close" : "Open"}
        </GiHamburgerMenu>
      </div>
      {nameArr.map((name, id) => {
        return (
          <div>
            <Draggable key={id}>
              <div className={`steps ${navbarOpen ? " showMenu" : ""}`}>
                <div className="dots">
                  <BsThreeDotsVertical />
                  <BsThreeDotsVertical className="dot_btn" />
                </div>
                <div className="added_text">
                  <p>{name}</p>
                </div>
              </div>
            </Draggable>
          </div>
        );
      })}
    </div>
  );
};

export default AddedSteps;
