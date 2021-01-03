import React from "react";

export default class CreateEditPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobName: "",
      jobKind: "",
      jobId: "",
      jobGrandId: "",
      jobGrandName: "",
      jobGrandList: []
    };
  }

  componentWillMount = () => {
    this.props.socket.on("return-field-to-edit-page", data => {
      this.setState({
        jobId: data.jobFieldId,
        jobName: data.jobFieldName,
        jobGrandId: data.jobGrandId,
        jobGrandName: data.jobGrandName,
        jobKind: data.jobKind,
        jobGrandList: data.jobGrandList
      });
    });
  };

  setStatusRenderModalForm = add_modal => {
    this.props.setStatusRenderModalForm(add_modal);
    this.props.setModalOptionJob(this.props.setOptionJob);
  };

  handleChangeJobName = event => {
    this.setState({
      jobName: event.target.value
    });
  };

  handleChangeJobGrandId = event => {
    this.setState({
      jobGrandId: event.target.value
    });
  };

  updataDataJobKind = () => {
    let data = {
      jobId: this.state.jobId,
      jobKind: this.state.jobKind,
      jobName: this.state.jobName,
      jobOptionName: this.props.setOptionJob,
      jobGrandId: this.state.jobGrandId,
      jobGrandName: this.state.jobGrandName
    };

    this.props.socket.emit("sent-to-update-kind", data);
  };

  renderCreateEditPage = () => {
    return (
      <div>
        <div style={{ margin: "20px 0 20px 0" }}>
          <input
            style={{
              color: "white",
              backgroundColor: "green",
              margin: "5px 0 0 0",
              width: "80px"
            }}
            type="button"
            value="Thêm nhãn"
            onClick={() => this.setStatusRenderModalForm("addjobfieldform")}
          />
          <input
            style={{
              color: "white",
              backgroundColor: "green",
              margin: "5px 0 0 0",
              width: "80px"
            }}
            type="button"
            value="Thêm con"
            onClick={() => this.setStatusRenderModalForm("addjobchildform")}
          />
        </div>
        <div>
          <p>
            Tên <label style={{ color: "red" }}>(*)</label>
          </p>
          <input
            style={{ width: "95%" }}
            type="text"
            value={this.state.jobName}
            onChange={this.handleChangeJobName}
          />
        </div>
        <p>
          Nhãn cha <label style={{ color: "red" }}>(*)</label>
        </p>
        {/* <input style={{ width: "80%" }} type="text" /> */}
        <div>
          <select
            style={{ width: "95%", height: "21px" }}
            jobGrandId={this.state.jobGrandId}
            onChange={this.handleChangeJobGrandId}
          >
            {this.state.jobGrandList.map((item, index) => {
              return (
                <option key={index} value={item.jobGrandId}>
                  {item.jobGrandName}
                </option>
              );
            })}
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
          <div style={{ width: "70%" }}></div>
          <div>
            <input
              style={{
                color: "white",
                backgroundColor: "green"
              }}
              type="button"
              value="Lưu"
              onClick={() => this.updataDataJobKind()}
            />
          </div>
        </div>
      </div>
    );
  };

  render() {
    return <div>{this.renderCreateEditPage()}</div>;
  }
}
