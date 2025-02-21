import React from "react";
import styled from "styled-components";
import Header from "../../../includes/Header";
import Spotlights from "./Spotlights";
import Related from "./Related";
import NewArrival from "./NewArrival";
import Fashion from "./Fashion";
import MensCategory from "./MensCategory";
import WomensCategory from "./WomensCategory";
import Brands from "./Brands";
import LimeLight from "./LimeLight";
import Feedback from "./Feedback";
import Footer from "../../../includes/Footer";

const Main = () => {
  return (
    <>
      <MainContainer>
        <Header />
        <Spotlights />
        <Related />
        <NewArrival />
        <Fashion />
        <MensCategory />
        <WomensCategory />
        <Brands />
        <LimeLight />
        <Feedback />
        <Footer />
      </MainContainer>
    </>
  );
};

export default Main;

const MainContainer = styled.div``;
