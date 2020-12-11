import React from "react";
import "./AddJobChildForm.css";
import ExitButton from "../../../Icons/Stop.png";

export default class AddJobChildForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statusRenderModalForm: "addjobchildform"
    };
  }

  componentWillReceiveProps = nextProps => {
    this.setState({
      statusRenderModalForm: nextProps.statusRenderModalForm
    });
  };

  cancelAddJobChildForm = () => {
    this.setState({
      statusAddJobChildForm: "none"
    });
    this.props.setStatusRenderModalForm("none");
  };

  render() {
    return (
      <div className="Add-Job-Child">
        <div
          className="Add-Job-Child-Form"
          style={
            this.state.statusRenderModalForm === "addjobchildform"
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
            Thêm con {this.props.setOptionJob} công việc
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
