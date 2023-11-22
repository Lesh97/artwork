import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Component } from "react";
import { styled } from "styled-components";

export class YeonSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      variableWidth: true,
      focusOnSelect: true,
      adaptiveHeight: true,
    };

    const SliderFirstBox = styled.div`
      position: relative;
      border-radius: 10px;
      padding-left: 50px;
      margin-top: 10px;
    `;

    const SliderBox = styled.div`
      position: relative;
      border-radius: 10px;
      padding: 0px 50px 0px 50px;
      margin-top: 10px;
    `;

    const SliderFitstImg = styled.img`
      width: 750px;
      height: 312px;
      border-radius: 10px;
    `;

    const SliderImg = styled.img`
      width: 400px;
      height: 312px;
      border-radius: 10px;
    `;
    const SlideInfo = styled.div`
      position: absolute;
      top: 80%;
      margin-left: 20px;
      color: white;
    `;
    return (
      <div>
        <Slider {...settings}>
          <SliderFirstBox>
            <SliderFitstImg src="https://m.artish.co.kr/web/product/big/shop1_4526e01b58aad2c7dd9a041cb68cdf57.jpg"></SliderFitstImg>
            <SlideInfo>
              <h1>작품명</h1>
              <p>작가이름</p>
            </SlideInfo>
          </SliderFirstBox>
          <SliderBox>
            <SliderImg src="https://cdn.artsnculture.com/news/thumbnail/202101/2390_6260_330_v150.jpg"></SliderImg>
            <SlideInfo>
              {" "}
              <h1>작품명</h1>
              <p>작가이름</p>
            </SlideInfo>
          </SliderBox>
          <SliderBox>
            <SliderImg src="https://d39q7aik4bbc0b.cloudfront.net/media/artwork/image/main/CME1YAY1002_main.jpg"></SliderImg>
            <SlideInfo>
              {" "}
              <h1>작품명</h1>
              <p>작가이름</p>
            </SlideInfo>
          </SliderBox>
          <SliderBox>
            <SliderImg src="https://d1z7ls0lpgvz0q.cloudfront.net/media/artworks/B56YYK1002B56YYK1002B56YYK1002B56YYK1002B56YYK1002B56YYK1002B56YYK1002B56YYK1002B56YYK1002B56YYK1002B56YYK1002B56YYK1002B56YYK1002B56YYK1002%EC%9C%A0%EC%98%81%EA%B5%AD_work_kK7Mtr7_NlXR3aH_jtPht89_41oWYyV_tbjMysU_mgdjFrd_ev8a11e_7ooJyMs_6w016v9_XAJYXa3_DPgWF_GOM2hcy.png"></SliderImg>
            <SlideInfo>
              {" "}
              <h1>작품명</h1>
              <p>작가이름</p>
            </SlideInfo>
          </SliderBox>
          <SliderBox>
            <SliderImg src="https://contents.sixshop.com/thumbnails/uploadedFiles/96396/product/image_1560847627083_750.png"></SliderImg>
            <SlideInfo>
              {" "}
              <h1>작품명</h1>
              <p>작가이름</p>
            </SlideInfo>
          </SliderBox>
        </Slider>
      </div>
    );
  }
}

