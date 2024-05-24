import { Request, Response } from "express";
import cors from "cors";
import express from "express";

import { notFoundHandler } from "./app/middleware/notFoundHandler";
import { errorHandler } from "./app/middleware/errorHandler";
import { ProductRoutes } from "./app/modules/product/product.route";
import { OrderRoutes } from "./app/modules/orders/order.route";

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
