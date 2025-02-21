import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import products from "../../../../components/helpers/Products.json";
import { Link } from "react-router-dom";
import { ReactComponent as FaArrowLeft } from "../../../../assets/images/arrow-left.svg";
import { ReactComponent as FaArrowRight } from "../../../../assets/images/arrow-right.svg";

const NewArrival = () => {
  const newArrivals = products.products?.Newarrival;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <MainContainer>
        <Container>
          <Bullet></Bullet>
          <Heading>New Arrival</Heading>
        </Container>
        <MainDiv>
          <SliderContainer {...settings}>
            {newArrivals.map((item) => (
              <ContentContainer key={item.id} to={`/singlepage/${item.id}`}>
                <ImgContainer>
                  <Image src={item.image} />
                </ImgContainer>
                <Description>{item.category}</Description>
              </ContentContainer>
            ))}
          </SliderContainer>
        </MainDiv>
      </MainContainer>
    </Wrapper>
  );
};

export default NewArrival;

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const MainContainer = styled.div`
  padding: 10px 0;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 70px;
`;

const Bullet = styled.div`
  background-color: #8a33fd;
  width: 6px;
  height: 30px;
  border-radius: 10px;
  margin-right: 15px;
`;

const Heading = styled.h3`
  font-size: 32px;
  font-family: "poppinsregular";
  font-weight: 600;
  margin: 6px 0 0 0;
  color: #3c4242;
  @media all and (max-width: 980px) {
    font-size: 26px;
  }
  @media all and (max-width: 480px) {
    font-size: 20px;
  }
`;
const MainDiv = styled.div`
  padding: 0 30px;
`;

const SliderContainer = styled(Slider)`
  .slick-prev:before,
  .slick-next:before {
    display: none;
  }
`;

const ContentContainer = styled(Link)`
  padding: 0 10px;
`;

const ImgContainer = styled.div`
  width: 90%;
  cursor: pointer;
`;

const Image = styled.img`
  display: block;
  width: 100%;
`;

const Description = styled.p`
  display: flex;
  align-items: flex-end;
  font-family: "poppinsregular";
  font-size: 16px;
  font-weight: 700;
  color: #3c4242;
  margin-top: 32px;
  @media all and (max-width: 980px) {
    font-size: 13px;
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
    left: -39px;
  }

  &.slick-next {
    right: -39px;
  }

  svg {
    width: 15px;
    height: 15px;
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
