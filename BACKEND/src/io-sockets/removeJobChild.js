import jobActivity from "../models/jobActivity";
import jobPosition from "../models/jobPosition";
import jobType from "../models/jobType";

let RemoveJobChild = io => {
  io.on("connection", socket => {
    socket.on("sent-to-remove-child", data => {
      console.log(data);
    });
  });
};

module.exports = RemoveJobChild;
