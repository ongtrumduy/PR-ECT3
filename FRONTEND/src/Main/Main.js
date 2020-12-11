import React from "react";
import "./Main.css";

import DashBoard from "../Component/DashBoard/DashBoard";

import RenderAllModal from "../Component/RenderAllModal/RenderAllModal";
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changeButton: false,
      statusRenderModalForm: "none"
    };
  }

  setStatusRenderModalForm = status => {
    this.setState({
      statusRenderModalForm: status
    });
  };

  render() {
    return (
      <div className="main-page">
        <p style={{ fontWeight: "bold", fontSize: "25px" }}>
          APP QUẢN LÝ NHÂN SỰ
        </p>
        <DashBoard setStatusRenderModalForm={this.setStatusRenderModalForm} />
        <RenderAllModal
          statusRenderModalForm={this.state.statusRenderModalForm}
          setStatusRenderModalForm={this.setStatusRenderModalForm}
        />
        {/* <DetailInforModal /> */}
      </div>
    );
  }
}
