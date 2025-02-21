import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import close from "../../assets/images/close.svg";
import menubar from "../../assets/images/menu-bar.svg";
import products from "../helpers/Products.json";




const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [Modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleModal = () => {
    if (token) {
      handleLogout();
    } else {
      setModal(!Modal);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  useEffect(() => {
    if (isOpen || Modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen, Modal]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful:", data);
        setModal(false);
        localStorage.setItem("token", data.token);
      } else {
        console.error("Login failed:", data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const handleclick=()=>{
    navigate(`/cart`);
    

  }

  

  return (
    <>
      <Wrapper>
        <Headers>
          <LogoContainer>
            <Logo
              src={require("../../assets/images/Logo.svg").default}
              alt="logo"
            />
          </LogoContainer>
          <Categories>
            <Category>Shop</Category>
            <Category>Men</Category>
            <Category>Women</Category>
            <Category>Combos</Category>
            <Category>Joggers</Category>
          </Categories>
          <RightDiv>
            <Form>
              <SearchContainer>
                <SearchImgContainer>
                  <SearchImage
                    src={require("../../assets/images/search.svg").default}
                  />
                </SearchImgContainer>
                <StyledInput type="text" placeholder="Search" />
              </SearchContainer>
            </Form>
            <RightContainer>
              <ImageContainer>
                <Wishlist
                  src={require("../../assets/images/wishlist.svg").default}
                />
              </ImageContainer>

              <ImageContainer onClick={toggleModal}>
                <Account
                  src={
                    token
                      ? require("../../assets/images/logout-svgrepo-com.svg")
                          .default
                      : require("../../assets/images/account.svg").default
                  }
                />
              </ImageContainer>
              
                <ImageContainer  onClick={(e) => token ? handleclick(e) : alert("Please log in")}>
                  <Cart src={require("../../assets/images/cart.svg").default} />
                </ImageContainer>
              
            </RightContainer>
          </RightDiv>
          <MenuBar>
            <Menu onClick={toggleMenu}>
              <MenuImg src={menubar} alt="menubar" />
            </Menu>
            <MenuItem className={`${isOpen ? "is-open" : ""}`}>
              <MenuList>
                <LinkItem>
                  <Status>
                    <Item>Account</Item>
                  </Status>
                  <Status>
                    <Item>Wishlist</Item>
                  </Status>
                  <Status>
                    <Item>Your Cart</Item>
                  </Status>
                </LinkItem>
                <CloseBar onClick={toggleMenu}>
                  <Close src={close} alt="close" />
                </CloseBar>
              </MenuList>
            </MenuItem>
          </MenuBar>
        </Headers>
      </Wrapper>
      {Modal && (
        <ModalOverlay>
          <ModalContent>
            <LoginHeading>Login</LoginHeading>
            <LoginForm>
              <EmailDiv>
                <EmailLabel>Username:</EmailLabel>
                <EmailInput
                  type="text"
                  placeholder="Enter your username"
                  required
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                />
              </EmailDiv>
              <PasswDiv>
                <PassLabel>Password:</PassLabel>
                <PassInput
                  type="password"
                  placeholder="Enter your password"
                  required
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </PasswDiv>
              <SubmitButton type="submit" onClick={(e) => handleSubmit(e)}>
                Submit
              </SubmitButton>
              <CloseButton type="button" onClick={toggleModal}>
                Close
              </CloseButton>
            </LoginForm>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const Headers = styled.div`
  display: flex;
  align-items: center;
  padding: 18px 0;
  justify-content: space-between;
  @media all and (max-width: 540px) {
    padding: 8px 0;
  }
`;
const LogoContainer = styled.div`
  width: 91px;
  cursor: pointer;
  @media all and (max-width: 1080px) {
    width: 70px;
  }
`;
const Logo = styled.img`
  display: block;
  width: 100%;
`;
const Categories = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  @media all and (max-width: 1280px) {
    gap: 2rem;
  }
  @media all and (max-width: 1080px) {
    gap: 24px;
  }
  @media all and (max-width: 640px) {
    gap: 9px;
  }
  @media all and (max-width: 540px) {
    display: none;
  }
`;
const Category = styled.span`
  font-family: "poppinsregular";
  font-size: 16px;
  cursor: pointer;
  color: #807d7e;
  @media all and (max-width: 1080px) {
    font-size: 15px;
  }
  @media all and (max-width: 768px) {
    font-size: 12px;
  }
  &:hover {
    font-weight: 700;
    color: #3c4242;
  }
`;
const RightDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 11rem;
  @media all and (max-width: 1080px) {
    gap: 5px;
  }
`;
const Form = styled.div`
  display: flex;
  background: #f6f6f6;
  border-radius: 8px;
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  gap: 12px;
  @media all and (max-width: 1280px) {
    padding: 12px 0;
  }
  @media all and (max-width: 1080px) {
    gap: 0;
  }
  @media all and (max-width: 540px) {
    padding: 12px 50px;
  }
  @media all and (max-width: 540px) {
    gap: 5px;
  }
`;
const SearchImgContainer = styled.div`
  width: 20px;
  height: 20px;
  @media all and (max-width: 1080px) {
    width: 12px;
    height: 12px;
  }
  @media all and (max-width: 540px) {
    width: 17px;
    height: 17px;
  }
`;
const SearchImage = styled.img`
  display: block;
  width: 100%;
`;
const StyledInput = styled.input`
  border: none;
  padding: 6px 5px;
  font-size: 14px;
  color: #807d7e;
  @media all and (max-width: 1280px) {
    font-size: 12px;
  }
  @media all and (max-width: 1080px) {
    width: 90px;
  }
  @media all and (max-width: 640px) {
    width: 70px;
  }
  @media all and (max-width: 540px) {
    width: 100%;
  }
`;
const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3.5rem;
  @media all and (max-width: 1280px) {
    gap: 1.5rem;
  }
  @media all and (max-width: 640px) {
    display: none;
  }
`;
const ImageContainer = styled.div`
  cursor: pointer;
  width: 18px;
  background: #f6f6f6;
  @media all and (max-width: 1280px) {
    width: 16px;
  }
`;
const Wishlist = styled.img`
  display: block;
  width: 100%;
`;
const Account = styled.img`
  display: block;
  width: 100%;
`;
const Cart = styled.img`
  display: block;
  width: 100%;
`;

const MenuBar = styled.div`
  display: none;
  @media all and (max-width: 640px) {
    display: block;
  }
`;
const Menu = styled.div`
  width: 100%;
`;
const MenuImg = styled.img`
  width: 100%;
  display: block;
`;
const MenuItem = styled.div`
  display: none;
  &.is-open {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    z-index: 9999;
  }
`;
const MenuList = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const LinkItem = styled.div`
  width: 70%;
`;
const Status = styled.div``;
const Item = styled.h3`
  font-size: 16px;
  font-family: "poppinsregular";
  margin-bottom: 28px;
  border-bottom: 1px solid #e5e7eb;
  text-align: left;
  &:hover {
    font-weight: 700;
  }
`;
const CloseBar = styled.div`
  width: 34px;
`;
const Close = styled.img`
  width: 100%;
  display: block;
`;

const LoginHeading = styled.div`
  font-size: 24px;
  font-family: "poppinsbold";
  text-align: center;
  margin-bottom: 20px;
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const EmailDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const EmailLabel = styled.label`
  font-size: 16px;
  font-family: "poppinsregular";
  text-align: left;
  padding-left: 10px;
`;
const EmailInput = styled.input`
  border: none;
  padding: 10px;
  font-size: 16px;
`;
const PasswDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const PassLabel = styled.label`
  font-size: 16px;
  font-family: "poppinsregular";
  text-align: left;
  padding-left: 10px;
`;
const PassInput = styled.input`
  border: none;
  padding: 10px;
  font-size: 16px;
`;
const SubmitButton = styled.button`
  background: #3c4242;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;
const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: #807d7e;
  font-size: 16px;
  cursor: pointer;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;
