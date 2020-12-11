import React from "react";
import "./JobType.css";

import JobTypeList from "./JobTypeList";

export default class JobActivity extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <JobTypeList
          setStatusRenderModalForm={this.props.setStatusRenderModalForm}
        />
      </div>
    );
  }
}
