import React from "react";
import "./RemoveItemJobForm.css";
import ExitButton from "../../../Icons/Stop.png";

export default class RemoveItemJobForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statusRenderModalForm: "removeitemjobform"
    };
  }

  componentWillReceiveProps = nextProps => {
    this.setState({
      statusRenderModalForm: nextProps.statusRenderModalForm
    });
  };

  cancelRemoveItemJobForm = () => {
    this.setState({
      statusRenderModalForm: "none"
    });
    this.props.setStatusRenderModalForm("none");
  };

  render() {
    return (
      <div className="Remove-Item-Job">
        <div
          className="Remove-Item-Job-Form"
          style={
            this.state.statusRenderModalForm === "removeitemjobform"
              ? { display: "flex", flexDirection: "column" }
              : { display: "none" }
          }
        >
          <img
            className="exit-button"
            alt="exit"
            src={ExitButton}
            onClick={() => this.cancelRemoveItemJobForm()}
          />
          <p style={{ textAlign: "center", margin: "28px 0 0 0" }}>
            Xóa lưu trữ {this.props.setOptionJob} công việc ????????
          </p>
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
                style={{
                  color: "white",
                  backgroundColor: "green"
                }}
                type="button"
                value="Có"
              />
            </div>
            <div>
              <input
                style={{
                  color: "white",
                  backgroundColor: "red"
                }}
                type="button"
                value="Không"
                onClick={() => this.cancelRemoveItemJobForm()}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
