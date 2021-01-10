import React from "react";
import request from "request";

import "./AddJobFieldForm.css";
import ExitButton from "../../../Icons/Stop.png";

export default class AddJobFieldForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statusRenderModalForm: "addjobfieldform",
      jobFieldName: "",
      jobGrandId: "0",
      jobFieldFormList: []
    };
  }

  receiveJobFieldForm = (_jobFieldOptionName, callbackJobFieldForm) => {
    var options = {
      method: "POST",
      url: "http://localhost:8081/receiveJobFieldForm",
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
      // console.log(body);
      let receiveJobFormForm = JSON.parse(body);
      callbackJobFieldForm(receiveJobFormForm);
    });
  };

  componentWillMount = () => {
    this.receiveJobFieldForm(
      this.props.setOptionJob,
      this.receiveJobFieldFormList
    );
  };

  componentWillReceiveProps = nextProps => {
    this.setState({
      statusRenderModalForm: nextProps.statusRenderModalForm
    });
    this.receiveJobFieldForm(
      this.props.setOptionJob,
      this.receiveJobFieldFormList
    );
  };

  receiveJobFieldFormList = _jobFieldFormList => {
    this.setState({
      jobFieldFormList: _jobFieldFormList
    });
  };

  cancelAddJobFieldForm = () => {
    this.setState({
      statusRenderModalForm: "none"
    });
    this.props.setStatusRenderModalForm("none");
  };

  handleChangeJobFieldName = event => {
    this.setState({
      jobFieldName: event.target.value
    });
  };

  handleChangeJobGrandId = event => {
    this.setState({
      jobGrandId: event.target.value
    });
  };

  createNewJobFieldForm = () => {
    let data = {
      jobFieldOptionName: this.props.setOptionJob,
      jobFieldName: this.state.jobFieldName,
      jobGrandId: this.state.jobGrandId
    };
    this.props.socket.emit("create-new-job-field", data);
    this.cancelAddJobFieldForm();
  };

  render() {
    return (
      <div className="Add-Job-Field">
        <div
          className="Add-Job-Field-Form"
          style={
            this.state.statusRenderModalForm === "addjobfieldform"
              ? { display: "flex", flexDirection: "column" }
              : { display: "none" }
          }
        >
          <img
            className="exit-button"
            alt="exit"
            src={ExitButton}
            onClick={() => this.cancelAddJobFieldForm()}
          />
          <p style={{ textAlign: "center", margin: "10px 0 0 0" }}>
            Thêm nhãn {this.props.setOptionJob} công việc
          </p>
          <p>
            Tên <label style={{ color: "red" }}>(*)</label>
          </p>
          <input type="text" onChange={this.handleChangeJobFieldName} />
          <p>
            Chọn thông tin cha <label style={{ color: "red" }}>(*)</label>
          </p>
          <div className="select-add-job-field">
            <select
              // jobGrandId={this.state.jobGrandId}
              onChange={this.handleChangeJobGrandId}
            >
              {this.state.jobFieldFormList.map((item, index) => {
                return (
                  <option key={index} value={item.jobGrandId}>
                    {item.jobGrandName}
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
                onClick={() => this.createNewJobFieldForm()}
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
                onClick={() => this.cancelAddJobFieldForm()}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
