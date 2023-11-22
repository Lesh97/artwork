import YenaHeader from "../components/YenaHeader";
import styled from "styled-components";
/**  ---------------필터 부분 CSS ----------------  */
const Filter = styled.div`
  width: 100%;
  height: 100px;
  background-color: #f0f1f3;
`;

/**  ---------------메인컨테이너 CSS ----------------  */
const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

/**  ---------------즐겨찾기 부분 CSS ----------------  */
const Favorite = styled.div`
  width: 25%;
  border-right: 2px solid #d7d9db;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  div {
    background-color: grey;
    width: 300px;
    height: 150px;
    margin-top: 30px;
  }

  /**  ---------------작품 부분 CSS ----------------  */
`;
const ArtWorksContainer = styled.div`
  width: 75%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
`;
const Product = styled.div`
  margin-top: 30px;
  .artpiece {
    background-color: grey;
    width: 300px;
    height: 350px;
  }
  .artist {
    display: flex;
    align-items: center;
    margin: 10px 0px 15px 0px;
    h2 {
      font-weight: 800;
      margin-right: 10px;
      font-size: 20px;
    }
    div {
      font-size: 15px;
      background-color: black;
      color: white;
      width: 60px;
      height: 20px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

function Yena() {
  return (
    <>
      <YenaHeader />
      <Filter></Filter>
      <MainContainer>
        <Favorite>
          favorite
          <div></div>
          <div></div>
          <div></div>
        </Favorite>
        <ArtWorksContainer>
          <Product>
            <div className="artpiece"></div>
            <div className="artist">
              <h2>작가</h2>
              <div>팔로우</div>
            </div>
            <span>작품이름</span>
            <p>가격</p>
          </Product>
          <Product>
            <div className="artpiece"></div>
            <div className="artist">
              <h2>작가</h2>
              <div>팔로우</div>
            </div>
            <span>작품이름</span>
            <p>가격</p>
          </Product>
          <Product>
            <div className="artpiece"></div>
            <div className="artist">
              <h2>작가</h2>
              <div>팔로우</div>
            </div>
            <span>작품이름</span>
            <p>가격</p>
          </Product>
          <Product>
            <div className="artpiece"></div>
            <div className="artist">
              <h2>작가</h2>
              <div>팔로우</div>
            </div>
            <span>작품이름</span>
            <p>가격</p>
          </Product>
          <Product>
            <div className="artpiece"></div>
            <div className="artist">
              <h2>작가</h2>
              <div>팔로우</div>
            </div>
            <span>작품이름</span>
            <p>가격</p>
          </Product>
          <Product>
            <div className="artpiece"></div>
            <div className="artist">
              <h2>작가</h2>
              <div>팔로우</div>
            </div>
            <span>작품이름</span>
            <p>가격</p>
          </Product>
        </ArtWorksContainer>
      </MainContainer>
    </>
  );
}

export default Yena;