export class KoreanSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      focusOnSelect: true,
    };

    const SliderBox = styled.div`
      position: relative;
      border-radius: 10px;
      padding: 0px 50px 0px 50px;
      margin-top: 10px;
    `;

    const SliderImg = styled.img`
      width: 550px;
      height: 312px;
      border-radius: 10px;
    `;
    const SlideInfo = styled.div`
      position: absolute;
      top: 80%;
      margin-left: 20px;
      color: white;
    `;
    return (
      <div>
        <Slider {...settings}>
          <SliderBox>
            <SliderImg src="https://m.artish.co.kr/web/product/big/shop1_4526e01b58aad2c7dd9a041cb68cdf57.jpg"></SliderImg>
            <SlideInfo></SlideInfo>
          </SliderBox>
          <SliderBox>
            <SliderImg src="https://cdn.artsnculture.com/news/thumbnail/202101/2390_6260_330_v150.jpg"></SliderImg>
            <SlideInfo> </SlideInfo>
          </SliderBox>
          <SliderBox>
            <SliderImg src="https://d39q7aik4bbc0b.cloudfront.net/media/artwork/image/main/CME1YAY1002_main.jpg"></SliderImg>
            <SlideInfo> </SlideInfo>
          </SliderBox>
          <SliderBox>
            <SliderImg src="https://d1z7ls0lpgvz0q.cloudfront.net/media/artworks/B56YYK1002B56YYK1002B56YYK1002B56YYK1002B56YYK1002B56YYK1002B56YYK1002B56YYK1002B56YYK1002B56YYK1002B56YYK1002B56YYK1002B56YYK1002B56YYK1002%EC%9C%A0%EC%98%81%EA%B5%AD_work_kK7Mtr7_NlXR3aH_jtPht89_41oWYyV_tbjMysU_mgdjFrd_ev8a11e_7ooJyMs_6w016v9_XAJYXa3_DPgWF_GOM2hcy.png"></SliderImg>
            <SlideInfo> </SlideInfo>
          </SliderBox>
          <SliderBox>
            <SliderImg src="https://contents.sixshop.com/thumbnails/uploadedFiles/96396/product/image_1560847627083_750.png"></SliderImg>
            <SlideInfo> </SlideInfo>
          </SliderBox>
        </Slider>
      </div>
    );
  }
}

export class CollectionSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      variableWidth: true,
      focusOnSelect: true,
    };

    const SliderBox = styled.div`
      position: relative;
      border-radius: 10px;
      padding: 0px 50px 0px 50px;
      margin-top: 10px;
    `;

    const SliderImg = styled.img`
      width: 300px;
      height: 312px;
      border-radius: 10px;
    `;
    const SlideInfo = styled.div`
      position: absolute;
      top: 80%;
      margin-left: 20px;
      color: white;
    `;
    return (
      <div>
        <Slider {...settings}>
          <SliderBox>
            <SliderImg src="https://m.artish.co.kr/web/product/big/shop1_4526e01b58aad2c7dd9a041cb68cdf57.jpg"></SliderImg>
            <SlideInfo></SlideInfo>
          </SliderBox>
          <SliderBox>
            <SliderImg src="https://cdn.artsnculture.com/news/thumbnail/202101/2390_6260_330_v150.jpg"></SliderImg>
            <SlideInfo> </SlideInfo>
          </SliderBox>
          <SliderBox>
            <SliderImg src="https://d39q7aik4bbc0b.cloudfront.net/media/artwork/image/main/CME1YAY1002_main.jpg"></SliderImg>
            <SlideInfo> </SlideInfo>
          </SliderBox>
          <SliderBox>
            <SliderImg src="https://d1z7ls0lpgvz0q.cloudfront.net/media/artworks/B56YYK1002B56YYK1002B56YYK1002B56YYK1002B56YYK1002B56YYK1002B56YYK1002B56YYK1002B56YYK1002B56YYK1002B56YYK1002B56YYK1002B56YYK1002B56YYK1002%EC%9C%A0%EC%98%81%EA%B5%AD_work_kK7Mtr7_NlXR3aH_jtPht89_41oWYyV_tbjMysU_mgdjFrd_ev8a11e_7ooJyMs_6w016v9_XAJYXa3_DPgWF_GOM2hcy.png"></SliderImg>
            <SlideInfo> </SlideInfo>
          </SliderBox>
          <SliderBox>
            <SliderImg src="https://contents.sixshop.com/thumbnails/uploadedFiles/96396/product/image_1560847627083_750.png"></SliderImg>
            <SlideInfo> </SlideInfo>
          </SliderBox>
        </Slider>
      </div>
    );
  }
}
