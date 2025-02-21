import React from "react";
import styled from "styled-components";

const Related = () => {
  const relatedProducts = [
    {
      id: 1,
      name: "High Coziness",
      type: "Low Price",
      img: require("../../../../assets/images/bg-2.jpg"),
    },
    {
      id: 2,
      name: "Breezy Summer Style",
      type: "Beyoung Presents",
      img: require("../../../../assets/images/bg-3.jpg"),
    },
  ];

  return (
    <Wrapper>
      <MainContainer>
        {relatedProducts.map((product) => (
          <Container
            key={product.id}
            style={{
              backgroundImage: `url(${product.img})`,
            }}
          >
            <ItemContainer>
              <Text>{product.type}</Text>
              <Heading>{product.name}</Heading>
              <Offer>UPTO 50% OFF</Offer>
              <Explore>Explore Items</Explore>
            </ItemContainer>
          </Container>
        ))}
      </MainContainer>
    </Wrapper>
  );
};

export default Related;

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px 0px;
  margin-top: 100px;
  margin-bottom: 50px;
  @media all and (max-width: 768px) {
    margin-top: 0;
    padding: 28px 0;
  }
  @media all and (max-width: 640px) {
    padding-bottom: 18px;
  }
  @media all and (max-width: 480px) {
    flex-wrap: wrap;
  }
`;

const Container = styled.div`
  width: 48.5%;
  background-repeat: no-repeat;
  background-size: cover;
  background-size: 56rem;
  height: 328px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  @media all and (max-width: 1280px) {
    background-size: 40rem;
  }
  @media all and (max-width: 1280px) {
    height: 271px;
  }
  @media all and (max-width: 768px) {
    height: 200px;
    background-size: 28rem;
  }
  @media all and (max-width: 640px) {
    height: 150px;
    background-size: 22rem;
  }
  @media all and (max-width: 480px) {
    width: 100%;
    margin-bottom: 10px;
    background-size: 32rem;
  }
`;
const ItemContainer = styled.div`
  padding: 0 30px;
  margin-top: 40px;
  @media all and (max-width: 640px) {
    margin-top: 20px;
  }
`;

const Text = styled.h5`
  font-family: "poppinsbold";
  font-size: 16px;
  color: #ffffff;
  margin: 29px 0 0 0;
  @media all and (max-width: 768px) {
    margin: 0;
    font-size: 13px;
  }
  @media all and (max-width: 640px) {
    font-size: 10px;
  }
`;

const Heading = styled.h3`
  font-family: "poppinsbold";
  font-size: 34px;
  color: #ffffff;
  width: 56%;
  margin: 15px 0 15px 0;
  line-height: 45.1px;
  @media all and (max-width: 1280px) {
    font-size: 30px;
  }
  @media all and (max-width: 980px) {
    font-size: 26px;
    line-height: 2rem;
  }
  @media all and (max-width: 768px) {
    font-size: 18px;
    line-height: 1.2rem;
  }
  @media all and (max-width: 768px) {
    margin-bottom: 7px;
  }
  @media all and (max-width: 640px) {
    margin-top: 7px;
    font-size: 16px;
  }
`;

const Offer = styled.span`
  font-family: "poppinsregular";
  color: #ffffff;
  font-size: 15px;
  @media all and (max-width: 640px) {
    font-size: 12px;
  }
`;

const Explore = styled.h5`
  text-decoration: underline;
  font-family: "poppinsregular";
  color: #ffffff;
  font-size: 18px;
  margin: 30px 0 0 0;
  text-underline-offset: 5px;
  cursor: pointer;
  @media all and (max-width: 1280px) {
    margin: 0;
  }
  @media all and (max-width: 768px) {
    font-size: 14px;
  }
  @media all and (max-width: 640px) {
    font-size: 12px;
  }
`;
