import { useState } from "react";
import { styled } from "styled-components";
import YeonHeader from "../components/YeonHeader";

const MainSlider = styled.div`
  width: 100%;
  height: 350px;
  background-color: grey;
`;
const MainChart = styled.div`
  width: 100%;
  height: 450px;
  background-color: skyblue;
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
      <MainSlider>슬라이더</MainSlider>
      <MainChart>차트</MainChart>
      <KaSlider>korean artist</KaSlider>
      <CollectionSlider>collection title</CollectionSlider>
      <CollectionSlider>collection title</CollectionSlider>
      <CollectionSlider>collection title</CollectionSlider>
    </>
  );
}

export default YeonJoo;
