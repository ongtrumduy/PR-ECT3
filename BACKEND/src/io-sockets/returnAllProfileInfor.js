import jobProfile from "../models/jobProfile";

let createNewJobField = io => {
  io.on("connection", socket => {
    socket.on("get-profile-infor", data => {
      let allinfordata = jobProfile.returnProfileInfor(data);
      socket.emit("return-all-infor", allinfordata);
    });
  });
};

module.exports = createNewJobField;
