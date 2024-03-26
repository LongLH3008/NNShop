import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";

import { connectDB } from "./config/connectdb.js";
import authenticationRouter from "./routers/authentication.js";
import productsRouter from "./routers/products.js";
import categoryRouter from "./routers/category.js";

const app = express();
dotenv.config();

// middlerware
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

// connect db
connectDB(process.env.DB_URI);

// routers
app.use("/api/v1", authenticationRouter);
app.use("/api/v1", productsRouter);
app.use("/api/v1", categoryRouter);

export const viteNodeApp = app;
