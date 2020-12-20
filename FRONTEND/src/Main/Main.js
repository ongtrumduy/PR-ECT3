import React from "react";
import ioclient from "socket.io-client";

import "./Main.css";

import DashBoard from "../Component/DashBoard/DashBoard";

import RenderAllModal from "../Component/RenderAllModal/RenderAllModal/RenderAllModal";
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changeButton: false,
      statusRenderModalForm: "none",
      setOptionJob: "none"
    };
  }

  componentWillMount = () => {
    this.socket = ioclient("http://localhost:8081");
  };

  setStatusRenderModalForm = status => {
    this.setState({
      statusRenderModalForm: status
    });
  };

  setModalOptionJob = set_option_job => {
    this.setState({
      setOptionJob: set_option_job
    });
  };

  render() {
    return (
      <div className="main-page">
        <p style={{ fontWeight: "bold", fontSize: "25px" }}>
          APP QUẢN LÝ NHÂN SỰ
        </p>
        <DashBoard
          statusRenderModalForm={this.state.statusRenderModalForm}
          setStatusRenderModalForm={this.setStatusRenderModalForm}
          setOptionJob={this.state.setOptionJob}
          setModalOptionJob={this.setModalOptionJob}
          socket={this.socket}
        />
        <RenderAllModal
          statusRenderModalForm={this.state.statusRenderModalForm}
          setStatusRenderModalForm={this.setStatusRenderModalForm}
          setOptionJob={this.state.setOptionJob}
          setModalOptionJob={this.setModalOptionJob}
          socket={this.socket}
        />
      </div>
    );
  }
}
