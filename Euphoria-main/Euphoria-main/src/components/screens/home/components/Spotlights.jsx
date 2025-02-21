import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import Image1 from "../../../../assets/images/bg-1.jpg";
import Image2 from "../../../../assets/images/bg-2.jpg";
import Image3 from "../../../../assets/images/bg-3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactComponent as FaArrowLeft } from "../../../../assets/images/left-arrow-bold.svg";
import { ReactComponent as FaArrowRight } from "../../../../assets/images/right-arrow-bold.svg";

const Spotlight = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        <MainContainer bgimage={Image1}>
          <ContentContainer>
            <SubHeading>T-shirt / Tops</SubHeading>
            <Heading>Summer Value Pack</Heading>
            <SubHeadings>cool / colorful / comfy</SubHeadings>
            <ButtonContainer>
              <Button>Shop Now</Button>
            </ButtonContainer>
          </ContentContainer>
        </MainContainer>
        <MainContainer bgimage={Image2}>
          <ContentContainer>
            <SubHeading>T-shirt / Tops</SubHeading>
            <Heading>Summer Value Pack</Heading>
            <SubHeadings>cool / colorful / comfy</SubHeadings>
            <ButtonContainer>
              <Button>Shop Now</Button>
            </ButtonContainer>
          </ContentContainer>
        </MainContainer>
        <MainContainer bgimage={Image3}>
          <ContentContainer>
            <SubHeading>T-shirt / Tops</SubHeading>
            <Heading>Summer Value Pack</Heading>
            <SubHeadings>cool / colorful / comfy</SubHeadings>
            <ButtonContainer>
              <Button>Shop Now</Button>
            </ButtonContainer>
          </ContentContainer>
        </MainContainer>
      </Slider>
    </SliderContainer>
  );
};

export default Spotlight;

const SliderContainer = styled.div`
  .slick-prev:before,
  .slick-next:before {
    display: none;
  }
`;

const MainContainer = styled.div`
  background-image: url(${(props) => props.bgimage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 716px;
  display: flex;
  align-items: center;
  @media all and (max-width: 980px) {
    height: 580px;
  }
  @media all and (max-width: 768px) {
    height: 400px;
  }
  @media all and (max-width: 540px) {
    height: 300px;
  }
  @media all and (max-width: 480px) {
    height: 250px;
  }
`;

const ContentContainer = styled.div`
  padding: 100px 0;
  width: 40%;
  position: relative;
  left: 11%;
  text-align: left;
  @media all and (max-width: 768px) {
    padding: 52px 0;
  }
  @media all and (max-width: 640px) {
    padding-left: 24px;
  }
  @media all and (max-width: 480px) {
    padding: 46px 0;
    padding-left: 33px;
  }
`;

const SubHeading = styled.h5`
  color: #ffffff;
  font-family: "poppinsregular";
  font-size: 32px;
  margin: 18px 0px 40px 0;
  @media all and (max-width: 1280px) {
    font-size: 28px;
  }
  @media all and (max-width: 980px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
  @media all and (max-width: 768px) {
    font-size: 21px;
  }
  @media all and (max-width: 540px) {
    margin: 0;
    font-size: 14px;
    margin-bottom: 10px;
  }
  @media all and (max-width: 480px) {
    margin-bottom: 6px;
    font-size: 12px;
  }
`;

const Heading = styled.h1`
  color: #ffffff;
  font-family: "poppinsbold";
  font-size: 78px;
  line-height: 6rem;
  margin: 18px 0px 40px 0;
  width: 500px;
  @media all and (max-width: 1280px) {
    font-size: 60px;
    line-height: 4rem;
    width: 439px;
  }
  @media all and (max-width: 980px) {
    font-size: 52px;
    line-height: 3rem;
    margin-bottom: 20px;
    width: 360px;
  }
  @media all and (max-width: 768px) {
    font-size: 34px;
    line-height: 2.5rem;
    width: 250px;
  }
  @media all and (max-width: 540px) {
    margin: 0;
    font-size: 27px;
    margin-bottom: 10px;
    width: 200px;
  }
  @media all and (max-width: 480px) {
    font-size: 20px;
    line-height: 23px;
    width: 120px;
  }
`;

const SubHeadings = styled.h5`
  color: #ffffff;
  font-family: "poppinsregular";
  font-size: 32px;
  margin: 18px 0px 40px 0;
  @media all and (max-width: 1280px) {
    font-size: 28px;
  }
  @media all and (max-width: 980px) {
    font-size: 28px;
    margin-bottom: 40px;
  }
  @media all and (max-width: 768px) {
    font-size: 21px;
  }
  @media all and (max-width: 540px) {
    margin-bottom: 20px;
  }
  @media all and (max-width: 540px) {
    margin: 0;
    font-size: 14px;
    margin-bottom: 10px;
  }
  @media all and (max-width: 480px) {
    font-size: 12px;
  }
`;

const ButtonContainer = styled.div`
  padding: 16px 72px;
  background: #ffffff;
  display: inline-block;
  border-radius: 8px;
  cursor: pointer;
  @media all and (max-width: 980px) {
    padding: 14px 35px;
  }
  @media all and (max-width: 768px) {
    padding: 5px 22px;
  }
  @media all and (max-width: 480px) {
    padding: 4px 15px;
  }
`;

const Button = styled.span`
  font-size: 20px;
  font-family: "poppinsmedium";
  color: #3c4242;
  font-weight: 600;
  @media all and (max-width: 980px) {
    font-size: 18px;
  }
  @media all and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  z-index: 1;
  transition: background-color 0.3s ease;

  &:hover {
  }

  &.slick-prev {
    left: 25px;
  }

  &.slick-next {
    right: 25px;
  }

  svg {
    width: 30px;
    height: 30px;
  }
  @media all and (max-width: 360px) {
    &.slick-prev {
    left: 6px;
  }
  &.slick-next {
    right: 6px;
  }
  }
`;

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <Arrow className={className} onClick={onClick}>
      <FaArrowLeft />
    </Arrow>
  );
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <Arrow className={className} onClick={onClick}>
      <FaArrowRight />
    </Arrow>
  );
};
