import jobType from "../models/jobType";
import jobPosition from "../models/jobPosition";
import jobActivity from "../models/jobActivity";

let receiveJobField = (req, res, next) => {
  switch (req.body.jobFieldOptionName) {
    case "lĩnh vực":
      let jobTypeField = jobType.readJobTypeField();
      let receiveJobTypeField = {
        jobFieldId: jobTypeField.jobTypeFieldId,
        jobFieldName: jobTypeField.jobTypeFieldName
      };
      res.send(receiveJobTypeField);
    case "vị trí":
      let jobPositionField = jobPosition.readJobPositionField();
      let receiveJobPositionField = {
        jobFieldId: jobPositionField.jobPositionFieldId,
        jobFieldName: jobPositionField.jobPositionFieldName
      };
      res.send(receiveJobPositionField);
    case "hoạt động":
      let jobActivityField = jobActivity.readJobActivityField();
      let receiveJobActivityField = {
        jobFieldId: jobActivityField.jobActivityFieldId,
        jobFieldName: jobActivityField.jobActivityFieldName
      };
      res.send(receiveJobActivityField);
  }
};

module.exports = receiveJobField;
