import jobActivity from "../models/jobActivity";
import jobPosition from "../models/jobPosition";
import jobType from "../models/jobType";

let createNewJobChild = io => {
  io.on("connection", socket => {
    socket.on("create-new-job-child", data => {
      console.log(data);
      switch (data.jobChildOptionName) {
        case "lĩnh vực":
          jobType.createNewJobTypeChild(data);
          let newJobTypeChild = jobType.readJobChild(data);
          console.log(newJobTypeChild);
          return socket.emit("return-create-new-job-child", newJobTypeChild);
        case "vị trí":
          jobPosition.createNewJobPositionChild(data);
          let newJobPositionChild = jobPosition.readJobChild(data);
          console.log(newJobPositionChild);
          return socket.emit(
            "return-create-new-job-child",
            newJobPositionChild
          );
        case "hoạt động":
          jobActivity.createNewJobActivityChild(data);
          let newJobActivityChild = jobActivity.readJobChild(data);
          console.log(newJobActivityChild);
          return socket.emit(
            "return-create-new-job-child",
            newJobActivityChild
          );
      }
    });
  });
};

module.exports = createNewJobChild;
