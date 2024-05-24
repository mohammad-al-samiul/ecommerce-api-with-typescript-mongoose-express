import { object, string, number } from "zod";
const orderValidationSchema = object({
  email: string().email({ message: "Email is required and must be valid" }),
  productId: string().nonempty({ message: "Product ID is required" }),
  price: number().positive({ message: "Price must be a positive number" }),
  quantity: number().positive({
    message: "Quantity must be a positive number",
  }),
});

export default orderValidationSchema;
