import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { useParams,useNavigate } from "react-router-dom";
import Products from "../../../helpers/Products.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SinglePage = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState([]);
  const [zoomStyle, setZoomStyle] = useState({ display: "none" });
  const [zoomBackground, setZoomBackground] = useState("");
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  

  const fetchProduct = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const details = Object.values(Products.products)
    .flat()
    .find((item) => item.id.toString() === id);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (product) {
      setSelectedImage(product?.image);
      setZoomBackground(`url(${product?.image})`);
    }
    window.scrollTo(0, 0);
  }, [product]);

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleMouseMove = (e) => {
    const { top, left, width, height } = e.target.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const xPercent = (x / width) * 100;
    const yPercent = (y / height) * 100;

    setZoomStyle({
      display: "block",
      top: y - 75 + "px",
      left: x - 75 + "px",
      backgroundPosition: `${xPercent}% ${yPercent}%`,
    });
  };
  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    
    // Store only the product ID
    if (!existingCart.includes(product.id)) {
      existingCart.push(product.id); 
      localStorage.setItem("cartItems", JSON.stringify(existingCart));
    }
    alert("Product added to cart!");
  };
  const handleMouseLeave = () => {
    setZoomStyle({ display: "none" });
  };

  const handleClick = (item) => {
    setSelectedImage(item);
    setZoomBackground(`url(${item})`);
  };
  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <ArrowContainer onClick={onClick}>
        <Arrow src={require("../../../../assets/images/arrowdown.svg").default} />
      </ArrowContainer>
    );
  };
  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <ArrowContainerup onClick={onClick}>
        <Arrow src={require("../../../../assets/images/arrowup.svg").default} />
      </ArrowContainerup>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const token = localStorage.getItem("token")
 

  return (
    <>
      <DividerTop></DividerTop>
      <Wrapper>
        <MainContainer>
          <LeftContainer>
            <LeftDiv>
              <ImgDiv>
                <StyledSlider {...settings}>
                  {details?.detail_images?.map((item, index) => (
                    <SubImgContainer
                      key={index}
                      onClick={() => handleClick(item)}
                    >
                      <SubImg src={item} alt="subimage" />
                    </SubImgContainer>
                  ))}
                </StyledSlider>
              </ImgDiv>
            </LeftDiv>
            <RightDiv>
              <ImageContainer
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <Image src={selectedImage} alt="Product" />
                <ZoomWindow style={zoomStyle} background={zoomBackground} />
              </ImageContainer>
            </RightDiv>
          </LeftContainer>
          <RightContainer>
            <Categories>
              <CategoryContent>Shop</CategoryContent>
              <RightArrowContainer>
                <ArrowImage
                  src={
                    require("../../../../assets/images/right-arrow-light.svg")
                      .default
                  }
                />
              </RightArrowContainer>
              <CategoryContent>Women</CategoryContent>
              <RightArrowContainer>
                <ArrowImage
                  src={
                    require("../../../../assets/images/right-arrow-light.svg")
                      .default
                  }
                />
              </RightArrowContainer>
              <CategoryContent>Top</CategoryContent>
            </Categories>
            <Heading>{product?.title}</Heading>
            <RatingDiv>
              <RatingImgContainer>
                <RatingImg
                  src={require("../../../../assets/images/review5.svg").default}
                />
              </RatingImgContainer>
              <RatingSpan>{product?.rating.rate}</RatingSpan>
              <CommentImgContainer>
                <CommentImg
                  src={require("../../../../assets/images/message.svg").default}
                />
              </CommentImgContainer>
              <CommentSpan>{product?.rating.count}</CommentSpan>
            </RatingDiv>
            <SizeContainer>
              <SizeSubDiv>
                <SelectSize>Select Size</SelectSize>
                <SelectGuide>SelectGuide</SelectGuide>
                <RightArrowDiv>
                  <RightArrow
                    src={
                      require("../../../../assets/images/arrow-right.svg")
                        .default
                    }
                  />
                </RightArrowDiv>
              </SizeSubDiv>
              <SelectionSize>
                <Sizes>
                  <Size>XS</Size>
                </Sizes>
                <Sizes>
                  <Size>S</Size>
                </Sizes>
                <Sizes>
                  <Size>M</Size>
                </Sizes>
                <Sizes>
                  <Size>L</Size>
                </Sizes>
                <Sizes>
                  <Size>XL</Size>
                </Sizes>
              </SelectionSize>
            </SizeContainer>
            <ColorsContainer>
              <ColorsAvailableText>Colours Available</ColorsAvailableText>
              <Colors>
                <BlackContainer>
                  <Black></Black>
                </BlackContainer>
                <BlackContainer>
                  <Yellow></Yellow>
                </BlackContainer>
                <BlackContainer>
                  <Pink></Pink>
                </BlackContainer>
                <BlackContainer>
                  <Brown></Brown>
                </BlackContainer>
              </Colors>
            </ColorsContainer>
            <BuyContainer>
              <AddCartDiv>

                <CartContainer onClick={(e)=> token? handleAddToCart(e) : alert("Please log in")}>
                  <CartImgContainer>
                    <CartImg
                      src={
                        require("../../../../assets/images/cart-1.svg").default
                      }
                    />
                  </CartImgContainer>
                  <CartText>Add to cart</CartText>
                </CartContainer>
              </AddCartDiv>
              <PriceDiv>
                <Price>${product?.price}</Price>
              </PriceDiv>
            </BuyContainer>
            <Divider></Divider>
            <DetailsDiv>
              <PaymentandSize>
                <PaymentContainer>
                  <PaymentImgContainer>
                    <PaymetImg
                      src={
                        require("../../../../assets/images/credit card.svg")
                          .default
                      }
                    />
                  </PaymentImgContainer>
                  <PaymentText>Secure payment</PaymentText>
                </PaymentContainer>
                <SizeFitContainer>
                  <SizeImgContainer>
                    <SizeImg
                      src={
                        require("../../../../assets/images/Size&Fit.svg")
                          .default
                      }
                    />
                  </SizeImgContainer>
                  <PaymentText>Size & Fit</PaymentText>
                </SizeFitContainer>
              </PaymentandSize>
              <ShippingandReturn>
                <ShippingContainer>
                  <ShippingsImgContainer>
                    <ShippingsImg
                      src={
                        require("../../../../assets/images/truck.svg").default
                      }
                    />
                  </ShippingsImgContainer>
                  <PaymentText>Free shipping</PaymentText>
                </ShippingContainer>
                <ReturnsContain>
                  <ReturnsImgContainer>
                    <ReturnsImg
                      src={
                        require("../../../../assets/images/Free-Shipping&Returns.svg")
                          .default
                      }
                    />
                  </ReturnsImgContainer>
                  <PaymentText>Free Shipping & Returns</PaymentText>
                </ReturnsContain>
              </ShippingandReturn>
            </DetailsDiv>
          </RightContainer>
        </MainContainer>
      </Wrapper>
    </>
  );
};




