import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import orderValidationSchema from "./order.validation";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const zodParseData = orderValidationSchema.parse(orderData);
    const result = await OrderServices.createOrder(zodParseData);
    res.status(201).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error create order!",
      data: null,
    });
  }
};

const getAllOrder = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.getAllOrder();
    res.status(200).json({
      success: true,
      message: "Orders fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetch order!",
      data: null,
    });
  }
};

export const OrderController = {
  createOrder,
  getAllOrder,
};
