import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import bodyParser from "body-parser"

import express from "express";
import "express-async-errors";

import logger from "jet-logger";
import { Connection } from "mongoose";
import charactersRoutes from "./modules/characters/routes";
import { setupDB } from "./config/database";

import mongoose from "mongoose";

const app = express();

/***********************************************************************************
 *                                  Middlewares
 **********************************************************************************/

// Common middlewares
/***********************************************************************************
 *                        Body parser
 **********************************************************************************/
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Show routes called in console during development
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Security (helmet recommended in express docs)
if (process.env.NODE_ENV === "production") {
  app.use(helmet());
}

/***********************************************************************************
 *                         DB Connection
 **********************************************************************************/
mongoose.connect("mongodb://localhost:27017/charmdb");
const db: Connection = mongoose.connection;
db.on("error", () => logger.err("connection error: "));
db.once("open", () => {
  logger.info("DB Connected successfully");
  setupDB();
});

/***********************************************************************************
 *                         API routes and error handling
 **********************************************************************************/
app.use("/api/characters", charactersRoutes);
app.get("*", (req, res) =>
  res.status(404).json({ errors: { body: ["Not found"] } })
);

// Export here and start in a diff file (for testing).
export default app;
