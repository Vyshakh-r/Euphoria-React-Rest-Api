import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const ProductDescription = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  return (
    <>
      <Wrapper>
        <MainContainer>
          <LeftContainer>
            <Container>
              <Bullet></Bullet>
              <Heading>Product Description</Heading>
            </Container>
            <DescriptionContainer>
              <DescriptionHeadingContainer>
                <DescriptionDiv>
                  <DesContent>Description</DesContent>
                </DescriptionDiv>
                <DescriptionDiv>
                  <DesContent>User comments</DesContent>
                  <CoDiv>
                    <CommentCount>21</CommentCount>
                  </CoDiv>
                </DescriptionDiv>
                <DescriptionDiv>
                  <DesContent>Question & Answer</DesContent>
                  <QaDiv>
                    <QaCount>4</QaCount>
                  </QaDiv>
                </DescriptionDiv>
              </DescriptionHeadingContainer>
            </DescriptionContainer>
            <DescriptionContainerExtend>
              <Description>{product?.description}</Description>
            </DescriptionContainerExtend>
          </LeftContainer>
          <RightContainer>
            <RightMainContainer>
              <FirstColumn>
                <Divs>
                  <DivsSub>
                    <SubContent>Category</SubContent>
                    <MainContent>{product?.category}</MainContent>
                  </DivsSub>
                </Divs>
                <Divs>
                  <DivsSub>
                    <SubContent>Pattern</SubContent>
                    <MainContent>Printed</MainContent>
                  </DivsSub>
                </Divs>
                <Divs>
                  <DivsSub>
                    <SubContent>Fit</SubContent>
                    <MainContent>Regular-fit</MainContent>
                  </DivsSub>
                </Divs>
              </FirstColumn>
              <SecondColumn>
                <Divs>
                  <DivsSub>
                    <SubContent>Neck</SubContent>
                    <MainContent>Round Neck</MainContent>
                  </DivsSub>
                </Divs>
                <Divs>
                  <DivsSub>
                    <SubContent>Sleeve</SubContent>
                    <MainContent>Half-sleeves</MainContent>
                  </DivsSub>
                </Divs>
                <Divs>
                  <DivsSub>
                    <SubContent>Style</SubContent>
                    <MainContent>Casual Wear</MainContent>
                  </DivsSub>
                </Divs>
              </SecondColumn>
            </RightMainContainer>
          </RightContainer>
        </MainContainer>
      </Wrapper>
    </>
  );
};

export default ProductDescription;

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const MainContainer = styled.div`
  display: flex;
  align-items: center;
  @media all and (max-width: 1280px) {
    flex-wrap: wrap;
    flex-direction: column;
  }
`;
const LeftContainer = styled.div`
  width: 50%;
  @media all and (max-width: 1280px) {
    width: 100%;
  }
`;
const RightContainer = styled.div`
  width: 50%;
  padding-top: 50px;
  @media all and (max-width: 1280px) {
    width: 100%;
  }
`;
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
const DescriptionContainer = styled.div``;
const DescriptionHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  @media all and (max-width: 460px) {
    flex-wrap: wrap;
  }
`;
const DescriptionDiv = styled.div`
  display: flex;
  align-items: center;
`;
const DesContent = styled.p`
  margin-right: 30px;
  font-family: "poppinsregular";
  cursor: pointer;
  color: #807d7e;
  font-size: 15px;
  &:hover {
    color: #3c4242;
    font-weight: 600;
  }
  @media all and (max-width: 640px) {
    font-size: 12px;
  }
  @media all and (max-width: 540px) {
    margin-right: 15px;
  }
`;
const CoDiv = styled.div`
  background-color: #8a33fd;
  margin-right: 30px;
  border-radius: 4px;
  height: 20px;
  width: 20px;
  align-content: center;
  @media all and (max-width: 540px) {
    margin-right: 15px;
    height: 17px;
    width: 17px;
  }
`;

const CommentCount = styled.p`
  font-size: 12px;
  color: #ffffff;
  margin: 0;
  @media all and (max-width: 640px) {
    font-size: 10px;
  }
`;
const QaDiv = styled.div`
  background-color: #3c4242;
  border-radius: 4px;
  height: 20px;
  width: 20px;
  align-content: center;
  @media all and (max-width: 540px) {
    height: 17px;
    width: 17px;
  }
`;

const QaCount = styled.p`
  font-size: 12px;
  color: #ffffff;
  margin: 0;
  @media all and (max-width: 640px) {
    font-size: 10px;
  }
`;
const DescriptionContainerExtend = styled.div``;
const Description = styled.p`
  text-align: left;
  color: #807d7e;
  font-size: 13px;
  font-family: "poppinsregular";
  @media all and (max-width: 640px) {
    font-size: 10px;
  }
`;
const RightMainContainer = styled.div`
  @media all and (max-width: 447px) {
    display: none;
  }
`;
const FirstColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #bebcbd;
  :nth-child(2) {
    border: 1px solid #bebcbd;
    border-top: none;
    border-bottom: none;
  }
`;
const SecondColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  :nth-child(2) {
    border: 1px solid #bebcbd;
    border-top: none;
    border-bottom: none;
  }
`;
const Divs = styled.div`
  padding: 20px 10px;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const DivsSub = styled.div`
  margin-left: 40px;
  @media all and (max-width: 640px) {
    margin-left: 30px;
  }
  @media all and (max-width: 540px) {
    margin-left: 16px;
  }
`;
const SubContent = styled.div`
  color: #807d7e;
  font-size: 13px;
  margin-bottom: 18px;
  text-align: left;
  font-family: "poppinsregular";
  border: none !important;
  @media all and (max-width: 640px) {
    font-size: 10px;
  }
`;
const MainContent = styled.div`
  color: #3c4242;
  font-size: 13px;
  text-align: left;
  font-family: "poppinsregular";
  border: none !important;
  @media all and (max-width: 640px) {
    font-size: 10px;
  }
`;
