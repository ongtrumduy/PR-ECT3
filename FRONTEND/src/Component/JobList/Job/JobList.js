import React from "react";

import JobField from "./JobField";
import CreateEditPage from "../CreateEditPage/CreateEditPage";

export default class JobList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ height: "480px" }}>
        <div>
          <p
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              textAlign: "left"
            }}
          >
            Danh sách {this.props.setOptionJob} công việc
          </p>
          <div className="Job-List">
            <div className="Job-Branch-List">
              <JobField
                statusRenderModalForm={this.props.statusRenderModalForm}
                setStatusRenderModalForm={this.props.setStatusRenderModalForm}
                setModalOptionJob={this.props.setModalOptionJob}
                setOptionJob={this.props.setOptionJob}
                socket={this.props.socket}
              />
            </div>
            <div className="Create-Edit-Pane">
              <CreateEditPage
                statusRenderModalForm={this.props.statusRenderModalForm}
                setStatusRenderModalForm={this.props.setStatusRenderModalForm}
                setModalOptionJob={this.props.setModalOptionJob}
                setOptionJob={this.props.setOptionJob}
                socket={this.props.socket}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
