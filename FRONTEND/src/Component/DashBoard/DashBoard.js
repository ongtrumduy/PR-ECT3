import React from "react";

import "./DashBoard.css";

import SearchPage from "../SearchPage/SearchPage/SearchPage";
import Job from "../JobList/Job/Job";

export default class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chooseInterface: "none"
    };
  }

  selectInterfaceRender = () => {
    if (this.state.chooseInterface === "none") {
      return (
        <SearchPage
          statusRenderModalForm={this.props.statusRenderModalForm}
          setStatusRenderModalForm={this.props.setStatusRenderModalForm}
          setModalOptionJob={this.props.setModalOptionJob}
          setOptionJob={this.state.chooseInterface}
          socket={this.props.socket}
        />
      );
    } else {
      return (
        <Job
          statusRenderModalForm={this.props.statusRenderModalForm}
          setStatusRenderModalForm={this.props.setStatusRenderModalForm}
          setModalOptionJob={this.props.setModalOptionJob}
          setOptionJob={this.state.chooseInterface}
          socket={this.props.socket}
        />
      );
    }
  };

  handleSelectInterfaceRender = _chooseInterface => {
    this.setState({
      chooseInterface: _chooseInterface
    });
  };

  renderDashBoard = () => {
    return (
      <div className="Render-Dashboard">
        <div>
          <input
            type="button"
            value="Lĩnh vực công việc"
            onClick={() => this.handleSelectInterfaceRender("lĩnh vực")}
          />
        </div>
        <div>
          <input
            type="button"
            value="Vị trí công việc"
            onClick={() => this.handleSelectInterfaceRender("vị trí")}
          />
        </div>
        <div>
          <input
            type="button"
            value="Hoạt động công việc"
            onClick={() => this.handleSelectInterfaceRender("hoạt động")}
          />
        </div>
        <div>
          <input
            type="button"
            value="Tìm kiếm nhân sự gói thầu"
            onClick={() => this.handleSelectInterfaceRender("none")}
          />
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <div>{this.renderDashBoard()}</div>
        <div className="Render-Interface">{this.selectInterfaceRender()}</div>
      </div>
    );
  }
}
