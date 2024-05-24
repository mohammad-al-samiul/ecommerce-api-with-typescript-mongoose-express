import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import ProductValidationSchema from "./product.validation";

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    //validation with zod
    const zodParseData = ProductValidationSchema.parse(productData);

    const result = await ProductServices.createProduct(zodParseData);
    res.status(201).json({
      success: true,
      message: "Products created successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Error Create Product",
      error: error.message,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  const searchTerm = req.query.searchTerm as string;
  if (searchTerm) {
    try {
      const result = await ProductServices.getProductBySearchTerm(searchTerm);

      if (result.length === 0) {
        return res.status(404).send({
          success: false,
          message: `${searchTerm} not found`,
        });
      }
      res.status(200).json({
        success: true,
        message: `Products matching search term '${searchTerm}' fetched successfully!`,
        data: result,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Error Search Product",
        error: error.message,
      });
    }
  } else {
    try {
      const result = await ProductServices.getAllProducts();
      res.status(200).json({
        success: true,
        message: "Products fetched successfully!",
        data: result,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Error Find all Product",
        error: error.message,
      });
    }
  }
};

const getProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await ProductServices.getProductById(id);
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Error Find the single Product",
      error: error.message,
    });
  }
};

const updateProductById = async (req: Request, res: Response) => {
  try {
    const updatedProduct = req.body;
    const { productId } = req.params;

    const result = await ProductServices.updatedProduct(
      productId,
      updatedProduct
    );
    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (error: any) {
    if (error.message === "Product not found") {
      return res.status(404).send({
        success: false,
        message: error.message,
      });
    }
    res.status(500).json({
      success: false,
      message: "Error Updating Product",
      error: error.message,
    });
  }
};

const deleteProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.deleteProductById(productId);
    res.status(200).json({
      success: true,
      message: "Products deleted successfully!",
      data: null,
    });
  } catch (error: any) {
    if (error.message === "Product not found") {
      return res.status(404).send({
        success: false,
        message: error.message,
      });
    }
    res.status(500).json({
      success: false,
      message: "Error Deleting Product",
      error: error.message,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,

  getProductById,
  updateProductById,
  deleteProductById,
};
