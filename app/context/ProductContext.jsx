"use client";
import { React, createContext, useContext, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

  const fetchAllProducts = async () => {
    const api = await axios.get(`${API_BASE_URL}/product`);
    console.log(api);
  };

  useEffect(() => {
    fetchAllProducts()
  },[])



  return (
    <ProductContext.Provider value={{}}>{children}</ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);

export default ProductContext;
