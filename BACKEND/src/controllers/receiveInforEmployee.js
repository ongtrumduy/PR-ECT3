import jobPosition from "../models/jobPosition";

let receiveJobPositionList = (req, res, next) => {
  let jobPositionField = jobPosition.readJobField();
  // console.log(jobPositionField);
  console.log("1");

  console.log(req.body);
  // return res.send("1");
  console.log(res.send);
};

module.exports = receiveJobPositionList;
