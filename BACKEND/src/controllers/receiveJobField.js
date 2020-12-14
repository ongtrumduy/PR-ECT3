import jobType from "../models/jobType";
import jobPosition from "../models/jobPosition";
import jobActivity from "../models/jobActivity";

let receiveJobField = (req, res, next) => {
  // console.log(req.body);
  switch (req.body.jobFieldOptionName) {
    case "lĩnh vực":
      let jobTypeField = jobType.readJobField();
      console.log(jobTypeField);
      res.send(jobTypeField);
    case "vị trí":
      let jobPositionField = jobPosition.readJobField();
      console.log(jobPositionField);
      res.send(jobPositionField);
    case "hoạt động":
      let jobActivityField = jobActivity.readJobField();
      console.log(jobActivityField);
      res.send(jobActivityField);
  }
};

module.exports = receiveJobField;
