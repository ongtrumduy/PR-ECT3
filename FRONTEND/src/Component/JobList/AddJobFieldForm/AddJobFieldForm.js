import React from "react";
import "./AddJobFieldForm.css";
import ExitButton from "../../../Icons/Stop.png";

export default class AddJobFieldForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statusRenderModalForm: "addjobfieldform"
    };
  }

  componentWillReceiveProps = nextProps => {
    this.setState({
      statusRenderModalForm: nextProps.statusRenderModalForm
    });
  };

  cancelAddJobFieldForm = () => {
    this.setState({
      statusRenderModalForm: "none"
    });
    this.props.setStatusRenderModalForm("none");
  };

  render() {
    return (
      <div className="Add-Job-Field">
        <div
          className="Add-Job-Field-Form"
          style={
            this.state.statusRenderModalForm === "addjobfieldform"
              ? { display: "flex", flexDirection: "column" }
              : { display: "none" }
          }
        >
          <img
            className="exit-button"
            alt="exit"
            src={ExitButton}
            onClick={() => this.cancelAddJobFieldForm()}
          />
          <p style={{ textAlign: "center", margin: "10px 0 0 0" }}>
            Thêm nhãn {this.props.setOptionJob} công việc
          </p>
          <p>
            Tên <label style={{ color: "red" }}>(*)</label>
          </p>
          <input type="text" />
          <p>
            Chọn thông tin cha <label style={{ color: "red" }}>(*)</label>
          </p>
          <div className="select-add-job-field">
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
                onClick={() => this.cancelAddJobFieldForm()}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
