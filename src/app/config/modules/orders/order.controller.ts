import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import orderValidationSchema from "./order.validation";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const { productId, quantity } = req.body;
    const zodParseData = orderValidationSchema.parse(orderData);
    const result = await OrderServices.createOrder(
      zodParseData,
      productId,
      quantity
    );
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
    const email = req.query.email as string;
    if (!email) {
      const result = await OrderServices.getAllOrder();
      res.status(200).json({
        success: true,
        message: "Orders fetched successfully!",
        data: result,
      });
    } else {
      const orders = await OrderServices.getOrderByEmail(email);
      res.status(200).json({
        success: true,
        message: "Orders fetched successfully for user email!",
        data: orders,
      });
    }
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
