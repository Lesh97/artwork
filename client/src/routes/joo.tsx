import { useState } from "react";
import { styled } from "styled-components";
import YeonHeader from "../components/YeonHeader";
import { YeonSlider } from "../components/YeonSlider";

const MainSlider = styled.div`
  width: 100%;
  height: 370px;
`;
const ChartContainer = styled.div`
  width: 100%;
  height: 450px;
  background-color: skyblue;
`;
const ChartSelect = styled.div``;
const MainChart = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fill, minmax(25%, auto));
  grid-auto-flow: dense;
`;
const ChartPiece = styled.div`
  height: 150px;
  display: flex;
  div {
    width: 20%;
  }
`;

const KaSlider = styled.div`
  width: 100%;
  height: 350px;
`;
const CollectionSlider = styled.div`
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
        <ChartSelect>top new </ChartSelect>
        <MainChart>
          <ChartPiece>
            <div></div>
            <div>이미지</div>
            <div>top title</div>
            <div>price</div>
            <div>size</div>
          </ChartPiece>
          <ChartPiece>
            <div></div>
            <div>이미지</div>
            <div>top title</div>
            <div>price</div>
            <div>size</div>
          </ChartPiece>
          <ChartPiece>
            <div>1</div>
            <div>이미지</div>
            <div>top title</div>
            <div>300,000</div>
            <div>15호</div>
          </ChartPiece>
          <ChartPiece>
            <div>6</div>
            <div>이미지</div>
            <div>top title</div>
            <div>500,000</div>
            <div>18호</div>
          </ChartPiece>
        </MainChart>
      </ChartContainer>
      <KaSlider>korean artist</KaSlider>
      <CollectionSlider>collection title</CollectionSlider>
      <CollectionSlider>collection title</CollectionSlider>
      <CollectionSlider>collection title</CollectionSlider>
    </>
  );
}

export default YeonJoo;
