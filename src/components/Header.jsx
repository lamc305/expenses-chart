import React from "react";
import { Icon } from "../Iconos";

const Header = ({ balance }) => {
  return (
    <div className="header">
      <div>
        <p>My balance</p>
        <h1>${balance}</h1>
      </div>
      <Icon />
    </div>
  );
};

export default Header;
