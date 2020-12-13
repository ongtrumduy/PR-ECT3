import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import receiveJobField from "../controllers/receiveJobField";

let router = express.Router();

let receiveJobFieldRoutes = (app, corsOptions) => {
  app.use(cors());
  app.use(bodyParser.json());
  router.post("/receiveJobFieldList", cors(corsOptions), receiveJobField);

  return app.use("/", router);
};

module.exports = receiveJobFieldRoutes;
