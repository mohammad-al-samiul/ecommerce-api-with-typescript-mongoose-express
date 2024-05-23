import mongoose from "mongoose";
import {
  TProduct,
  TProductInventory,
  TProductVariant,
} from "./product.interface";
const { Schema } = mongoose;

// Define the TProductVariant schema
const ProductVariantSchema = new Schema<TProductVariant>({
  type: {
    type: String,
    required: [true, "Please provide the variant type (e.g., size, color)."],
  },
  value: {
    type: String,
    required: [
      true,
      'Please provide the specific variant value (e.g., "Small", "Red").',
    ],
  },
});

// Define the TProductInventory schema
const ProductInventorySchema = new Schema<TProductInventory>({
  quantity: {
    type: Number,
    required: [true, "Please provide the inventory quantity."],
  },
  inStock: {
    type: Boolean,
    required: [true, "Please indicate if the product is in stock."],
  },
});

// Define the TProduct schema
const ProductSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: [true, "Please provide the product name."],
  },
  description: {
    type: String,
    required: [true, "Please provide the product description."],
  },
  price: {
    type: Number,
    required: [true, "Please provide the product price."],
  },
  category: {
    type: String,
    required: [true, "Please provide the product category."],
  },
  tags: {
    type: [String],
    required: [true, "Please provide at least one product tag."],
  },
  variants: {
    type: [ProductVariantSchema],
    required: [true, "Please provide product variants."],
  },
  inventory: {
    type: ProductInventorySchema,
    required: [true, "Please provide the product inventory details."],
  },
});

export const Product = mongoose.model<TProduct>("Product", ProductSchema);
