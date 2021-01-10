let RemoveJobField = io => {
  io.on("connection", socket => {
    console.log("THử bắt socket");
    console.log(socket.id);
    socket.on("sent-to-remove-field", data => {
      console.log(data);
      socket.emit("receive-to-remove-job-field", data);
    });
  });
};

module.exports = RemoveJobField;
