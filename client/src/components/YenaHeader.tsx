import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderFixed = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 130px;
`;
const LeftHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  margin-left: 30px;
  height: 100%;
  div {
    display: flex;
    margin-left: 10px;
    margin-top: 10px;
    input {
      margin-left: 30px;
      margin-top: 10px;
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
    margin-left: 10px;
    margin-right: 10px;
    :hover {
      font-weight: 800;
      border-bottom: 2px solid black;
    }
  }
`;

const LogIn = styled.div`
  margin-right: 30px;
  padding-bottom: 60px;
  cursor: pointer;
`;

function YenaHeader() {
  return (
    <>
      <HeaderFixed>
        <LeftHeader>
          <div>
            <Link to="/">
              <li>홈으로</li>
            </Link>
            <input placeholder="작품이나 작가의 이름을 검색해보세요."></input>
          </div>
          <Nav>
            <Navul>
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
              <Link to="*">
                <li>아트페어</li>
              </Link>
              <Link to="*">
                <li>전시</li>
              </Link>
              <Link to="*">
                <li>박물관</li>
              </Link>
              <Link to="*">
                <li>재단</li>
              </Link>
            </Navul>
          </Nav>
        </LeftHeader>
        <LogIn>로그인</LogIn>
      </HeaderFixed>
    </>
  );
}

export default YenaHeader;
