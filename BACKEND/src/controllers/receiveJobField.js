import jobType from "../models/jobType";
import jobPosition from "../models/jobPosition";
import jobActivity from "../models/jobActivity";

let receiveJobField = (req, res, next) => {
  // console.log(req.body);
  switch (req.body.jobFieldOptionName) {
    case "lĩnh vực":
      let jobTypeField = jobType.readJobField();
      // console.log(jobTypeField);
      return res.send(jobTypeField);
    case "vị trí":
      let jobPositionField = jobPosition.readJobField();
      // console.log(jobPositionField);
      return res.send(jobPositionField);
    case "hoạt động":
      let jobActivityField = jobActivity.readJobField();
      // console.log(jobActivityField);
      return res.send(jobActivityField);
  }
};

module.exports = receiveJobField;
