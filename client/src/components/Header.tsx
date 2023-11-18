import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <ul>
        <Link to="/">
          <li>메인화면</li>
        </Link>
        <Link to="/joo">
          <li>연주님</li>
        </Link>
        <Link to="/jung">
          <li>재정님</li>
        </Link>
        <Link to="/na">
          <li>예나님</li>
        </Link>
      </ul>
    </>
  );
}

export default Header;
