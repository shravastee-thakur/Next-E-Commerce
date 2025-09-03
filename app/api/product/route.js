import connectDb from "../../utils/db.js";
import { createProduct } from "../../controller/productController.js";

export async function POST(req) {
  await connectDb();
  return createProduct(req);
}
