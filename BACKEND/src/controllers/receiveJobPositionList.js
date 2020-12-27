import jobPosition from "../models/jobPosition";

let receiveJobPositionList = (req, res, next) => {
  let jobPositionField = jobPosition.readJobField();

  return res.send(jobPositionField);
};

module.exports = receiveJobPositionList;
