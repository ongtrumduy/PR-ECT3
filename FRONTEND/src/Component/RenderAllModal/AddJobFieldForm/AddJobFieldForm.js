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
      console.log(body);
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
          <input type="text" />
          <p>
            Chọn thông tin cha <label style={{ color: "red" }}>(*)</label>
          </p>
          <div className="select-add-job-field">
            <select>
              {this.state.jobFieldFormList.map((item, index) => {
                return <option key={index}>{item.jobGrandName}</option>;
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
                value="Lưu"
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
