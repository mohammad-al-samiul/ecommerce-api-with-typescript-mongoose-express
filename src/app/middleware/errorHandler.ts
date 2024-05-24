import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (res.headersSent) {
    return next(err);
  }

  if (err.name === "ValidationError") {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
  //Insufficient quantity
  if (err.message.includes("Insufficient quantity")) {
    return res.status(400).json({
      success: false,
      message: "Insufficient quantity available in inventory",
    });
  }

  if (err.message.includes("not found")) {
    return res.status(404).json({
      success: false,
      message: err.message,
    });
  }

  return res.status(500).json({
    success: false,
    message: "An unexpected error occurred",
  });
};