export default SinglePage;

const StyledSlider = styled(Slider)`
  .slick-slide {
    margin-bottom: 18px;
  }
  .slick-list {
    height: 300px;
  }
`;

const ArrowContainer = styled.div`
  background-color: #3f4646;
  color: #ffffff;
  padding: 5px;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  top: 70px;
  left: 32px;
`;
const ArrowContainerup = styled.div`
  background-color: #ffffff;
  padding: 5px;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  top: 340px;
  left: 32px;
`;

const Arrow = styled.img`
  width: 16px;
`;
const DividerTop = styled.div`
  border: 0.5px solid #bebcbd;
  margin-bottom: 18px;
`;
const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const MainContainer = styled.div`
  display: flex;
  @media all and (max-width: 980px) {
    flex-wrap: wrap;
  }
`;
const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  @media all and (max-width: 1280px) {
    height: 50%;
  }
  @media all and (max-width: 980px) {
    width: 100%;
    margin-bottom: 25px;
  }
`;
const LeftDiv = styled.div`
  width: 30%;
  @media all and (max-width: 980px) {
    width: 23%;
  }
  @media all and (max-width: 540px) {
    height: 392px;
  }
  @media all and (max-width: 360px) {
    display: none;
  }
`;
const ImgDiv = styled.div`
  width: 82%;
  @media all and (max-width: 1280px) {
    width: 100px;
  }
  @media all and (max-width: 480px) {
    width: 80px;
  }
  @media all and (max-width: 380px) {
    width: 60px;
  }
