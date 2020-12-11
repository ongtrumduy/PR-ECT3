import React from "react";

import "./Job.css";

import JobList from "./JobList";

export default class JobActivity extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <JobList
          setStatusRenderModalForm={this.props.setStatusRenderModalForm}
          setModalOptionJob={this.props.setModalOptionJob}
          setOptionJob={this.props.setOptionJob}
        />
      </div>
    );
  }
}
