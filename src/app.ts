import { Request, Response } from "express";
import cors from "cors";
import express from "express";
import { ProductRoutes } from "./app/config/modules/product/product.route";
import { OrderRoutes } from "./app/config/modules/orders/order.route";
import { notFoundHandler } from "./app/config/modules/middleware/notFoundHandler";
import { errorHandler } from "./app/config/modules/middleware/errorHandler";

const app = express();
//parser
app.use(express.json());
app.use(cors());

app.use("/api/products", ProductRoutes);
app.use("/api/orders", OrderRoutes);

// Handle undefined routes
app.use(notFoundHandler);

// Error handling middleware
app.use(errorHandler);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
