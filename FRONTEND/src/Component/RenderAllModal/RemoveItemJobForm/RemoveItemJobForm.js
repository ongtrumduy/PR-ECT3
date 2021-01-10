import React from "react";
import "./RemoveItemJobForm.css";
import ExitButton from "../../../Icons/Stop.png";

export default class RemoveItemJobForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statusRenderModalForm: "removeitemjobform",
      jobId: "",
      jobGrandId: "",
      jobOptionName: ""
    };
  }

  componentWillMount = () => {
    this.props.socket.on("receive-to-remove-job-field", data => {
      console.log("Trả lại");
      console.log(data);
      this.setState({
        jobId: data.jobFieldId,
        jobGrandId: "",
        jobOptionName: data.jobFieldOptionName
      });
    });
  };

  componentWillReceiveProps = nextProps => {
    this.setState({
      statusRenderModalForm: nextProps.statusRenderModalForm
    });
    // this.props.socket.on("receive-to-remove-job-field", data => {
    //   console.log("Trả lại phát nữa ");
    //   console.log(data);
    //   this.setState({
    //     jobId: data.jobFieldId,
    //     jobGrandId: "",
    //     jobOptionName: data.jobFieldOptionName
    //   });
    // });
    // this.props.socket.on("receive-to-remove-job-child", data => {
    //   this.setState({
    //     jobId: data.jobFieldId,
    //     jobGrandId: "",
    //     jobOptionName: data.jobOptionName
    //   });
    // });
  };

  removeItemJobForm = () => {
    console.log("Có vào");
    let data = {
      jobId: this.state.jobId,
      jobGrandId: "",
      jobOptionName: this.state.jobOptionName
    };
    console.log("agjagoajgaoo");
    this.props.socket.emit("confirm-to-remove-job", data);
    this.cancelRemoveItemJobForm();
  };

  cancelRemoveItemJobForm = () => {
    this.setState({
      statusRenderModalForm: "none"
    });
    this.props.setStatusRenderModalForm("none");
  };

  render() {
    return (
      <div className="Remove-Item-Job">
        <div
          className="Remove-Item-Job-Form"
          style={
            this.state.statusRenderModalForm === "removeitemjobform"
              ? { display: "flex", flexDirection: "column" }
              : { display: "none" }
          }
        >
          <img
            className="exit-button"
            alt="exit"
            src={ExitButton}
            onClick={() => this.cancelRemoveItemJobForm()}
          />
          <p style={{ textAlign: "center", margin: "28px 0 0 0" }}>
            Xóa lưu trữ {this.props.setOptionJob} công việc ????????
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              margin: "10px 0 10px 0"
            }}
          >
            <div>
              <input
                style={{
                  color: "white",
                  backgroundColor: "green"
                }}
                type="button"
                value="Có"
                onClick={() => this.removeItemJobForm()}
              />
            </div>
            <div>
              <input
                style={{
                  color: "white",
                  backgroundColor: "red"
                }}
                type="button"
                value="Không"
                onClick={() => this.cancelRemoveItemJobForm()}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
