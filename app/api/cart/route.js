import { addToCart } from "../../controller/cartController.js";
import connectDb from "../../utils/db.js";

export async function POST(req) {
  await connectDb();
  return addToCart(req);
}
