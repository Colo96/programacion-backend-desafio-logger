const express = require("express");
const mongoose = require("mongoose");
const apiRouter = require("./routers/app.routers");
const errorHandler = require("./middleware/error.middleware");
const DB_CONFIG = require("./config/db.config");
const ENV_CONFIG = require("./config/env.config");
const addLogger = require("./middleware/logger.middleware");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRouter);

app.use(errorHandler);
app.use(addLogger);

const { PORT } = ENV_CONFIG;

mongoose
  .connect(DB_CONFIG.mongo.uri)
  .then(() => {
    console.log("Connected to DB successfully!");
    const server = app.listen(+PORT, () => {
      const serverURI = `http://localhost:${+PORT}`;
      console.log(`Server is up and running on ${serverURI}`);
    });
    server.on("error", (error) => {
      const serverURI = `http://localhost:${+PORT}`;
      logger.error(
        `There was an error trying to start the server on ${serverURI}`
      );
      throw error;
    });
  })
  .catch((error) => {
    logger.error(
      `There was an error trying to connect to ${DB_CONFIG.mongo.uri}`
    );
    throw error;
  });
