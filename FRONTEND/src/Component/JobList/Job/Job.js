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
          statusRenderModalForm={this.props.statusRenderModalForm}
          setStatusRenderModalForm={this.props.setStatusRenderModalForm}
          setModalOptionJob={this.props.setModalOptionJob}
          setOptionJob={this.props.setOptionJob}
          socket={this.props.socket}
        />
      </div>
    );
  }
}
