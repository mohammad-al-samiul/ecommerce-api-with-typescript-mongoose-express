import { z } from "zod";

// Define the TProductVariant Zod schema
const ProductVariantValidationSchema = z.object({
  type: z
    .string()
    .nonempty("Please provide the variant type (e.g., size, color)."),
  value: z
    .string()
    .nonempty(
      'Please provide the specific variant value (e.g., "Small", "Red").'
    ),
});

// Define the TProductInventory Zod schema
const ProductInventoryValidationSchema = z.object({
  quantity: z
    .number()
    .int()
    .nonnegative("Quantity must be a non-negative integer.")
    .min(0, "Please provide the inventory quantity."),
  inStock: z
    .boolean()
    .refine(
      (value) => value !== undefined,
      "Please indicate if the product is in stock."
    ),
});

// Define the TProduct Zod schema
const ProductValidationSchema = z.object({
  name: z.string().nonempty("Please provide the product name."),
  description: z.string().nonempty("Please provide the product description."),
  price: z
    .number()
    .nonnegative("Price must be a non-negative number.")
    .min(0, "Please provide the product price."),
  category: z.string().nonempty("Please provide the product category."),
  tags: z
    .array(z.string())
    .nonempty("Please provide at least one product tag."),
  variants: z
    .array(ProductVariantValidationSchema)
    .nonempty("Please provide product variants."),
  inventory: ProductInventoryValidationSchema.refine(
    (data) => data.quantity >= 0,
    "Inventory quantity must be non-negative."
  ),
});

export default ProductValidationSchema;
