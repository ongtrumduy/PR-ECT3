import React from "react";
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
      checkRemoveJob: true
    };
  }
  componentWillReceiveProps = nextProps => {
    if (nextProps.statusRenderModalForm === "none") {
      this.setState({
        checkRemoveJob: true
      });
    }
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
      return <JobChild JobId={JobId} />;
    }
  };

  positionListJob = () => {
    return (
      <div>
        <div>
          <img
            alt="icon-job-"
            src={
              this.state.changeIconJob && this.state.changeIdJob === 0
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
          <label onClick={() => this.checkChangeIconJob(0)}>
            Công nghệ kỹ thuật
          </label>
          {this.renderJobChild(0)}
        </div>
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
          <label onClick={() => this.checkChangeIconJob(1)}>Giáo dục</label>
          {this.renderJobChild(1)}
        </div>
      </div>
    );
  };

  render() {
    console.log(this.props.statusRenderModalForm);

    return <div className="Job-Field-List">{this.positionListJob()}</div>;
  }
}
