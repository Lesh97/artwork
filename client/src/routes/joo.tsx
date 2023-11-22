import { styled } from "styled-components";
import YeonHeader from "../components/YeonHeader";
import {
  YeonSlider,
  CollectionSlider,
  KoreanSlider,
} from "../components/YeonSlider";

const MainSlider = styled.div`
  width: 100%;
  height: 370px;
`;
const ChartContainer = styled.div`
  width: 100%;
  height: 450px;
  background-color: skyblue;
`;
const ChartSelect = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TopNew = styled.div`
  display: flex;
  width: 20%;
  div {
    width: 10%;
  }
`;

const ChartSelectDetail = styled.div`
  display: flex;
`;

const DateSlecet = styled.div`
  display: flex;
`;

const MainChart = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 450px;
`;

const ChartRef = styled.div`
  display: grid;
  grid-template-columns: 60px 115px 1fr 2fr 1fr 60px 115px 1fr 2fr 1fr;
  width: 100%;
`;

const ChartMain = styled.div`
  display: grid;
  grid-template-columns: 60px 115px 1fr 2fr 1fr 60px 115px 1fr 2fr 1fr;
  grid-template-rows: repeat(5, 1fr);
  grid-auto-flow: column;
  width: 100%;
`;

const ChartCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const KaSlider = styled.div`
  width: 100%;
  height: 350px;
`;
const CollectionContainer = styled.div`
  width: 100%;
  height: 350px;
`;

function YeonJoo() {
  return (
    <>
      <YeonHeader />
      <MainSlider>
        <YeonSlider></YeonSlider>
      </MainSlider>
      <ChartContainer>
        <ChartSelect>
          <TopNew>
            <div>Top</div>
            <div>New</div>
          </TopNew>
          <ChartSelectDetail>
            <DateSlecet>
              <div>1h</div>
              <div>6h</div>
              <div>24h</div>
              <div>7d</div>
            </DateSlecet>
            <div>
              <select></select>
            </div>
            <div>view all</div>
          </ChartSelectDetail>
        </ChartSelect>
        <MainChart>
          <ChartRef>
            <div></div>
            <div></div>
            <div>Name</div>
            <div>price</div>
            <div>size</div>
            <div></div>
            <div></div>
            <div>Name</div>
            <div>price</div>
            <div>size</div>
          </ChartRef>
          <ChartMain>
            <div>1</div>
            <div>img</div>
            <div>asdasdasdasd: asdas</div>
            <div>price</div>
            <div>size</div>

            <div>2</div>
            <div>img</div>
            <div>asdasdasdasd: asdas</div>
            <div>price</div>
            <div>size</div>
          </ChartMain>
        </MainChart>
      </ChartContainer>
      <KaSlider>
        <h2>korean artist</h2>
        <KoreanSlider></KoreanSlider>
      </KaSlider>
      <CollectionContainer>
        <h2>collection title</h2>
        <CollectionSlider></CollectionSlider>
      </CollectionContainer>
      <CollectionContainer>
        <h2>collection title</h2>
        <CollectionSlider></CollectionSlider>
      </CollectionContainer>
      <CollectionContainer>
        <h2>collection title</h2>
        <CollectionSlider></CollectionSlider>
      </CollectionContainer>
    </>
  );
}

export default YeonJoo;
