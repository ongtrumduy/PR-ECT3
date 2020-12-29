import jobEmployee from "../models/jobEmployee";

let receiveJobPositionList = (req, res, next) => {
  console.log(req.body);
  let receiveJobPositionList = jobEmployee.returnTrueProfileInforList(req.body);
  console.log("Trả về");
  console.log(receiveJobPositionList);
  res.send(receiveJobPositionList);
};

module.exports = receiveJobPositionList;