`;
const SubImgContainer = styled.div`
  width: 93% !important;
  height: 68px;
  margin-bottom: 22px;
`;
const SubImg = styled.img`
  display: block;
  width: 100%;
  border-radius: 10px;
  height: 80px;
`;
const RightDiv = styled.div`
  display: flex;
  align-items: center;
`;

const ZoomWindow = styled.div`
  width: 150px;
  height: 150px;
  position: absolute;
  border: 2px solid #3f4646;
  border-radius: 10px;
  background-image: ${(props) => props.background};
  background-repeat: no-repeat;
  background-size: 200%;
  pointer-events: none;
`;
const ImageContainer = styled.div`
  width: 520px;
  margin-left: 20px;
  position: relative;
  @media all and (max-width: 1280px) {
    width: 360px;
  }
  @media all and (max-width: 540px) {
    width: 290px;
  }
  @media all and (max-width: 480px) {
    width: 250px;
  }
  @media all and (max-width: 480px) {
    margin-left: 35px;
  }
  @media all and (max-width: 380px) {
    margin-left: 28px;
  }
  @media all and (max-width: 320px) {
    margin-left: 25px;
  }
`;
const Image = styled.img`
  display: block;
  width: 100%;
`;
const RightContainer = styled.div`
  width: 45%;
  padding: 30px 70px 0;
  text-align: left;
  @media all and (max-width: 1280px) {
    padding: 0 44px 0;
  }
  @media all and (max-width: 980px) {
    width: 100%;
    padding: 10px 0;
  }
`;
const Categories = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  @media all and (max-width: 980px) {
    display: none;
  }
`;
const CategoryContent = styled.span`
  color: #807d7e;
  font-size: 14px;
  font-family: "poppinsregular";
  cursor: pointer;
`;
const RightArrowContainer = styled.div``;
const ArrowImage = styled.img`
  display: block;
  width: 100%;
`;
const Heading = styled.h3`
  font-size: 34px;
  color: #3c4242;
  font-family: "poppinsmedium";
  line-height: 47px;
  width: 100%;
  @media all and (max-width: 1280px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;
const RatingDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;
const RatingImgContainer = styled.div`
  width: 30%;
`;
const RatingImg = styled.img`
  display: block;
  width: 100%;
`;
const RatingSpan = styled.span`
  font-family: "poppinsregular";
  font-size: 15px;
  color: #807d7e;
  @media all and (max-width: 360px) {
    font-size: 12px;
  }
`;
const CommentImgContainer = styled.div`
  width: 18px;
`;
const CommentImg = styled.img`
  display: block;
  width: 100%;
`;
const CommentSpan = styled.span`
  font-family: "poppinsregular";
  font-size: 15px;
  color: #807d7e;
  @media all and (max-width: 360px) {
    font-size: 12px;
  }
