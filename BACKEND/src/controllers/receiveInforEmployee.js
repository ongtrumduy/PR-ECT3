import jobEmployee from "../models/jobEmployee";

let receiveJobPositionList = (req, res, next) => {
  console.log(req.body);
  let receiveJobPositionList = jobEmployee.returnTrueProfileIdList(req.body);
  console.log(receiveJobPositionList);
  res.send(receiveJobPositionList);
};

module.exports = receiveJobPositionList;
