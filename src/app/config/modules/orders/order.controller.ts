import { NextFunction, Request, Response } from "express";
import { OrderServices } from "./order.service";
import orderValidationSchema from "./order.validation";

const createOrder = async (req: Request, res: Response, next: NextFunction) => {
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
  } catch (error: any) {
    next(error);
  }
};

const getAllOrder = async (req: Request, res: Response, next: NextFunction) => {
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
      if (orders.length > 0) {
        res.status(200).json({
          success: true,
          message: `Orders fetched successfully for user ${email}!`,
          data: orders,
        });
      }
    }
  } catch (error) {
    next(error);
  }
};

export const OrderController = {
  createOrder,
  getAllOrder,
};
