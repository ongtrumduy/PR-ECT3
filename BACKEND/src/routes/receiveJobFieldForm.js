import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import receiveJobFieldForm from "../controllers/receiveJobFieldForm";

let router = express.Router();

let receiveJobFieldFormRoutes = (app, corsOptions) => {
  app.use(cors());
  app.use(bodyParser.json());
  router.post("/receiveJobFieldForm", cors(corsOptions), receiveJobFieldForm);

  return app.use("/", router);
};

module.exports = receiveJobFieldFormRoutes;
