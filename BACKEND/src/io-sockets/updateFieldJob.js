import jobActivity from "../models/jobActivity";
import jobPosition from "../models/jobPosition";
import jobType from "../models/jobType";

let updateFieldJob = io => {
  io.on("connection", socket => {
    socket.on("sent-to-edit-field", data => {
      // console.log(data);
      switch (data.jobFieldOptionName) {
        case "lĩnh vực":
          let jobTypeFieldToEdit = jobType.readJobTypeFieldToEditPage(data);
          return socket.emit("return-field-edit-page", jobTypeFieldToEdit);
        case "vị trí":
          let jobPositionFieldToEdit = jobPosition.readJobPositionFieldToEditPage(
            data
          );
          return socket.emit("return-field-edit-page", jobPositionFieldToEdit);
        case "hoạt động":
          let jobActivityFieldToEdit = jobActivity.readJobActivityFieldToEditPage(
            data
          );
          return socket.emit("return-field-edit-page", jobActivityFieldToEdit);
      }
    });

    //------------------------------------------------------------------------------
  });
};

module.exports = updateFieldJob;
