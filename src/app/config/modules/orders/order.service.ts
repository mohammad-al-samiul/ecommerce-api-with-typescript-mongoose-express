import { Product } from "../product/product.model";
import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrder = async (
  payload: TOrder,
  productId: string,
  quantity: number
) => {
  const product = await Product.findById(productId);

  if (!product) {
    throw new Error("Product not found");
  }

  if (quantity > product.inventory.quantity) {
    throw new Error("Insufficient quantity available in inventory");
  }

  const result = await Order.create(payload);

  product.inventory.quantity -= quantity;
  product.inventory.inStock = product.inventory.quantity > 0;
  await product.save();

  return result;
};

const getAllOrder = async () => {
  const result = await Order.find({});
  return result;
};

const getOrderByEmail = async (email: string) => {
  const result = await Order.find({ email });
  return result;
};
export const OrderServices = {
  createOrder,
  getAllOrder,
  getOrderByEmail,
};
