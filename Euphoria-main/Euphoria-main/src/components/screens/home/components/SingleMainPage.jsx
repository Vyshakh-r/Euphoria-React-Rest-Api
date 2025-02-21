import React from "react";
import styled from "styled-components";
import Header from "../../../includes/Header";
import Footer from "../../../includes/Footer";
import SinglePage from "./SinglePage";
import ProductDescription from "./ProductDescription";
import SimilarProducts from "./SimilarProducts";

const SingleMainPage = () => {
  return (
    <>
      <MainContainer>
        <Header />
        <SinglePage />
        <ProductDescription />
        <SimilarProducts />
        <Footer />
      </MainContainer>
    </>
  );
};

export default SingleMainPage;

const MainContainer = styled.div``;
