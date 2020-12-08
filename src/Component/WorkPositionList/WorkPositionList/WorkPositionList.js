import React from "react";
import "./WorkPositionList.css";

import PositionGrand from "../PositionList/PositionGrand";
import CreateEditPage from "../CreateEditPage/CreateEditPage";
import AddPositionWorkForm from "../AddPositionWorkForm/AddPositionWorkForm";

export default class WorkPositionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <p
            style={{ fontSize: "24px", fontWeight: "bold", textAlign: "left" }}
          >
            Danh sách vị trí công việc
          </p>
          <div className="Work-Position-List">
            <div className="Position-Branch-List">
              <PositionGrand />
            </div>
            <div className="Create-Edit-Pane">
              <CreateEditPage />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
