import jobType from "../models/jobType";
import jobPosition from "../models/jobPosition";
import jobActivity from "../models/jobActivity";

let receiveJobFieldForm = (req, res, next) => {
  console.log(req.body);
  switch (req.body.jobFieldOptionName) {
    case "lĩnh vực":
      let jobTypeGrand = jobType.readGrandJobTypeField();
      console.log(jobTypeGrand);
      return res.send(jobTypeGrand);
    case "vị trí":
      let jobPositionGrand = jobPosition.readGrandJobPositionField();
      console.log(jobPositionGrand);
      return res.send(jobPositionGrand);
    case "hoạt động":
      let jobActivityGrand = jobActivity.readGrandJobActivityField();
      console.log(jobActivityGrand);
      return res.send(jobActivityGrand);
  }
};

module.exports = receiveJobFieldForm;
