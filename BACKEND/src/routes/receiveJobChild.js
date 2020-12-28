import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import receiveJobChild from "../controllers/receiveJobChild";

let router = express.Router();

let receiveJobChildRoutes = (app, corsOptions) => {
  app.use(cors());
  app.use(bodyParser.json());
  router.post("/receiveJobChildList", cors(corsOptions), receiveJobChild);

  return app.use("/", router);
};

module.exports = receiveJobChildRoutes;
