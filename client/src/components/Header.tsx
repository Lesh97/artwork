import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Main from "../routes/main";

const Nav = styled.div`
  width: 100%;
  height: 35px;
  background-color: #b7b9bd;
`;

const Navul = styled.ul`
  list-style: none;
  padding-left: 0px;
  margin: 0%;
  width: 100%;
  a {
    color: black;
    float: left;
    height: 100%;
    width: 25%;
    :hover {
      color: red;
    }
  }
`;

function Header() {
  return (
    <>
      <Nav>
        <Navul>
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
        </Navul>
      </Nav>
    </>
  );
}

export default Header;
