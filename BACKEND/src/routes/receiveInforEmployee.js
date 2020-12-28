import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import receiveInforEmployee from "../controllers/receiveInforEmployee";
let router = express.Router();

let receiveInforEmployeeList = (app, corsOptions) => {
  app.use(cors());
  app.use(bodyParser.json());
  router.post(
    "/receiveInforEmployeeList",
    cors(corsOptions),
    receiveInforEmployee
  );

  return app.use("/", router);
};

module.exports = receiveInforEmployeeList;
