import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  //

  const [curTime, newTime] = useState("");

  setInterval(() => {
    const times = new Date().toLocaleTimeString();
    newTime(times);
  }, 1000);

  return (
    <>
      <div className="header__section">
        <h1> Abbas Keep </h1>
        <h3> {curTime} </h3>
      </div>
    </>
  );
};

export default Header;
