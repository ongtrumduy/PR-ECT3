import React from "react";

import JobField from "./JobField";
import CreateEditPage from "../CreateEditPage/CreateEditPage";

export default class JobList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
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
              <JobField />
            </div>
            <div className="Create-Edit-Pane">
              <CreateEditPage
                setStatusRenderModalForm={this.props.setStatusRenderModalForm}
                setModalOptionJob={this.props.setModalOptionJob}
                setOptionJob={this.props.setOptionJob}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
