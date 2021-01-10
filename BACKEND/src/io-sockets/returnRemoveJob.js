import jobActivity from "../models/jobActivity";
import jobPosition from "../models/jobPosition";
import jobType from "../models/jobType";

let returnUpdateJob = io => {
  io.on("connection", socket => {
    socket.on("confirm-to-remove-job", data => {
      console.log("bắt socket");
      console.log(socket.id);
      console.log(data);
      //   if (data.jobKind === "field") {
      switch (data.jobOptionName) {
        case "lĩnh vực":
          console.log("có vào");
          jobType.deleteJobTypeField(data);
          let updateJobTypeField = jobType.readJobField();
          return socket.emit("return-list-job-field", updateJobTypeField);
        case "vị trí":
          jobPosition.deleteJobPositionField(data);
          let updateJobPositionField = jobPosition.readJobField();
          return socket.emit("return-list-job-field", updateJobPositionField);
        case "hoạt động":
          jobActivity.deleteJobActivityField(data);
          let updateJobActivityField = jobActivity.readJobField();
          return socket.emit("return-list-job-field", updateJobActivityField);
      }
      //   } else if (data.jobKind === "child") {
      // switch (data.jobOptionName) {
      //   case "lĩnh vực":
      //     jobType.updateJobTypeChild(data);
      //     let updateJobTypeChild = jobType.readJobChildToUpdate(data);
      //     return socket.emit("return-list-job-child", updateJobTypeChild);
      //   case "vị trí":
      //     jobPosition.updateJobPositionChild(data);
      //     let updateJobPositionChild = jobPosition.readJobChildToUpdate(data);
      //     return socket.emit("return-list-job-child", updateJobPositionChild);
      //   case "hoạt động":
      //     jobActivity.updateJobActivityChild(data);
      //     let updateJobActivityChild = jobActivity.readJobChildToUpdate(data);
      //     return socket.emit("return-list-job-child", updateJobActivityChild);
      // }
      //   }
    });
  });
};

module.exports = returnUpdateJob;
