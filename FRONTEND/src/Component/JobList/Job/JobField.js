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
      changeIconJob: false,
      changeIdJob: -1,
      checkRemoveJob: true,
      jobtypefieldlist: []
    };
  }

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
      // console.log(body)
      let receiveJobField = JSON.parse(body);
      callbackJobField(receiveJobField);
    });
  };

  componentWillMount = () => {
    this.receiveJobFieldDataList(
      this.receiveJobFieldList,
      this.props.setOptionJob
    );
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.statusRenderModalForm === "none") {
      this.setState({
        checkRemoveJob: true
      });
    }
  };

  receiveJobFieldList = _jobtypefieldlist => {
    this.setState({
      jobtypefieldlist: _jobtypefieldlist
    });
  };

  checkChangeIconJob = JobId => {
    if (this.state.changeIconJob) {
      this.setState({
        changeIconJob: true,
        changeIdJob: JobId
      });
    } else {
      this.setState({
        changeIconJob: true,
        changeIdJob: JobId
      });
    }
  };

  checkCheckRemoveJob = () => {
    if (this.state.checkRemoveJob) {
      this.setState({
        checkRemoveJob: false
      });
    }
    this.props.setStatusRenderModalForm("removeitemjobform");
    this.props.setModalOptionJob(this.props.setOptionJob);
  };

  renderJobChild = JobId => {
    if (this.state.changeIconJob && this.state.changeIdJob === JobId) {
      return (
        <JobChild
          JobId={JobId}
          statusRenderModalForm={this.props.statusRenderModalForm}
          setStatusRenderModalForm={this.props.setStatusRenderModalForm}
          setModalOptionJob={this.props.setModalOptionJob}
          setOptionJob={this.props.setOptionJob}
        />
      );
    }
  };

  positionListJob = () => {
    return (
      <div>
        {this.state.jobtypefieldlist.map(item => {
          <div>
            <img
              alt="icon-job-"
              src={
                this.state.changeIconJob && this.state.changeIdJob === 1
                  ? ArrowRight
                  : ArrowUp
              }
            />
            <img
              alt=""
              src={this.state.checkRemoveJob ? CheckEmpty : CheckFull}
              onClick={() => this.checkCheckRemoveJob()}
            />
            <img alt="" src={JobFieldIcon} />
            <label onClick={() => this.checkChangeIconJob(1)}>
              {item.jobFieldName}
            </label>
            {this.renderJobChild(item.jobFieldId)}
          </div>;
        })}
      </div>
    );
  };

  render() {
    console.log(this.props.statusRenderModalForm);

    return <div className="Job-Field-List">{this.positionListJob()}</div>;
  }
}
