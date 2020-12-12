import React from "react";

import ArrowUp from "../../../Icons/Arrow Up.png";
import ArrowRight from "../../../Icons/Arrow Right.png";
import ChildIcon from "../../../Icons/Star On.png";
import CheckEmpty from "../../../Icons/Checkbox Empty.png";
import CheckFull from "../../../Icons/Checkbox Full.png";
export default class PositionChild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changeIconChild: false,
      changeIdChild: -1,
      checkRemoveJob: true
    };
  }

  checkChangeIconChild = ChildId => {
    if (this.state.changeIconChild) {
      this.setState({
        changeIconChild: false,
        changeIdChild: ChildId
      });
      this.setState({
        changeIconChild: true,
        changeIdChild: ChildId
      });
    }
  };

  checkCheckRemoveJob = () => {
    if (this.state.checkRemoveJob) {
      this.setState({
        checkRemoveJob: false
      });
    } else {
      this.setState({
        checkRemoveJob: true
      });
    }
  };

  positionListChild = JobId => {
    switch (JobId) {
      case 0:
        return (
          <div>
            <div>
              <img
                alt="icon-Child "
                src={
                  this.state.changeIconChild && this.state.changeIdChild === 0
                    ? ArrowRight
                    : ArrowUp
                }
              />
              <img
                alt=""
                src={this.state.checkRemoveJob ? CheckEmpty : CheckFull}
                onClick={() => this.checkCheckRemoveJob()}
              />
              <img alt="" src={ChildIcon} />
              <label onClick={() => this.checkChangeIconChild(0)}>
                Giám sát kỹ thuật an toàn thông tin
              </label>
            </div>
            <div>
              <img
                alt="icon-Child "
                src={
                  this.state.changeIconChild && this.state.changeIdChild === 1
                    ? ArrowRight
                    : ArrowUp
                }
              />
              <img
                alt=""
                src={this.state.checkRemoveJob ? CheckEmpty : CheckFull}
                onClick={() => this.checkCheckRemoveJob()}
              />
              <img alt="" src={ChildIcon} />
              <label onClick={() => this.checkChangeIconChild(1)}>
                Giảng dạy đào tạo kĩ thuật
              </label>
            </div>
            <div>
              <img
                alt="icon-Child "
                src={
                  this.state.changeIconChild && this.state.changeIdChild === 2
                    ? ArrowRight
                    : ArrowUp
                }
              />
              <img
                alt=""
                src={this.state.checkRemoveJob ? CheckEmpty : CheckFull}
                onClick={() => this.checkCheckRemoveJob()}
              />
              <img alt="" src={ChildIcon} />
              <label onClick={() => this.checkChangeIconChild(2)}>
                Quản lý hệ thống an toàn thông tin
              </label>
            </div>
          </div>
        );

      case 1:
        return (
          <div>
            <div>
              <img
                alt="icon-Child "
                src={
                  this.state.changeIconChild && this.state.changeIdChild === 0
                    ? ArrowRight
                    : ArrowUp
                }
              />
              <img
                alt=""
                src={this.state.checkRemoveJob ? CheckEmpty : CheckFull}
                onClick={() => this.checkCheckRemoveJob()}
              />
              <img alt="" src={ChildIcon} />
              <label onClick={() => this.checkChangeIconChild(0)}>
                Giảng dạy
              </label>
            </div>
            <div>
              <img
                alt="icon-Child "
                src={
                  this.state.changeIconChild && this.state.changeIdChild === 1
                    ? ArrowRight
                    : ArrowUp
                }
              />
              <img
                alt=""
                src={this.state.checkRemoveJob ? CheckEmpty : CheckFull}
                onClick={() => this.checkCheckRemoveJob()}
              />
              <img alt="" src={ChildIcon} />
              <label onClick={() => this.checkChangeIconChild(1)}>
                Nghiên cứu phát triển ứng dụng công nghệ thông tin
              </label>
            </div>
          </div>
        );
    }
  };

  render() {
    return (
      <div className="Position-Child-List">
        {this.positionListChild(this.props.JobId)}
      </div>
    );
  }
}