`;
const SizeContainer = styled.div`
  margin-top: 35px;
  margin-bottom: 25px;
  @media all and (max-width: 1280px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;
const SizeSubDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  @media all and (max-width: 1280px) {
    margin-bottom: 20px;
  }
`;
const SelectSize = styled.span`
  font-size: 15px;
  color: #807d7e;
  margin-right: 20px;
  font-family: "poppinsregular";
  cursor: pointer;
  &:hover {
    color: #3f4646;
    font-weight: 600;
  }
`;
const SelectGuide = styled.span`
  font: 15px;
  color: #807d7e;
  margin-right: 15px;
  font-family: "poppinsregular";
  cursor: pointer;

  &:hover {
    color: #3f4646;
    font-weight: 600;
  }
`;
const RightArrowDiv = styled.div`
  width: 14px;
`;
const RightArrow = styled.img`
  display: block;
  width: 100%;
`;
const SelectionSize = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Sizes = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 12px;
  border: 1.5px solid #bebcbd;
  align-content: center;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #3c4242;
    color: #ffffff;
  }
`;
const Size = styled.span`
  font-size: 12px;
  font-family: "poppinsregular";
  color: #3c4242;
  padding: 8px 12px;
  &:hover {
    color: #ffffff;
  }
`;
const ColorsContainer = styled.div``;
const ColorsAvailableText = styled.p`
  font-family: "poppinsmedium";
  font-size: 16px;
  color: #3f4646;
`;
const Colors = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  height: 40px;
`;
const BlackContainer = styled.div`
  padding: 3px 3px;
  border-radius: 50%;
  &:hover {
    border: 1px solid #3f4646;
  }
`;

const Black = styled.div`
  width: 30px;
  height: 30px;
  background-color: #3f4646;
  border-radius: 50%;
`;
const Yellow = styled.div`
  width: 30px;
  height: 30px;
  background-color: #edd146;
  border-radius: 50%;
`;
const Pink = styled.div`
  width: 30px;
  height: 30px;
  background-color: #eb84b0;
  border-radius: 50%;
`;
const Brown = styled.div`
  width: 30px;
  height: 30px;
  background-color: #9c1f35;
  border-radius: 50%;
`;
const BuyContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 36px;
  gap: 40px;
  @media all and (max-width: 1280px) {
    margin-top: 25px;
  }
  @media all and (max-width: 360px) {
    flex-wrap: wrap;
    flex-direction: column;
    align-items: baseline;
    gap: 10px;
  }
`;
const AddCartDiv = styled.div`
  padding: 10px 50px;
  border-radius: 8px;
  background-color: #8a33fd;
  cursor: pointer;
  @media all and (max-width: 1280px) {
    padding: 10px 35px;
  }
  @media all and (max-width: 480px) {
    padding: 10px 20px;
  }
`;
const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const CartImgContainer = styled.div`
  width: 15px;
`;
const CartImg = styled.img`
  display: block;
  width: 100%;
`;
const CartText = styled.p`
  color: #ffffff;
  font-family: "poppinsregular";
  margin: 0;
  font-size: 15px;
  @media all and (max-width: 1280px) {
    font-size: 13px;
  }
`;
const PriceDiv = styled.div`
  padding: 10px 50px;
  border: 1px solid #3c4242;
  border-radius: 8px;
  cursor: pointer;
  @media all and (max-width: 1280px) {
    padding: 9px 35px;
  }
`;
const Price = styled.p`
  font-family: "poppinsregular";
  font-size: 15px;
  font-weight: 700;
  margin: 0;
  @media all and (max-width: 1280px) {
    font-size: 13px;
  }
`;
const Divider = styled.div`
  border-bottom: 1px solid #bebcbd;
  margin-top: 37px;
`;
const DetailsDiv = styled.div`
  padding-left: 15px;
  margin-top: 40px;
  @media all and (max-width: 1280px) {
    margin-top: 20px;
  }
  @media all and (max-width: 980px) {
    padding-left: 0;
  }
`;
const PaymentandSize = styled.div`
  display: flex;
  align-items: center;
  gap: 68px;
  margin-bottom: 20px;
  @media all and (max-width: 1280px) {
    flex-wrap: wrap;
    flex-direction: column;
    gap: 0;
    align-items: baseline;
    margin-bottom: 0;
  }
`;
const PaymentContainer = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
`;
const PaymentImgContainer = styled.div`
  width: 16px;
  margin-right: 29px;
`;
const PaymetImg = styled.img`
  display: block;
  width: 100%;
`;
const PaymentText = styled.div`
  font-size: 14px;
  font-family: "poppinsregular";
  color: #3c4242;
`;
const SizeFitContainer = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
`;
const SizeImgContainer = styled.div`
  width: 16px;
  margin-right: 29px;
`;
const SizeImg = styled.img`
  display: block;
  width: 100%;
`;

const ShippingandReturn = styled.div`
  display: flex;
  align-items: center;
  gap: 92px;
  @media all and (max-width: 1280px) {
    flex-wrap: wrap;
    flex-direction: column;
    gap: 0;
    align-items: baseline;
  }
`;
const ShippingContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const ShippingsImgContainer = styled.div`
  width: 16px;
  margin-right: 29px;
`;
const ShippingsImg = styled.img`
  display: block;
  width: 100%;
`;
const ReturnsContain = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const ReturnsImgContainer = styled.div`
  width: 16px;
  margin-right: 29px;
`;
const ReturnsImg = styled.img`
  display: block;
  width: 100%;
`;
