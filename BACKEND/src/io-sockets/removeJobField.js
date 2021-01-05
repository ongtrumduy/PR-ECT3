import jobActivity from "../models/jobActivity";
import jobPosition from "../models/jobPosition";
import jobType from "../models/jobType";

let RemoveJobField = io => {
  io.on("connection", socket => {
    socket.on("sent-to-remove-field", data => {
      console.log(data);
      socket.emit("receive-to-remove-job-field", data);
      //   switch (data.jobFieldOptionName) {
      //     case "lĩnh vực":
      //       jobType.createNewJobTypeField(data);
      //       let newJobTypeField = jobType.readJobField();
      //       // console.log(newJobTypeField);
      //       return socket.emit("return-list-job-field", newJobTypeField);
      //     case "vị trí":
      //       jobPosition.createNewJobPositionField(data);
      //       let newJobPositionField = jobPosition.readJobField();
      //       // console.log(newJobPositionField);
      //       return socket.emit("return-list-job-field", newJobPositionField);
      //     case "hoạt động":
      //       jobActivity.createNewJobActivityField(data);
      //       let newJobActivityField = jobActivity.readJobField();
      //       // console.log(newJobActivityField);
      //       return socket.emit("return-list-job-field", newJobActivityField);
      //   }
    });
  });
};

module.exports = RemoveJobField;
