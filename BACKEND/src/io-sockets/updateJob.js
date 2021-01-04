import jobActivity from "../models/jobActivity";
import jobPosition from "../models/jobPosition";
import jobType from "../models/jobType";

let updateJobField = io => {
  io.on("connection", socket => {
    socket.on("sent-to-edit-field", data => {
      // console.log(data);
      switch (data.jobFieldOptionName) {
        case "lĩnh vực":
          let jobTypeFieldToEdit = jobType.readJobTypeFieldToEditPage(data);
          // console.log(jobTypeFieldToEdit);
          return socket.emit("return-field-to-edit-page", jobTypeFieldToEdit);
        case "vị trí":
          let jobPositionFieldToEdit = jobPosition.readJobPositionFieldToEditPage(
            data
          );
          // console.log(jobPositionFieldToEdit);
          return socket.emit(
            "return-field-to-edit-page",
            jobPositionFieldToEdit
          );
        case "hoạt động":
          let jobActivityFieldToEdit = jobActivity.readJobActivityFieldToEditPage(
            data
          );
          // console.log(jobActivityFieldToEdit);
          return socket.emit(
            "return-field-to-edit-page",
            jobActivityFieldToEdit
          );
      }
    });

    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------

    socket.on("sent-to-edit-child", data => {
      console.log(data);
      switch (data.jobFieldOptionName) {
        case "lĩnh vực":
          jobTypeChildToEdit = jobType.readJobTypeChildToEditPage(data);
          // console.log(jobTypeChildToEdit);
          return socket.emit("return-child-to-edit-page", jobTypeChildToEdit);
        case "vị trí":
          let jobPositionChildToEdit = jobPosition.readJobPositionChildToEditPage(
            data
          );
          // console.log(jobPositionChildToEdit);
          return socket.emit(
            "return-child-to-edit-page",
            jobPositionChildToEdit
          );
        case "hoạt động":
          let jobActivityChildToEdit = jobActivity.readJobActivityChildToEditPage(
            data
          );
          // console.log(jobActivityChildToEdit);
          return socket.emit(
            "return-child-to-edit-page",
            jobActivityChildToEdit
          );
      }
    });

    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------

    socket.on("sent-to-update-kind", data => {
      console.log(data);
      if (data.jobKind === "field") {
        switch (data.jobOptionName) {
          case "lĩnh vực":
            jobType.updateJobTypeField(data);
            let updateJobTypeField = jobType.readJobField();
            // console.log(updateJobTypeField);
            return socket.emit("return-list-job-field", updateJobTypeField);
          case "vị trí":
            jobPosition.updateJobPositionField(data);
            let updateJobPositionField = jobPosition.readJobField();
            // console.log(updateJobPositionField);
            return socket.emit("return-list-job-field", updateJobPositionField);
          case "hoạt động":
            jobActivity.updateJobActivityField(data);
            let updateJobActivityField = jobActivity.readJobField();
            // console.log(updateJobActivityField);
            return socket.emit("return-list-job-field", updateJobActivityField);
        }
      } else if (data.jobKind === "child") {
      }
    });

    //------------------------------------------------------------------------------
  });
};

module.exports = updateJobField;
