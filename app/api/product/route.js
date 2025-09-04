import connectDb from "../../utils/db.js";
import {
  createProduct,
  getProducts,
} from "../../controller/productController.js";

//http://localhost:3000/api/product
export async function POST(req) {
  await connectDb();
  return createProduct(req);
}

export async function GET(req) {
  await connectDb();
  return getProducts();
} 
