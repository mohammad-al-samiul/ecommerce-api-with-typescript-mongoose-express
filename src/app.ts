import { Request, Response } from "express";

import express from "express";
import { ProductRoutes } from "./app/config/modules/product/product.route";
const app = express();
//parser
app.use(express.json());

app.use("/api/products", ProductRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
