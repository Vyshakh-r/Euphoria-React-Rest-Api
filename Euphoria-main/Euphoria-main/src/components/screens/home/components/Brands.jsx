import React from "react";
import styled from "styled-components";

const Brands = () => {
  const brands = [
    {
      id: 1,
      img: "../../../../assets/images/nike.jpg",
    },
    {
      id: 2,
      img: "../../../../assets/images/hm.jpg",
    },
    {
      id: 3,
      img: "../../../../assets/images/levis.jpg",
    },
    {
      id: 4,
      img: "../../../../assets/images/USPA.jpg",
    },
    {
      id: 5,
      img: "../../../../assets/images/puma.jpg",
    },
  ];
  return (
    <>
      <Wrapper>
        <MainContainer>
          <Heading>Top Brands Deal</Heading>
          <SubHeading>
            Up To <Spans>60% </Spans>off on brands
          </SubHeading>
          <BrandContainer>
            {brands.map((item) => (
              <ImageContainer key={item.id}>
                <Image src={item.img} alt="" />
              </ImageContainer>
            ))}
          </BrandContainer>
        </MainContainer>
      </Wrapper>
    </>
  );
};

export default Brands;

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 60px 0;
  @media all and (max-width: 768px) {
    padding: 36px 0;
  }
`;
const MainContainer = styled.div`
  background-color: #3c4242;
  border-radius: 12px;
  padding: 34px 0;
  
  @media all and (max-width: 640px) {
    padding: 20px 0;
  }
`;
const Heading = styled.h3`
  font-size: 50px;
  font-weight:800;
  font-family: "poppinsbold";
  color: #ffffff;
  margin: 0;
  margin-top:10px;
  @media all and (max-width: 640px) {
    font-size: 35px;
  }
  @media all and (max-width: 540px) {
    font-size: 30px;
  }
`;
const SubHeading = styled.p`
  color: #ffffff;
  font-family: "poppinsregular";
  margin-top:30px;
  margin-bottom: 80px;
  font-size: 22px;
  font-weight:400;
  @media all and (max-width: 980px) {
    margin-bottom: 30px;
  }
  @media all and (max-width: 768px) {
    margin-top: 0;
  }
  @media all and (max-width: 640px) {
    font-size: 14px;
  }
  @media all and (max-width: 540px) {
    margin-bottom: 18px;
  }
`;
const Spans = styled.span`
  color: #fbd103;
  font-family: "poppinsbold";
`;
const BrandContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-bottom:20px;
  width: 80%;
`;
const ImageContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  width: 168px;
  height: 70px;
  padding: 8px 10px;
  background-color: white;
  border-radius: 12px;
  cursor: pointer;
  @media all and (max-width: 1280px) {
    height: 51px;
    width: 124px;
  }
  @media all and (max-width: 980px) {
    height: 44px;
    width: 90px;
  }
  @media all and (max-width: 768px) {
    height: 32px;
    width: 76px;
  }
  @media all and (max-width: 768px) {
    height: 29px;
    width: 58px;
  }
  @media all and (max-width: 540px) {
    height: 20px;
    width: 50px;
  }
  @media all and (max-width: 480px) {
    height: 15px;
    width: 28px;
  }
`;
const Image = styled.img`
  display: block;
  width:80%;
  height: 80%;
`;
