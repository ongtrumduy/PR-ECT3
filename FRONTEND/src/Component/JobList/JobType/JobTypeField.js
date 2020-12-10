import React from "react";
import JobTypeChild from "./JobTypeChild";

import ArrowUp from "../../../Icons/Arrow Up.png";
import ArrowRight from "../../../Icons/Arrow Right.png";
import JobTypeIcon from "../../../Icons/Button White Stop.png";

export default class JobTypeField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changeIconJobType: false,
      changeIdJobType: -1
    };
  }

  checkChangeIconJobType = JobTypeId => {
    if (this.state.changeIconJobType) {
      this.setState({
        changeIconJobType: false,
        changeIdJobType: JobTypeId
      });
    } else {
      this.setState({
        changeIconJobType: true,
        changeIdJobType: JobTypeId
      });
    }
  };

  renderJobTypeChild = JobTypeId => {
    if (
      this.state.changeIconJobType &&
      this.state.changeIdJobType === JobTypeId
    ) {
      return <JobTypeChild JobTypeId={JobTypeId} />;
    }
  };

  positionListJobType = () => {
    return (
      <div>
        <div>
          <img
            alt="icon-job-type"
            src={
              this.state.changeIconJobType && this.state.changeIdJobType === 0
                ? ArrowRight
                : ArrowUp
            }
          />
          <img alt="" src={JobTypeIcon} />
          <label onClick={() => this.checkChangeIconJobType(0)}>
            Công nghệ kỹ thuật
          </label>
          {this.renderJobTypeChild(0)}
        </div>
        <div>
          <img
            alt="icon-job-type"
            src={
              this.state.changeIconJobType && this.state.changeIdJobType === 1
                ? ArrowRight
                : ArrowUp
            }
          />
          <img alt="" src={JobTypeIcon} />
          <label onClick={() => this.checkChangeIconJobType(1)}>Giáo dục</label>
          {this.renderJobTypeChild(1)}
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="Job-Type-Field-List">{this.positionListJobType()}</div>
    );
  }
}
