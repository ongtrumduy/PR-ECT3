import React from "react";

import JobTypeField from "./JobTypeField";
import CreateEditPage from "../CreateEditPage/CreateEditPage";

export default class JobTypeList extends React.Component {
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
            Danh sách lĩnh vực công việc
          </p>
          <div className="Job-Type-List">
            <div className="Job-Type-Branch-List">
              <JobTypeField />
            </div>
            <div className="Create-Edit-Pane">
              <CreateEditPage
                setStatusAddJobFieldForm={this.props.setStatusAddJobFieldForm}
                setStatusAddJobChildForm={this.props.setStatusAddJobChildForm}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
