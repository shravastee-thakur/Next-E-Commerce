import Product from "../models/productModel.js";
import { NextResponse } from "next/server";

//add product
export const createProduct = async (req) => {
  const body = await req.json();

  const newProduct = await Product.create(body);

  return NextResponse.json({
    message: "Product added successfully",
    newProduct,
  });
};

export const getProducts = async (req) => {
  const product = await Product.find();

  return NextResponse.json({
    message: "All products fetched successfully",
    success: true,
    product,
  });
};
