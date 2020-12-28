import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import receiveJobChildForm from "../controllers/receiveJobChildForm";

let router = express.Router();

let receiveJobChildFormRoutes = (app, corsOptions) => {
  app.use(cors());
  app.use(bodyParser.json());
  router.post("/receiveJobChildForm", cors(corsOptions), receiveJobChildForm);

  return app.use("/", router);
};

module.exports = receiveJobChildFormRoutes;
