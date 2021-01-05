import React from "react";
import request from "request";

import JobChild from "./JobChild";

import ArrowUp from "../../../Icons/Arrow Up.png";
import ArrowRight from "../../../Icons/Arrow Right.png";
import JobFieldIcon from "../../../Icons/Button White Stop.png";
import CheckEmpty from "../../../Icons/Checkbox Empty.png";
import CheckFull from "../../../Icons/Checkbox Full.png";

export default class JobField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changeIconField: false,
      checkRemoveField: true,
      jobFieldId: "",
      jobFieldList: []
    };
  }

  //-----------------------------------------------------------------------
  receiveJobFieldDataList = (_jobFieldOptionName, callbackJobField) => {
    var options = {
      method: "POST",
      url: "http://localhost:8081/receiveJobFieldList",
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
      let receiveJobField = JSON.parse(body);
      callbackJobField(receiveJobField);
    });
  };
  //-----------------------------------------------------------------------

  componentWillMount = () => {
    this.receiveJobFieldDataList(
      this.props.setOptionJob,
      this.receiveJobFieldList
    );
    this.props.socket.on("return-list-job-field", data => {
      this.setState({
        jobFieldList: data
      });
    });
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.statusRenderModalForm === "none") {
      this.setState({
        checkRemoveField: true
      });
    }
    if (this.state.setOptionJob !== nextProps.setOptionJob) {
      this.receiveJobFieldDataList(
        nextProps.setOptionJob,
        this.receiveJobFieldList
      );
      this.setState({
        changeIconField: false
      });
    }
    this.props.socket.on("return-list-job-field", data => {
      this.setState({
        jobFieldList: data
      });
    });
  };

  receiveJobFieldList = _jobFieldList => {
    this.setState({
      jobFieldList: _jobFieldList
    });
  };

  sentToUpdateField = _jobFieldId => {
    let dataSentToUpdateField = {
      jobFieldId: _jobFieldId,
      jobFieldOptionName: this.props.setOptionJob
    };
    this.props.socket.emit("sent-to-edit-field", dataSentToUpdateField);
    this.checkChangeIconField(_jobFieldId);
  };

  checkChangeIconField = _jobFieldId => {
    if (this.state.changeIconField && this.state.jobFieldId === _jobFieldId) {
      this.setState({
        changeIconField: false,
        jobFieldId: _jobFieldId
      });
    } else {
      this.setState({
        changeIconField: true,
        jobFieldId: _jobFieldId
      });
    }
  };

  checkCheckRemoveField = _jobFieldId => {
    if (this.state.checkRemoveField) {
      this.setState({
        checkRemoveField: false,
        jobFieldId: _jobFieldId
      });
    }
    this.props.setStatusRenderModalForm("removeitemjobform");
    this.props.setModalOptionJob(this.props.setOptionJob);
    let dataSentToRemoveField = {
      jobFieldId: _jobFieldId,
      jobFieldOptionName: this.props.setOptionJob
    };
    this.props.socket.emit("sent-to-remove-field", dataSentToRemoveField);
  };

  renderJobChild = jobFieldId => {
    if (this.state.changeIconField && this.state.jobFieldId === jobFieldId) {
      return (
        <JobChild
          jobFieldId={jobFieldId}
          statusRenderModalForm={this.props.statusRenderModalForm}
          setStatusRenderModalForm={this.props.setStatusRenderModalForm}
          setModalOptionJob={this.props.setModalOptionJob}
          setOptionJob={this.props.setOptionJob}
          socket={this.props.socket}
        />
      );
    }
  };

  positionListField = () => {
    return (
      <div>
        {this.state.jobFieldList.map((item, index) => (
          <div key={index}>
            <div>
              <img
                alt="icon-job-field"
                src={
                  this.state.changeIconField &&
                  this.state.jobFieldId === item.jobFieldId
                    ? ArrowRight
                    : ArrowUp
                }
              />
              <img
                alt=""
                src={
                  !this.state.checkRemoveField &&
                  this.state.jobFieldId === item.jobFieldId
                    ? CheckFull
                    : CheckEmpty
                }
                onClick={() => this.checkCheckRemoveField(item.jobFieldId)}
              />
              <img alt="" src={JobFieldIcon} />
              <label onClick={() => this.sentToUpdateField(item.jobFieldId)}>
                {item.jobFieldName}
              </label>
              {this.renderJobChild(item.jobFieldId)}
            </div>
          </div>
        ))}
      </div>
    );
  };

  render() {
    return <div className="Job-Field-List">{this.positionListField()}</div>;
  }
}
