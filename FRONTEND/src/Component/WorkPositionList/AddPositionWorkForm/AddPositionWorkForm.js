import React from "react";
import "./AddPositionWorkForm.css";
import ExitButton from "../../../Icons/Stop.png";

export default class AddPositionWorkForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statusAddForm: false
    };
  }

  componentWillReceiveProps = nextProps => {
    this.setState({
      statusAddForm: nextProps.statusAddForm
    });
  };

  cancelAddForm = () => {
    this.setState({
      statusAddForm: false
    });
  };

  render() {
    return (
      <div
        className="Add-Position-Work"
        style={
          this.state.statusAddForm ? { display: "flex" } : { display: "none" }
        }
      >
        <div
          className="Add-Position-Work-Form"
          style={
            this.state.statusAddForm
              ? { display: "flex", flexDirection: "column" }
              : { display: "none" }
          }
        >
          <img
            className="exit-button"
            alt="exit"
            src={ExitButton}
            onClick={() => this.cancelAddForm()}
          />
          <p style={{ textAlign: "center" }}>Thêm vị trí công việc</p>
          <p>
            Tên <label style={{ color: "red" }}>(*)</label>
          </p>
          <input type="text" />
          <p>
            Chọn thông tin cha <label style={{ color: "red" }}>(*)</label>
          </p>
          <input type="text" />
          <p>
            Nhãn <label style={{ color: "red" }}>(*)</label>
          </p>
          <input type="text" />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              margin: "10px 0 10px 0"
            }}
          >
            <div>
              <input
                style={{ color: "white", backgroundColor: "green" }}
                type="button"
                value="Lưu"
              />
            </div>
            <div>
              <input
                style={{ color: "white", backgroundColor: "red" }}
                type="button"
                value="Đóng"
                onClick={() => this.cancelAddForm()}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
