import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProduct = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getAllProducts = async () => {
  const result = await Product.find({});
  return result;
};

const getProductById = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const updatedProduct = async (productId: string, payload: TProduct) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(productId, payload, {
      new: true,
      runValidators: true,
    });
    if (!updatedProduct) {
      throw new Error("Product not found");
    }
    return updatedProduct;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const deleteProductById = async (productId: string) => {
  try {
    const product = await Product.findById(productId);
    if (!product) {
      throw new Error("Product not found");
    }
    const result = await Product.findByIdAndDelete(productId);
    return result;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const ProductServices = {
  createProduct,
  getAllProducts,
  getProductById,
  updatedProduct,
  deleteProductById,
};
