import React from "react";
import styled from "styled-components";
import products from "../../../helpers/Products.json";
import { Link } from "react-router-dom";

const LimeLight = () => {
  const limelight = products.products?.Limelight;
  return (
    <>
      <Wrapper>
        <MainContainer>
          <Container>
            <Bullet></Bullet>
            <Heading>In The Limelight</Heading>
          </Container>
          <ProductsContainer>
            {limelight.map((item) => (
              <Products key={item.id} to={`/singlepage/${item.id}`}>
                <WishlistContainer>
                  <WishlistImg
                    src={
                      require("../../../../../src/assets/images/wishlist.svg")
                        .default
                    }
                  />
                </WishlistContainer>
                <ImageContainer>
                  <Image src={item.image} />
                </ImageContainer>
                <Contents>
                  <Right>
                    <Category>{item.category}</Category>
                    <Text>{item.brand}</Text>
                  </Right>
                  <ArrowContainer>
                    <Brands>{item.price}</Brands>
                  </ArrowContainer>
                </Contents>
              </Products>
            ))}
          </ProductsContainer>
        </MainContainer>
      </Wrapper>
    </>
  );
};

export default LimeLight;

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const MainContainer = styled.div``;
const Container = styled.div`
  display: flex;
  align-items: center;
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
  color: #3c4242;
  margin-top: 38px;
  @media all and (max-width: 980px) {
    font-size: 26px;
  }
  @media all and (max-width: 540px) {
    margin-top: 30px;
  }
  @media all and (max-width: 480px) {
    font-size: 20px;
    margin-top: 24px;
  }
`;
const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  padding: 30px 0;
  margin-top: 30px;
  @media all and (max-width: 1280px) {
   
    gap: 10px;
  }
  @media all and (max-width: 980px) {
    
    gap: 10px;
  }
  @media all and (max-width: 768px) {
    
    padding: 5px 0;
  }
`;
const Products = styled(Link)`
  cursor: pointer;
  position: relative;
  @media all and (max-width: 1280px) {
    width: 22%;
  }
  @media all and (max-width: 980px){
    width:25%;
  }
  @media all and (max-width: 768px){
   width:30%;
  }
  @media all and (max-width: 640px) {
    width: 44%;
  }
`;
const WishlistContainer = styled.div`
  position: absolute;
  width: 18px;
  background-color: #ffffff;
  border-radius: 50%;
  padding: 8px 8px;
  top: 26px;
  right: 23px;
  @media all and (max-width: 540px) {
    width: 14px;
    padding: 6px 6px;
  }
  @media all and (max-width: 540px) {
    right: 14px;
  }
  @media all and (max-width: 768px) {
    right: 5px;
    top: 14px;
  }
`;
const WishlistImg = styled.img`
  display: block;
  width: 100%;
`;
const ImageContainer = styled.div`
  width:290px;
  margin-bottom: 10px;
`;
const Image = styled.img`
  display: block;
  width: 100%;
`;
const Contents = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top:20px;
`;
const Right = styled.div`

`;
const ArrowContainer = styled.div`
  background: #f6f6f6;
  border-radius:8px;
`;
const Brands = styled.p`
  font-family: "poppinsmedium";
  font-size: 14px;
  font-weight:700;
  color: #3c4242;
  margin:0;
  padding:15px 20px;
  @media all and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Category = styled.p`
  font-size: 16px;
  font-family: "poppinsmedium";
  font-weight: 600;
  color: #2a2f2f;
  margin: 0;
  margin-bottom: 4px;
  margin-top: 14px;
  @media all and (max-width: 980px) {
    font-size: 10px;
    margin-bottom: 0;
    line-height: 15px;
  }
`;
const Text = styled.p`
  font-family: "poppinsregular";
  font-size: 14px;
  font-weight:500;
  color: #7f7f7f;
  margin: 0;
  margin-top:15px;
  @media all and (max-width: 980px) {
    font-size: 10px;
  }
`;
