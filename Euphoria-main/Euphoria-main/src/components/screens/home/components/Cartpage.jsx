import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Cartpage = () => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Initialize loading as true

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        const fetchedItems = [];
  
        if (storedItems.length === 0) {
          setLoading(false); // No items in cart, stop loading
          return;
        }
  
        for (let id of storedItems) {
          const response = await fetch(`https://fakestoreapi.com/products/${id}`);
          
          // ✅ Check if response is valid and not empty
          if (response.ok) {
            const text = await response.text();
            if (text) {
              const data = JSON.parse(text);
              fetchedItems.push(data);
            } else {
              console.warn(`Empty response for product ID: ${id}`);
            }
          } else {
            console.warn(`Failed to fetch product ID: ${id}`);
          }
        }
  
        setProduct(fetchedItems);
      } catch (err) {
        setError("Failed to load products");
        console.error("Fetch Error:", err);
      } finally {
        setLoading(false); // Stop loading after fetching
      }
    };
  
    fetchCartItems();
  }, []);
  

  return (
    <MainContainer>
      <Subcontainer>
        <Colorcontainer></Colorcontainer>
        <Heading>Cart Items</Heading>
      </Subcontainer>

      {loading && <p>Loading product...</p>} {/* ✅ Loading state */}
      {error && <p>Error: {error}</p>}       {/* ✅ Error handling */}
      <Product>
      {product.length > 0 ? (
        product.map((item) => (
          
           <ProductCard key={item.id}>
            <ImageContainer>
              <ProductImage src={item.image} alt={item.title} />
              <HeartIcon>♡</HeartIcon>
            </ImageContainer>

            <ProductInfo>
              <ProductTitle>{item.title}</ProductTitle>
              <ProductBrand>{item.category}</ProductBrand>
              <PriceTag>${item.price}</PriceTag>
            </ProductInfo>
           </ProductCard>
        
        ))
      ) : (
        !loading && <p>Your cart is empty.</p>
      )}
      </Product>
    </MainContainer>
  );
};

export default Cartpage;

const MainContainer = styled.div`

  
  width: 90%;
  margin: 0 auto;
`;
const Product =styled.div`
  display:flex;
  justify-content:space-between;
`;

const ProductCard = styled.div`
  width: 280px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: #fff;
  text-align: left;
  font-family: Arial, sans-serif;
  position: relative;
  margin-bottom: 20px;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
`;

const HeartIcon = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 22px;
  cursor: pointer;
  color: #888;
`;

const ProductInfo = styled.div`
  padding: 16px;
`;

const ProductTitle = styled.h3`
  font-size: 16px;
  color: #333;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProductBrand = styled.p`
  font-size: 12px;
  color: #888;
  margin: 4px 0;
`;

const PriceTag = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 6px 12px;
  border: 1px solid #ccc;
  font-weight: bold;
  width: fit-content;
  margin-top: 8px;
`;

const Colorcontainer = styled.div`
  width: 6px;
  height: 30px;
  background-color: #8A33FD;
  border-radius: 10px;
`;

const Heading = styled.div`
  font-size: 27px;
  font-weight: 700;
  color: #191919;
  margin-left: 20px;
`;

const Subcontainer = styled.div`
  display: flex;
  align-self: flex-start;
  margin-bottom: 50px;
  margin-top:80px
  
`;
