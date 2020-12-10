import React from "react";
import "./AddJobChildForm.css";
import ExitButton from "../../../Icons/Stop.png";

export default class AddJobChildForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statusAddJobChildForm: false
    };
  }

  componentWillReceiveProps = nextProps => {
    this.setState({
      statusAddJobChildForm: nextProps.statusAddJobChildForm
    });
  };

  cancelAddJobChildForm = () => {
    this.setState({
      statusAddJobChildForm: false
    });
    this.props.setStatusAddJobChildForm(false);
  };

  render() {
    return (
      <div
        className="Add-Job-Child"
        style={
          this.state.statusAddJobChildForm
            ? { display: "flex" }
            : { display: "none" }
        }
      >
        <div
          className="Add-Job-Child-Form"
          style={
            this.state.statusAddJobChildForm
              ? { display: "flex", flexDirection: "column" }
              : { display: "none" }
          }
        >
          <img
            className="exit-button"
            alt="exit"
            src={ExitButton}
            onClick={() => this.cancelAddJobChildForm()}
          />
          <p style={{ textAlign: "center", margin: "10px 0 0 0" }}>
            Thêm con lĩnh vực công việc
          </p>
          <p>
            Tên <label style={{ color: "red" }}>(*)</label>
          </p>
          <input type="text" />
          <p>
            Chọn thông tin nhãn <label style={{ color: "red" }}>(*)</label>
          </p>
          <div className="select-add-job-child">
            <select>
              <option>Công nghệ kĩ thuật</option>
              <option>Giáo dục</option>
            </select>
          </div>
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
                onClick={() => this.cancelAddJobChildForm()}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
