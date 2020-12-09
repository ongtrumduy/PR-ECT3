import React from "react";
import "./Main.css";

import Search from "../Component/SearchPage/SearchPage/SearchPage";
import WorkPositionList from "../Component/WorkPositionList/WorkPositionList/WorkPositionList";
import AddPositionWorkForm from "../Component/WorkPositionList/AddPositionWorkForm/AddPositionWorkForm";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changeButton: false,
      statusAddForm: true
    };
  }

  handleChangeButton = () => {
    if (this.state.changeButton) {
      this.setState({
        changeButton: false,
        statusAddForm: false
      });
    } else {
      this.setState({
        changeButton: true,
        statusAddForm: false
      });
    }
  };

  setStatusAddForm = status => {
    this.setState({
      statusAddForm: status
    });
  };

  changeFunction = () => {
    if (this.state.changeButton) {
      return <Search />;
    } else {
      return <WorkPositionList setStatusAddForm={this.setStatusAddForm} />;
    }
  };

  render() {
    return (
      <div className="main-page">
        <p style={{ fontWeight: "bold", fontSize: "25px" }}>
          APP QUẢN LÝ NHÂN SỰ
        </p>
        <input
          type="button"
          value="Thay đổi"
          onClick={() => this.handleChangeButton()}
        />
        <div className="main-content"> {this.changeFunction()}</div>
        <AddPositionWorkForm statusAddForm={this.state.statusAddForm} />
      </div>
    );
  }
}
