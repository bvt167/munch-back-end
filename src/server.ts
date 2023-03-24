/**
 * Sets up server including middlewares, routes, and starting the server.
 */

import http from "http";
import express, { Express } from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import {
  DATABASE_URI,
  FB_APP_ID,
  FB_APP_SECRET_ID,
} from "./constant/CommonConstants";
import AccountController from "./controller/accountController";
import DatabaseRoutes from "./routes/accountRoutes";
import PostController from "./controller/postController";
import PostRoutes from "./routes/postRoutes";
import * as dotenv from "dotenv";

main();

async function main() {
  dotenv.config();
  const app: Express = express();
  await mongoose.connect(DATABASE_URI);

  /** Logging */
  app.use(morgan("dev"));
  /** Parse the request */
  app.use(express.urlencoded({ extended: false }));
  /** Takes care of JSON data */
  app.use(express.json());

  /** RULES OF OUR API */
  app.use((req, res, next) => {
    // set the CORS policy
    res.header("Access-Control-Allow-Origin", "*");
    // set the CORS headers
    res.header(
      "Access-Control-Allow-Headers",
      "origin, X-Requested-With,Content-Type,Accept, Authorization"
    );
    // set the CORS method headers
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "GET PATCH DELETE POST");
      return res.status(200).json({});
    }
    next();
  });

  /** Routes setup. */
  const databaseController = new AccountController(mongoose);
  const databaseRoutes = new DatabaseRoutes(
    express.Router(),
    databaseController
  );

  const postController = new PostController(mongoose);
  const postRoutes = new PostRoutes(express.Router(), postController);

  /** Routes */
  app.use("/account", databaseRoutes.getRouter());
  app.use("/post", postRoutes.getRouter());

  /** Error handling */
  app.use((req, res, next) => {
    const error = new Error("not found");
    return res.status(404).json({
      message: error.message,
    });
  });

  /** Server */
  const httpServer = http.createServer(app);
  const PORT: any = process.env.PORT ?? 3000;
  httpServer.listen(PORT, () =>
    console.log(`The server is running on port ${PORT}`)
  );
}
