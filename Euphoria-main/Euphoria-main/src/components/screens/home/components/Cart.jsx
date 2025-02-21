import React from "react";
import Header from "../../../includes/Header";
import Cartpage from "./Cartpage";
import Footer from "../../../includes/Footer";
import styled from "styled-components";

const Cart = ()=>{
  return(
    <>
     <Maincontainer>
       <Header/>
       <Cartpage/>
       <Footer/>
     </Maincontainer>
    </>
  )
}
export default Cart;

const Maincontainer = styled.div``;