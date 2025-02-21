import React from "react";
import styled from "styled-components";
// import products from "../../../helpers/Products.json";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const MensCategory = () => {
  const [menProducts, setMenProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      const filteredMenProducts = data.filter(
        (item) => item.category === "men's clothing"
      );
      setMenProducts(filteredMenProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const truncateTitle = (title, maxLength) => {
    return title.length > maxLength
      ? `${title.substring(0, maxLength)}...`
      : title;
  };

  return (
    <>
      <Wrapper>
        <MainContainer>
          <Container>
            <Bullet></Bullet>
            <Heading>Categories For Men</Heading>
          </Container>
          <ProductsContainer>
            {menProducts.map((item) => (
              <Products key={item.id} to={`/singlepage/${item.id}`}>
                <ImageContainer>
                  <Image src={item.image} />
                </ImageContainer>
                <Contents>
                  <Right>
                    <Category>{truncateTitle(item.title, 20)}</Category>
                    <Text>Explore Now!</Text>
                  </Right>
                  <ArrowContainer>
                    <Arrow
                      src={
                        require("../../../../assets/images/arrow-right.svg")
                          .default
                      }
                    />
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

export default MensCategory;

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
  margin-top: 50px;
  margin-bottom: 40px;
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
  gap: 40px;
  padding: 30px 0;
  margin-bottom: 32px;
  @media all and (max-width: 1280px) {
    /* gap: 20px; */
  }
  @media all and (max-width: 768px) {
    padding: 0;
  }
`;
const Products = styled(Link)`
  cursor: pointer;
  @media all and (max-width: 1280px) {
    width: 26%;
  }
  @media all and (max-width: 980px) {
    width: 30%;
  }
  @media all and (max-width: 888px) {
    width: 35%;
  }
  @media all and (max-width: 683px) {
    width: 43%;
  }
  @media all and (max-width: 444px) {
    width: 100%;
  }
`;
const ImageContainer = styled.div`
  margin-bottom: 10px;
  /* width: 250px; */
  height: 300px;
`;
const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;
const Contents = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Right = styled.div``;
const ArrowContainer = styled.div`
  width: 15px;
  @media all and (max-width: 768px) {
    width: 10px;
  }
`;
const Arrow = styled.img`
  display: block;
  width: 100%;
`;

const Category = styled.p`
  font-size: 15px;
  font-family: "poppinsmedium";
  font-weight: 700;
  color: #2a2f2f;
  margin: 0;
  margin-bottom: 4px;
  margin-top: 14px;
  @media all and (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 0;
  }
`;
const Text = styled.p`
  font-family: "poppinsregular";
  font-size: 12px;
  color: #7f7f7f;
  margin: 0;
  @media all and (max-width: 768px) {
    font-size: 10px;
  }
`;
