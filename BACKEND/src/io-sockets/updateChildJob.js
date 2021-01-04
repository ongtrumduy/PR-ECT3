import jobActivity from "../models/jobActivity";
import jobPosition from "../models/jobPosition";
import jobType from "../models/jobType";

let updateChildJob = io => {
  io.on("connection", socket => {
    socket.on("sent-to-edit-child", data => {
      // console.log(data);
      switch (data.jobFieldOptionName) {
        case "lĩnh vực":
          let jobTypeChildToEdit = jobType.readJobTypeChildToEditPage(data);
          // console.log(jobTypeChildToEdit);
          return socket.emit("return-child-edit-page", jobTypeChildToEdit);
        case "vị trí":
          let jobPositionChildToEdit = jobPosition.readJobPositionChildToEditPage(
            data
          );
          // console.log(jobPositionChildToEdit);
          return socket.emit("return-child-edit-page", jobPositionChildToEdit);
        case "hoạt động":
          let jobActivityChildToEdit = jobActivity.readJobActivityChildToEditPage(
            data
          );
          // console.log(jobActivityChildToEdit);
          return socket.emit("return-child-edit-page", jobActivityChildToEdit);
      }
    });
  });
};

module.exports = updateChildJob;
