import React from "react";

import "./DetailInforModal.css";

import DefaultAvatar from "../../../Icons/a.jpg";
import ExitButton from "../../../Icons/Stop.png";

export default class DetailInfor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statusRenderModalForm: "showprofileinformodal",
      employeeId: "",
      employeeStatus: "",
      employeeFullname: "",
      employeeGender: "",
      employeeBirthday: "",
      employeeCitizenId: ""
    };
  }

  componentWillMount = () => {
    this.props.socket.on("return-all-infor", data => {
      console.log(data);
      this.setState({
        employeeId: data.employeeId,
        employeeStatus: data.employeeStatus,
        employeeFullname: data.fullname,
        employeeGender: data.gender,
        employeeBirthday: data.birthday,
        employeeCitizenId: data.citizenId
      });
    });
  };

  componentWillReceiveProps = nextProps => {
    this.setState({
      statusRenderModalForm: nextProps.statusRenderModalForm
    });
    this.props.socket.on("return-all-infor", data => {
      console.log(data);
      this.setState({
        employeeId: data.employeeId,
        employeeStatus: data.employeeStatus,
        employeeFullname: data.fullname,
        employeeGender: data.gender,
        employeeBirthday: data.birthday,
        employeeCitizenId: data.citizenId
      });
    });
  };

  cancelDetailInfor = () => {
    this.setState({
      statusRenderModalForm: "none"
    });
    this.props.setStatusRenderModalForm("none");
  };

  render() {
    return (
      <div
        className="Detail-Infor"
        style={
          this.state.statusRenderModalForm === "showprofileinformodal"
            ? { display: "flex", flexDirection: "column" }
            : { display: "none" }
        }
      >
        <div
          className="Detail-Infor-Modal"
          style={
            this.state.statusRenderModalForm === "showprofileinformodal"
              ? { display: "flex", flexDirection: "column" }
              : { display: "none" }
          }
        >
          <p style={{ textAlign: "center", fontSize: "22px" }}>
            Thông tin nhân viên
          </p>
          <img
            className="exit-button"
            alt="exit"
            src={ExitButton}
            onClick={() => this.cancelDetailInfor()}
          />
          <div className="Detail-Infor-Content">
            <div className="Detail-Infor-Avatar">
              <img
                style={{ width: "140px", height: "160px" }}
                alt=""
                src={DefaultAvatar}
              />
            </div>
            <div className="Detail-Infor-Atribute-0">
              <div>
                <label>Mã nhân viên &nbsp; &nbsp;</label>
                <label>{this.state.employeeId}</label>
              </div>
              <div>
                <label>Họ và tên &nbsp; &nbsp;</label>
                <label>{this.state.employeeFullname}</label>
              </div>
              <div>
                <label>Ngày sinh &nbsp; &nbsp;</label>
                <label>{this.state.employeeBirthday}</label>
              </div>
              <div>
                <label>Trạng thái &nbsp; &nbsp;</label>
                <label>{this.state.employeeStatus}</label>
              </div>
              <div>
                <label>Email công ty &nbsp; &nbsp;</label>
                {/* <label>nva.vnist@gmail.com</label> */}
              </div>
              <div>
                <label>Ngày bắt đầu làm việc &nbsp; &nbsp;</label>
                {/* <label>Mã nhân viên</label> */}
              </div>
              <div>
                <label>Số CMND/Hộ chiếu &nbsp; &nbsp;</label>
                <label>{this.state.employeeCitizenId}</label>
              </div>
              <div>
                <label>Nơi cấp &nbsp; &nbsp;</label>
                {/* <label>Nam Định</label> */}
              </div>
              <div>
                <label>Tôn giáo &nbsp; &nbsp;</label>
                {/* <label>Không</label> */}
              </div>
            </div>
            <div className="Detail-Infor-Atribute-1">
              <div>
                <label>Mã số chấm công &nbsp; &nbsp;</label>
                {/* <label>123456</label> */}
              </div>
              <div>
                <label>Giới tính &nbsp; &nbsp;</label>
                <label>{this.state.employeeGender}</label>
              </div>
              <div>
                <label>Nơi sinh &nbsp; &nbsp;</label>
                {/* <label>Hải Phương - Hải Hậu - Nam Định</label> */}
              </div>
              <div>
                <label>Chức vụ &nbsp; &nbsp;</label>
                {/* <label>Giám đốc</label> */}
              </div>
              <div>
                <label>Tình trạng hôn nhân &nbsp; &nbsp;</label>
                {/* <label>Độc thân</label> */}
              </div>
              <div>
                <label>Ngày nghỉ việc &nbsp; &nbsp;</label>
                {/* <label>Mã nhân viên</label> */}
              </div>
              <div>
                <label>Ngày cấp &nbsp; &nbsp;</label>
                {/* <label>20-10-2015</label> */}
              </div>
              <div>
                <label>Dân tộc &nbsp; &nbsp;</label>
                {/* <label>Kinh</label> */}
              </div>
              <div>
                <label>Quốc tịch &nbsp; &nbsp;</label>
                {/* <label>Việt Nam</label> */}
              </div>
            </div>
          </div>
          <div>
            <input
              style={{
                float: "right",
                margin: "20px 50px 0 0",
                width: "60px",
                backgroundColor: "red",
                color: "white"
              }}
              type="button"
              value="Đóng"
              onClick={() => this.cancelDetailInfor()}
            />
          </div>
        </div>
      </div>
    );
  }
}
