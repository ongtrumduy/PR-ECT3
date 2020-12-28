import jobType from "../models/jobType";
import jobPosition from "../models/jobPosition";
import jobActivity from "../models/jobActivity";

let receiveJobChild = (req, res, next) => {
  // console.log(req.body);
  // console.log(typeof req.body.jobFieldId);
  switch (req.body.jobChildOptionName) {
    case "lĩnh vực":
      let jobTypeChild = jobType.readJobChild(req.body);
      // console.log("jobTypeChild");
      // console.log(jobTypeChild);
      return res.send(jobTypeChild);
    case "vị trí":
      let jobPositionChild = jobPosition.readJobChild(req.body);
      // console.log(jobPositionChild);
      return res.send(jobPositionChild);
    case "hoạt động":
      let jobActivityChild = jobActivity.readJobChild(req.body);
      // console.log(jobActivityChild);
      return res.send(jobActivityChild);
  }
};

module.exports = receiveJobChild;
