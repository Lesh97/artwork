import { faHeart, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderFixed = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
`;
const LeftHeader = styled.div`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 30px;
  height: 100%;
  div {
    display: flex;
    margin-left: 10px;
    input {
      margin-left: 30px;
      width: 300px;
      border-style: none;
      border-bottom: 1px solid #e9eaeb;
      :focus {
        outline: none;
      }
    }
  }
`;

const Nav = styled.div`
  width: 100%;
  height: 35px;
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
    margin-left: 50px;
    :hover {
      font-weight: 800;
      border-bottom: 2px solid black;
    }
  }
`;

const LogIn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
  height: 100%;
  div {
    margin-left: 20px;
  }
`;

function YenaHeader() {
  return (
    <>
      <HeaderFixed>
        <LeftHeader>
          <Nav>
            <Navul>
              <Link to="/">
                <li>홈</li>
              </Link>
              <Link to="*">
                <li>작품</li>
              </Link>
              <Link to="*">
                <li>작가</li>
              </Link>
              <Link to="*">
                <li>갤러리</li>
              </Link>
              <Link to="*">
                <li>옥션</li>
              </Link>
            </Navul>
          </Nav>
        </LeftHeader>
        <LogIn>
          <div>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <div>
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <div>로그인</div>
        </LogIn>
      </HeaderFixed>
    </>
  );
}

export default YenaHeader;
