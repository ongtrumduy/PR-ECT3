import React from "react";
import "./Main.css";

import DashBoard from "../Component/DashBoard/DashBoard";

import AddJobFieldForm from "../Component/JobList/AddJobFieldForm/AddJobFieldForm";
import AddJobChildForm from "../Component/JobList/AddJobChildForm/AddJobChildForm";

import DetailInforModal from "../Component/SearchPage/DetailInforModal/DetailInforModal";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changeButton: false,
      statusAddJobFieldForm: true,
      statusAddJobChildForm: true
    };
  }

  handleChangeButton = () => {
    if (this.state.changeButton) {
      this.setState({
        changeButton: false,
        statusAddJobFieldForm: false,
        statusAddJobChildForm: false
      });
    } else {
      this.setState({
        changeButton: true,
        statusAddJobFieldForm: false,
        statusAddJobChildForm: false
      });
    }
  };

  setStatusAddJobFieldForm = status => {
    this.setState({
      statusAddJobFieldForm: status
    });
  };

  setStatusAddJobChildForm = status => {
    this.setState({
      statusAddJobChildForm: status
    });
  };

  render() {
    return (
      <div className="main-page">
        <p style={{ fontWeight: "bold", fontSize: "25px" }}>
          APP QUẢN LÝ NHÂN SỰ
        </p>
        <DashBoard
          setStatusAddJobFieldForm={this.setStatusAddJobFieldForm}
          setStatusAddJobChildForm={this.setStatusAddJobChildForm}
        />
        <AddJobChildForm
          statusAddJobChildForm={this.state.statusAddJobChildForm}
          setStatusAddJobChildForm={this.setStatusAddJobChildForm}
        />
        <AddJobFieldForm
          statusAddJobFieldForm={this.state.statusAddJobFieldForm}
          setStatusAddJobFieldForm={this.setStatusAddJobFieldForm}
        />
        <DetailInforModal />
      </div>
    );
  }
}
