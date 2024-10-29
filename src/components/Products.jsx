import React from "react";
import { popularProducts } from "../data";
import ProductItem from "./ProductItem";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
