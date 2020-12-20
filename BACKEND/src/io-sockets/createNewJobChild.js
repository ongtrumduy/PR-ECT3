import jobActivity from "../models/jobActivity";
import jobPosition from "../models/jobPosition";
import jobType from "../models/jobType";

let createNewJobChild = io => {
  socket.on("create-new-job-child", data => {
    switch (data.jobChildOptionName) {
      case "lĩnh vực":
        let newJobTypeChild = jobType.readJobChild(req.body);
        console.log(newJobTypeChild);
        return socket.emit("return-create-new-job-child", newJobTypeChild);
      case "vị trí":
        let newJobPositionChild = jobPosition.readJobChild(req.body);
        console.log(newJobPositionChild);
        return socket.emit("return-create-new-job-child", newJobPositionChild);
      case "hoạt động":
        let newJobActivityChild = jobActivity.readJobChild(req.body);
        console.log(newJobActivityChild);
        return socket.emit("return-create-new-job-child", newJobActivityChild);
    }
  });
};

module.exports = createNewJobChild;
