import Cart from "../models/cartModel";
import { NextResponse } from "next/server";

export const addToCart = async (req) => {
  const body = await req.json();

  const newCart = await Cart.create(body);

  return NextResponse.json({
    message: "Product added successfully",
    success: true,
    cartItem: newCart,
  });
};
