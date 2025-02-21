import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <MainContainer>
          <TopContainer>
            <Contents>
              <Title>Need Help</Title>
              <Subs>Contact Us</Subs>
              <Subs>Track Order</Subs>
              <Subs>Returns & Refunds</Subs>
              <Subs>FAQ's</Subs>
              <Subs>Career</Subs>
            </Contents>
            <Contents>
              <Title>Company</Title>
              <Subs>About Us</Subs>
              <Subs>euphoria Blog</Subs>
              <Subs>euphoriastan</Subs>
              <Subs>Collaboration</Subs>
              <Subs>Media</Subs>
            </Contents>
            <Contents>
              <Title>More Info</Title>
              <Subs>Term and Conditions</Subs>
              <Subs>Privacy Policy</Subs>
              <Subs>Shipping Policy</Subs>
              <Subs>Sitemap</Subs>
            </Contents>
            <Contents>
              <Title>Location</Title>
              <Subs>support@euphoria.in</Subs>
              <Subs>Eklingpura Chouraha, Ahmedabad Main Road</Subs>
              <Subs>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</Subs>
            </Contents>
          </TopContainer>
          <ComonContainer>
            <LeftContainer>
              <IconMain>
                <IconContainer>
                  <Icon
                    src={require("../../assets/images/facebook.svg").default}
                    alt="facebook"
                  />
                </IconContainer>
                <IconContainer>
                  <Icon
                    src={require("../../assets/images/instagram.svg").default}
                    alt="instagram"
                  />
                </IconContainer>
                <IconContainer>
                  <Icon
                    src={require("../../assets/images/twitter.svg").default}
                    alt="twitter"
                  />
                </IconContainer>
                <IconContainer>
                  <Icon
                    src={require("../../assets/images/linkedin.svg").default}
                    alt="linkedin"
                  />
                </IconContainer>
              </IconMain>
            </LeftContainer>
            <RightContainer>
              <DownloadText>Download The App</DownloadText>
              <ImageContent>
                <Left>
                  <ImageContainer>
                    <Image
                      src={require("../../assets/images/playstore.svg").default}
                    />
                  </ImageContainer>
                  <GooglePlay>
                    <Span>android app on</Span>
                    <Sub>Google Play</Sub>
                  </GooglePlay>
                </Left>
                <Right>
                  <ImageContainer>
                    <Image
                      src={require("../../assets/images/phone.svg").default}
                    />
                  </ImageContainer>
                  <GooglePlay>
                    <Span>android app on</Span>
                    <Sub>Google Play</Sub>
                  </GooglePlay>
                </Right>
              </ImageContent>
            </RightContainer>
          </ComonContainer>
        </MainContainer>
        <CategoryDiv>
          <Div>
            <CategoryText>Popular Categories</CategoryText>
            <DropdownContainer>
              <DropdownImg
                src={require("../../assets/images/arrow-down.svg").default}
              />
            </DropdownContainer>
          </Div>
        </CategoryDiv>
        <Copyright>
          <CopyText>
            Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
          </CopyText>
        </Copyright>
      </Wrapper>
    </>
  );
};

export default Footer;

const Wrapper = styled.div`
  background-color: #3c4242;
`;
const MainContainer = styled.div`
  padding: 50px 0px;
  box-sizing: border-box;
  width: 78%;
  margin: 0 auto;
  @media all and (max-width: 1280px) {
    width: 90%;
  }
  @media all and (max-width: 640px) {
    padding: 0;
  }
`;
const TopContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  @media all and (max-width: 980px) {
    flex-wrap: wrap;
  }
  @media all and (max-width: 360px) {
    padding-left: 33px;
  }
`;
const Contents = styled.li`
  text-align: left;
  @media all and (max-width: 980px) {
    width: 27%;
  }
  @media all and (max-width: 360px) {
    width: 100%;
  }
`;
const Title = styled.h3`
  color: #f6f6f6;
  font-size: 26px;
  font-family: "poppinsmedium";
  @media all and (max-width: 640px) {
    font-size: 18px;
    margin-bottom: 0;
  }
`;
const Subs = styled.p`
  color: #f6f6f6;
  font-family: "poppinsregular";
  font-size: 13px;
  cursor: pointer;
  @media all and (max-width: 640px) {
    font-size: 10px;
    line-height: 10px;
  }
`;
const ComonContainer = styled.div`
  display: flex;
  @media all and (max-width: 480px) {
    flex-wrap: wrap;
  }
`;
const LeftContainer = styled.div`
  width: 66%;
  margin-top: 96px;
  @media all and (max-width: 480px) {
    margin-top: 0;
  }
`;
const RightContainer = styled.div`
  text-align: left;
  width: 34%;
  @media all and (max-width: 1080px) {
    width: 40%;
  }
  @media all and (max-width: 640px) {
    margin-bottom: 20px;
  }
  @media all and (max-width: 480px) {
    width: 76%;
    margin: 0 auto;
  }
`;
const IconMain = styled.div`
  display: flex;
  gap: 9px;
  padding-left: 42px;
`;
const IconContainer = styled.div`
  padding: 7px 7px;
  background-color: #f6f6f6;
  border-radius: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  @media all and (max-width: 640px) {
    width: 14px;
    height: 14px;
  }
`;
const Icon = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;
const DownloadText = styled.h3`
  font-size: 24px;
  color: #f6f6f6;
  font-family: "poppinsbold";
  font-weight: 700;
  @media all and (max-width: 980px) {
    font-size: 21px;
    margin-bottom: 10px;
  }
  @media all and (max-width: 640px) {
    font-size: 18px;
  }
  @media all and (max-width: 640px) {
    margin-top: 52px;
  }
  @media all and (max-width: 480px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;
const ImageContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  @media all and (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

const ImageContainer = styled.div`
  margin-right: 10px;
  @media all and (max-width: 980px) {
    width: 25px;
  }
  @media all and (max-width: 480px) {
    width: 15px;
  }
`;
const Image = styled.img`
  display: block;
  width: 100%;
`;
const GooglePlay = styled.div`
  margin-right: 20px;
`;
const Span = styled.span`
  font-family: "poppinsregular";
  color: #ffffff;
  font-size: 9px;
  @media all and (max-width: 980px) {
    display: none;
  }
`;
const Sub = styled.p`
  margin: 0;
  font-family: "poppinsregular";
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  @media all and (max-width: 980px) {
    font-size: 11px;
  }
`;
const CategoryDiv = styled.div`
  width: 90%;
  margin: 0 auto;
  border-top: 1px solid #bebcbd;
  border-bottom: 1px solid #bebcbd;
`;
const CategoryText = styled.h3`
  text-align: left;
  color: #f6f6f6;
  font-size: 24px;
  margin-left: 85px;
  font-family: "poppinsmedium";
  font-weight: 700;
  @media all and (max-width: 980px) {
    margin-left: 0;
    font-size: 20px;
  }
  @media all and (max-width: 640px) {
    font-size: 17px;
  }
`;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 44px;
`;

const DropdownContainer = styled.div`
  cursor: pointer;
  @media all and (max-width: 640px) {
    width: 16px;
  }
`;
const DropdownImg = styled.img`
  display: block;
  width: 100%;
`;
const Copyright = styled.div`
  padding: 40px 0;
  @media all and (max-width: 640px) {
    padding: 8px 0;
  }
`;
const CopyText = styled.span`
  color: #ffffff;
  font-size: 16px;
  font-family: "poppinsmedium";
  font-weight: 700;
  @media all and (max-width: 980px) {
    font-size: 12px;
  }
  @media all and (max-width: 640px) {
    font-size: 8px;
  }
`;
