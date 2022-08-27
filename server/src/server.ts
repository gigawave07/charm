import cookieParser from "cookie-parser";
import morgan from "morgan";
import path from "path";
import helmet from "helmet";
import cors from "cors";

import express, { NextFunction, Request, Response } from "express";

const mongoose = require("mongoose");
import StatusCodes from "http-status-codes";
import "express-async-errors";

import logger from "jet-logger";
import { CustomError } from "@shared/errors";
import { Connection } from "mongoose";
import charactersRoutes from "./modules/characters/routes";
import { setupDB } from "./config/database";

// Constants
const app = express();

/***********************************************************************************
 *                                  Middlewares
 **********************************************************************************/

// Common middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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
 *                         API routes and error handling
 **********************************************************************************/

// Add api router
// app.use("/api", apiRouter);

// Error handling
app.use(
  (err: Error | CustomError, _: Request, res: Response, __: NextFunction) => {
    logger.err(err, true);
    const status =
      err instanceof CustomError ? err.HttpStatus : StatusCodes.BAD_REQUEST;
    return res.status(status).json({
      error: err.message,
    });
  }
);

/***********************************************************************************
 *                                  Front-end content
 **********************************************************************************/

// Set views dir
const viewsDir = path.join(__dirname, "views");
app.set("views", viewsDir);

// Set static dir
const staticDir = path.join(__dirname, "public");
app.use(express.static(staticDir));

// Serve index.html file
app.get("*", (_: Request, res: Response) => {
  res.sendFile("index.html", { root: viewsDir });
});

mongoose.connect("mongodb://localhost:27017/charmdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db: Connection = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
  setupDB();
});
app.use("/api/characters", charactersRoutes);
app.get("*", (req, res) =>
  res.status(404).json({ errors: { body: ["Not found"] } })
);

// Export here and start in a diff file (for testing).
export default app;
