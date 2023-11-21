import YenaHeader from "../components/YenaHeader";
import styled from "styled-components";
/**  ---------------필터 부분 ----------------  */
const Filter = styled.div`
  width: 100%;
  height: 100px;
  background-color: #f0f1f3;
`;

/**  ---------------메인 부분 ----------------  */
const MainContainer = styled.div``;
const Favorite = styled.div``;
const ArtWorksContainer = styled.div``;

function Yena() {
  return (
    <>
      <YenaHeader />
      <Filter></Filter>
      <MainContainer>
        <Favorite></Favorite>
        <ArtWorksContainer></ArtWorksContainer>
      </MainContainer>
    </>
  );
}

export default Yena;
