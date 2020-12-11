import React from "react";

import "./DashBoard.css";

import SearchPage from "../SearchPage/SearchPage/SearchPage";
import JobActivity from "../JobList/JobActivity/JobActivity";
import JobPosition from "../JobList/JobPosition/JobPosition";
import JobType from "../JobList/JobType/JobType";

export default class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chooseInterface: "1"
    };
  }

  selectInterfaceRender = () => {
    switch (this.state.chooseInterface) {
      case "1":
        return (
          <JobType
            setStatusRenderModalForm={this.props.setStatusRenderModalForm}
          />
        );
      case "2":
        return (
          <JobPosition
            setStatusRenderModalForm={this.props.setStatusRenderModalForm}
          />
        );
      case "3":
        return (
          <JobActivity
            setStatusRenderModalForm={this.props.setStatusRenderModalForm}
          />
        );
      case "4":
        return <SearchPage />;
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
            onClick={() => this.handleSelectInterfaceRender("1")}
          />
        </div>
        <div>
          <input
            type="button"
            value="Vị trí công việc"
            onClick={() => this.handleSelectInterfaceRender("2")}
          />
        </div>
        <div>
          <input
            type="button"
            value="Hoạt động công việc"
            onClick={() => this.handleSelectInterfaceRender("3")}
          />
        </div>
        <div>
          <input
            type="button"
            value="Tìm kiếm nhân sự giới thiệu"
            onClick={() => this.handleSelectInterfaceRender("4")}
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
