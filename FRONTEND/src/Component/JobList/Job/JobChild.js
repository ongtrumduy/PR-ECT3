import React from "react";
import request from "request";

import ArrowUp from "../../../Icons/Arrow Up.png";
import ArrowRight from "../../../Icons/Arrow Right.png";
import JobChildIcon from "../../../Icons/Star On.png";
import CheckEmpty from "../../../Icons/Checkbox Empty.png";
import CheckFull from "../../../Icons/Checkbox Full.png";
export default class JobChild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changeIconChild: false,
      jobChildId: "",
      checkRemoveChild: true,
      jobChildList: []
    };
  }

  receiveJobChildDataList = (
    _jobChildOptionName,
    _jobFieldId,
    callbackJobChild
  ) => {
    var options = {
      method: "POST",
      url: "http://localhost:8081/receiveJobChildList",
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
        jobChildOptionName: _jobChildOptionName,
        jobFieldId: _jobFieldId
      })
    };
    request(options, (error, response, body) => {
      if (error) throw new Error(error);
      console.log(body);
      let receiveJobChild = JSON.parse(body);
      callbackJobChild(receiveJobChild);
    });
  };

  componentWillMount = () => {
    this.receiveJobChildDataList(
      this.props.setOptionJob,
      this.props.jobFieldId,
      this.receiveJobChildList
    );
    this.props.socket.on("return-list-job-child", data => {
      // console.log("Trả về");
      // console.log(data);
      this.receiveJobChildList(data);
    });
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.statusRenderModalForm === "none") {
      this.setState({
        checkRemoveChild: true
      });
    }
    if (this.state.jobFieldId !== nextProps.jobFieldId) {
      this.receiveJobChildDataList(
        nextProps.setOptionJob,
        nextProps.jobFieldId,
        this.receiveJobChildList
      );
    }
    this.props.socket.on("return-list-job-child", data => {
      // console.log("Trả về");
      // console.log(data);
      this.receiveJobChildList(data);
    });
  };

  receiveJobChildList = _jobChildList => {
    this.setState({
      jobChildList: _jobChildList
    });
  };

  sentToUpdateChild = (_jobChildId, _jobFieldId) => {
    let dataSentToUpdateChild = {
      jobFieldId: _jobFieldId,
      jobChildId: _jobChildId,
      jobFieldOptionName: this.props.setOptionJob
    };
    this.props.socket.emit("sent-to-edit-child", dataSentToUpdateChild);
    this.checkChangeIconChild(_jobChildId);
  };

  checkChangeIconChild = _jobChildId => {
    if (this.state.changeIconChild) {
      this.setState({
        changeIconChild: false,
        jobChildId: _jobChildId
      });
      this.setState({
        changeIconChild: true,
        jobChildId: _jobChildId
      });
    }
  };

  checkCheckRemoveChild = () => {
    if (this.state.checkRemoveChild) {
      this.setState({
        checkRemoveChild: false
      });
    }
    this.props.setStatusRenderModalForm("removeitemjobform");
    this.props.setModalOptionJob(this.props.setOptionJob);
  };

  positionListChild = () => {
    return (
      <div>
        {this.state.jobChildList.map((item, index) => (
          <div key={index}>
            <div>
              <img
                alt="icon-job-child"
                src={
                  this.state.changeIconChild &&
                  this.state.jobChildId === item.jobChildId
                    ? ArrowRight
                    : ArrowUp
                }
              />
              <img
                alt=""
                src={this.state.checkRemoveChild ? CheckEmpty : CheckFull}
                onClick={() => this.checkCheckRemoveChild()}
              />
              <img alt="" src={JobChildIcon} />
              <label
                onClick={() =>
                  this.sentToUpdateChild(item.jobChildId, this.props.jobFieldId)
                }
              >
                {item.jobChildName}
              </label>
            </div>
          </div>
        ))}
      </div>
    );
  };

  render() {
    return (
      <div className="Position-Child-List">{this.positionListChild()}</div>
    );
  }
}
