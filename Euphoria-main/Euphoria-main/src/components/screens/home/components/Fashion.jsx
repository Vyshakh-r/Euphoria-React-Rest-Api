import React from "react";
import styled from "styled-components";
import image1 from "../../../../assets/images/bg-4.jpg";
import image2 from "../../../../assets/images/bg-5.jpg";

const Fashion = () => {
  return (
    <>
      <Wrapper>
        <MainContainer>
          <LeftContainer>
            <ContentContainer>
              <Heading>WE MADE YOUR EVERYDAY FASHION BETTER!</Heading>
              <Para>
                In our journey to improve everyday fashion, euphoria presents
                EVERYDAY wear range - Comfortable & Affordable fashion 24/7
              </Para>
              <ButtonContainer>
                <Button>shop Now</Button>
              </ButtonContainer>
            </ContentContainer>
          </LeftContainer>
          <RightContainer></RightContainer>
        </MainContainer>
      </Wrapper>
    </>
  );
};

export default Fashion;

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const MainContainer = styled.div`
  display: flex;
  padding: 50px 0;
  margin-top: 30px;
  margin-top: 20px;
  @media all and (max-width: 768px) {
    padding: 20px 0;
  }
  @media all and (max-width: 480px) {
    flex-wrap: wrap;
  }
`;

const LeftContainer = styled.div`
  width: 50%;
  background-image: url(${image1});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  height: 639px;
  @media all and (max-width: 1280px) {
    height: 570px;
  }
  @media all and (max-width: 1024px) {
    height: 522px;
  }
  @media all and (max-width: 980px) {
    height: 420px;
  }
  @media all and (max-width: 768px) {
    height: 356px;
  }
  @media all and (max-width: 480px) {
    width: 100%;
    margin-bottom: 10px;
    border-radius: 12px;
  }
`;
const RightContainer = styled.div`
  width: 50%;
  background-image: url(${image2});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  height: 639px;
  @media all and (max-width: 1280px) {
    height: 570px;
  }
  @media all and (max-width: 1024px) {
    height: 522px;
  }
  @media all and (max-width: 980px) {
    height: 420px;
  }
  @media all and (max-width: 768px) {
    height: 356px;
  }
  @media all and (max-width: 480px) {
    width: 100%;
    border-radius: 12px;
  }
`;
const ContentContainer = styled.div`
  padding: 100px 85px 0;
  text-align: left;
  @media all and (max-width: 980px) {
    padding: 100px 50px 0;
  }
  @media all and (max-width: 768px) {
    padding: 60px 30px 0;
  }
  @media all and (max-width: 480px) {
    padding: 90px 30px 0;
  }
`;
const Heading = styled.h3`
  font-size: 34px;
  color: #ffffff;
  font-family: "poppinsregular";
  font-weight: 800;
  line-height: 50px;
  margin: 70px 0 27px 0;
  width: 100%;
  @media all and (max-width: 1280px) {
    margin-top: 0;
  }
  @media all and (max-width: 1024px) {
    font-size: 26px;
    line-height: 2.2rem;
    margin-bottom: 10px;
  }
  @media all and (max-width: 980px) {
    font-size: 18px;
    line-height: 24px;
  }
`;
const Para = styled.p`
  font-size: 16px;
  color: #ffffff;
  width: 78%;
  font-family: "poppinsregular";
  line-height: 24px;
  margin-bottom: 45px;
  @media all and (max-width: 1024px) {
    font-size: 14px;
    width: 100%;
  }
  @media all and (max-width: 980px) {
    font-size: 14px;
  }
  @media all and (max-width: 768px) {
    font-size: 12px;
  }
  @media all and (max-width: 640px) {
    line-height: 18px;
    margin-bottom: 27px;
  }
`;
const ButtonContainer = styled.div`
  padding: 12px 44px;
  border-radius: 8px;
  background-color: #ffffff;
  display: inline-block;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  @media all and (max-width: 980px) {
    padding: 6px 17px;
  }
`;
const Button = styled.span`
  font-size: 14px;
  font-family: "poppinsmedium";
  color: #3c4242;
  @media all and (max-width: 980px) {
    font-size: 10px;
  }
`;
