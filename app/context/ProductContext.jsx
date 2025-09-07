"use client";
import { React, createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);

  const fetchAllProducts = async () => {
    const api = await axios.get(`${API_BASE_URL}/product`);
    setProducts(api.data.product);
    setData(api.data.product);
  };

  // console.log(products);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ data, products }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);

export default ProductContext;
