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

export const getCartItems = async (req) => {
  const cartItems = await Cart.find();

  return NextResponse.json({
    message: "Fetched all cart items",
    success: true,
    cartItems,
  });
};

export const clearCart = async (req) => {
  await Cart.deleteMany({});
  return NextResponse.json({
    message: "No item in the cart",
    success: true,
  });
};
