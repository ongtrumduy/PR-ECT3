import React from "react";
import request from "request";

import "./AddJobChildForm.css";
import ExitButton from "../../../Icons/Stop.png";

export default class AddJobChildForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statusRenderModalForm: "addjobchildform",
      jobChildName: "",
      jobFieldId: "0",
      jobChildFormList: []
    };
  }

  receiveJobChildForm = (_jobFieldOptionName, callbackJobChildForm) => {
    var options = {
      method: "POST",
      url: "http://localhost:8081/receiveJobChildForm",
      headers: {
        "cache-control": "no-cache",
        Connection: "keep-alive",
        "Content-Length": "0",
        "Accept-Encoding": "gzip, deflate",
        Host: "localhost:8081",
        "Cache-Control": "no-cache",
        Accept: "*/*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        jobFieldOptionName: _jobFieldOptionName
      })
    };
    request(options, (error, response, body) => {
      if (error) throw new Error(error);
      console.log(body);
      let receiveJobChildForm = JSON.parse(body);
      callbackJobChildForm(receiveJobChildForm);
    });
  };

  componentWillMount = () => {
    this.receiveJobChildForm(
      this.props.setOptionJob,
      this.receiveJobChildFormList
    );
  };

  componentWillReceiveProps = nextProps => {
    this.setState({
      statusRenderModalForm: nextProps.statusRenderModalForm
    });
    this.receiveJobChildForm(
      this.props.setOptionJob,
      this.receiveJobChildFormList
    );
  };

  receiveJobChildFormList = _jobChildFormList => {
    this.setState({
      jobChildFormList: _jobChildFormList
    });
  };

  cancelAddJobChildForm = () => {
    this.setState({
      statusAddJobChildForm: "none"
    });
    this.props.setStatusRenderModalForm("none");
  };

  handleChangeJobChildName = event => {
    this.setState({
      jobChildName: event.target.value
    });
  };

  handleChangeJobFieldId = event => {
    this.setState({
      jobFieldId: event.target.value
    });
  };

  createNewJobChildForm = () => {
    let data = {
      jobChildOptionName: this.props.setOptionJob,
      jobChildName: this.state.jobChildName,
      jobFieldId: this.state.jobFieldId
    };
    this.props.socket.emit("create-new-job-child", data);
    this.cancelAddJobChildForm();
  };

  render() {
    return (
      <div className="Add-Job-Child">
        <div
          className="Add-Job-Child-Form"
          style={
            this.state.statusRenderModalForm === "addjobchildform"
              ? { display: "flex", flexDirection: "column" }
              : { display: "none" }
          }
        >
          <img
            className="exit-button"
            alt="exit"
            src={ExitButton}
            onClick={() => this.cancelAddJobChildForm()}
          />
          <p style={{ textAlign: "center", margin: "10px 0 0 0" }}>
            Thêm con {this.props.setOptionJob} công việc
          </p>
          <p>
            Tên <label style={{ color: "red" }}>(*)</label>
          </p>
          <input type="text" onChange={this.handleChangeJobChildName} />
          <p>
            Chọn thông tin nhãn <label style={{ color: "red" }}>(*)</label>
          </p>
          <div className="select-add-job-child">
            <select
              jobFieldId={this.state.jobFieldId}
              onChange={this.handleChangeJobFieldId}
            >
              {this.state.jobChildFormList.map((item, index) => {
                return (
                  <option key={index} value={item.jobFieldId}>
                    {item.jobFieldName}
                  </option>
                );
              })}
            </select>
          </div>
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
                value="Thêm"
                onClick={() => this.createNewJobChildForm()}
              />
            </div>
            <div>
              <input
                style={{
                  color: "white",
                  backgroundColor: "red"
                }}
                type="button"
                value="Đóng"
                onClick={() => this.cancelAddJobChildForm()}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
