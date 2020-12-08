import React from "react";
import "./Main.css";

import Search from "../Component/SearchPage/SearchPage/SearchPage";
import ChangeEmployee from "../Component/WorkPositionList/WorkPositionList/WorkPositionList";
import AddPositionWorkForm from "../Component/WorkPositionList/AddPositionWorkForm/AddPositionWorkForm";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changeButton: false
    };
  }

  handleChangeButton = () => {
    if (this.state.changeButton) {
      this.setState({
        changeButton: false
      });
    } else {
      this.setState({
        changeButton: true
      });
    }
  };

  changeFunction = () => {
    if (this.state.changeButton) {
      return <Search />;
    } else {
      return <ChangeEmployee />;
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
          <AddPositionWorkForm />
      </div>
    );
  }
}
