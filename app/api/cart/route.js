import {
  addToCart,
  clearCart,
  getCartItems,
} from "../../controller/cartController.js";
import connectDb from "../../utils/db.js";

export async function POST(req) {
  await connectDb();
  return addToCart(req);
}

export async function GET(req) {
  await connectDb();
  return getCartItems(req);
}

export async function DELETE(req) {
  await connectDb();
  return clearCart(req);
}
