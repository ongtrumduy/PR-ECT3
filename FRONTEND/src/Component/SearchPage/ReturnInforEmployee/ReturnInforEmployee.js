import React from "react";
import request from "request";
import "./ReturnInfor.css";

import DetailInfor from "../../../Icons/Contacts.png";

export default class ReturnInforEployee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inforEmployeeList: [],
      checkvalidate: false
    };
  }

  returnInforEmployee = (
    callbackInforEmployee,
    _jobPositionId,
    _experienceYear,
    _experienceYearEqual,
    _certificateName,
    _degreeIdentification,
    _degreeSpeciality,
    _certificateDate
  ) => {
    var options = {
      method: "POST",
      url: "http://localhost:8081/receiveInforEmployeeList",
      headers: {
        "cache-control": "no-cache",
        Connection: "keep-alive",
        "Content-Length": "0",
        "Accept-Encoding": "gzip, deflate",
        Host: "localhost:8081",
        "Cache-Control": "no-cache",
        Accept: "*/*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        jobPositionId: _jobPositionId,
        experienceYear: _experienceYear,
        experienceYearEqual: _experienceYearEqual,
        certificateName: _certificateName,
        degreeIdentification: _degreeIdentification,
        degreeSpeciality: _degreeSpeciality,
        certificateDate: _certificateDate
      })
    };
    request(options, (error, response, body) => {
      if (error) throw new Error(error);
      console.log(body);
      let returnInforEmployee = JSON.parse(body);
      callbackInforEmployee(returnInforEmployee);
    });
  };

  receiveInforEmployeeList = _inforEmployeeList => {
    this.setState({
      inforEmployeeList: _inforEmployeeList
    });
  };

  sentToGetInforEmployeeList = () => {
    this.setState({
      checkvalidate: true
    });
    this.returnInforEmployee(
      this.inforemployeelist,
      this.props.jobPositionId,
      this.props.experienceYear,
      this.props.experienceYearEqual,
      this.props.certificateName,
      this.props.degreeIdentification,
      this.props.degreeSpeciality,
      this.props.certificateDate
    );
  };

  searchButtonPane = () => {
    return (
      <div>
        <input
          style={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "green",
            margin: "0px 0 15px 0"
          }}
          type="button"
          value="Tìm kiếm"
          onClick={() => this.sentToGetInforEmployeeList()}
        />
      </div>
    );
  };

  renderInforEmployeeTable = () => {
    return (
      <div>
        <table style={{ borderStyle: "groove", width: "100%" }}>
          {/* <tr>
            <th>Mã nhân viên</th>
            <th>Họ và tên</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Ngày hết hạn hợp đồng</th>
            <th>Loại hợp đồng</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
          <tr>
            <td>MS2015123</td>
            <td>Nguyễn Văn An</td>
            <td>Nam</td>
            <td>20-05-1988</td>
            <td>25-10-2020</td>
            <td>Phụ thuộc</td>
            <td style={{ color: "green" }}>Đang làm việc</td>
            <td>
              <img alt="detail-infor" src={DetailInfor} />
            </td>
          </tr>
          <tr>
            <td>MS2015124</td>
            <td>Trần Văn Bình</td>
            <td>Nam</td>
            <td>17-02-1988</td>
            <td>25-10-2020</td>
            <td>Phụ thuộc</td>
            <td style={{ color: "green" }}>Đang làm việc</td>
            <td>
              <img alt="detail-infor" src={DetailInfor} />
            </td>
          </tr>
          <tr>
            <td>MS2015122</td>
            <td>Vũ Thị Cúc</td>
            <td>Nữ</td>
            <td>17-02-1988</td>
            <td>25-10-2020</td>
            <td>Phụ thuộc</td>
            <td style={{ color: "green" }}>Đang làm việc</td>
            <td>
              <img alt="detail-infor" src={DetailInfor} />
            </td> 
           </tr> */}
        </table>
      </div>
    );
  };

  validateCheck = () => {
    if (
      this.state.checkvalidate &&
      (this.props.jobPositionId === "" ||
        this.props.experienceYear === "" ||
        this.props.experienceYearEqual === "" ||
        this.props.certificateName === "" ||
        this.props.degreeIdentification === "" ||
        this.props.degreeSpeciality === "" ||
        this.props.certificateDate === "")
    ) {
      return (
        <div>
          <small style={{ color: "red", fontWeight: "bold" }}>
            Bạn không được để trống các ô !!!!
          </small>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        {this.validateCheck()}
        {this.searchButtonPane()}
        {this.renderInforEmployeeTable()}
      </div>
    );
  }
}
