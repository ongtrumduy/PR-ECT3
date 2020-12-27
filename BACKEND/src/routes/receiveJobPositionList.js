import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import receiveJobPositionList from "../controllers/receiveJobPositionList";
let router = express.Router();

let receiveJobPositionListRoutes = (app, corsOptions) => {
  app.use(cors());
  app.use(bodyParser.json());
  router.post(
    "/receiveJobPositionList",
    cors(corsOptions),
    receiveJobPositionList
  );

  return app.use("/", router);
};

module.exports = receiveJobPositionListRoutes;
