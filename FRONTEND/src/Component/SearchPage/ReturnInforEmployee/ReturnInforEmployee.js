import React from "react";
import request from "request";
import "./ReturnInfor.css";

import DetailInfor from "../../../Icons/Contacts.png";

export default class ReturnInforEployee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inforEmployeeList: [],
      checkvalidate: false,
      checkerror: "0"
    };
  }

  returnInforEmployee = (
    callbackInforEmployee,
    _jobPositionFieldId,
    _experienceYear,
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
        jobPositionFieldId: _jobPositionFieldId,
        experienceYear: _experienceYear,
        certificateName: _certificateName,
        degreeIdentification: _degreeIdentification,
        degreeSpeciality: _degreeSpeciality,
        certificateDate: _certificateDate
      })
    };
    request(options, (error, response, body) => {
      if (error) throw new Error(error);
      // console.log(body);
      if (body === "-999999") {
        this.setState({
          checkerror: "1"
        });
      } else {
        let returnInforEmployee = JSON.parse(body);
        callbackInforEmployee(returnInforEmployee);
      }
    });
  };

  setStatusRenderModalForm = (add_modal, _profileId) => {
    this.props.setStatusRenderModalForm(add_modal);
    this.props.setModalOptionJob(this.props.setOptionJob);
    let getProfileInfor = {
      profileId: _profileId
    };
    this.props.socket.emit("get-profile-infor", getProfileInfor);
  };

  receiveInforEmployeeList = _inforEmployeeList => {
    this.setState({
      inforEmployeeList: _inforEmployeeList,
      checkerror: "0"
    });
  };

  sentToGetInforEmployeeList = () => {
    this.setState({
      checkvalidate: true
    });
    this.returnInforEmployee(
      this.receiveInforEmployeeList,
      this.props.jobPositionFieldId,
      this.props.experienceYear,
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

  // renderInforEmployeeTable = () => {
  // if (this.state.checkerror === "1") {
  //   return (
  //     <div>
  //       <p style={{ fontWeight: "bold" }}>
  //         Không tìm được thông tin như yêu cầu !!!!!!!!!!!!
  //       </p>
  //     </div>
  //   );
  // } else if (this.state.checkerror === "0") {
  //   return (
  //     <div>
  //       <table style={{ borderStyle: "groove", width: "100%" }}>
  //         <thead>
  //           <tr>
  //             <th>Mã nhân viên</th>
  //             <th>Họ và tên</th>
  //             <th>Giới tính</th>
  //             <th>Ngày sinh</th>
  //             <th>Ngày hết hạn hợp đồng</th>
  //             <th>Loại hợp đồng</th>
  //             <th>Trạng thái</th>
  //             <th>Hành động</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {this.state.inforEmployeeList.map((item, index) => (
  //             <tr key={index}>
  //               <td>{item.employeeId}</td>
  //               <td>{item.fullname}</td>
  //               <td>{item.gender}</td>
  //               <td>{item.birthday}</td>
  //               <td>{item.certificateEndDate}</td>
  //               <td>Chính thức</td>
  //               <td style={{ color: "green" }}>{item.employeeStatus}</td>
  //               <td>
  //                 <img
  //                   alt="detail-infor"
  //                   style={{ cursor: "pointer" }}
  //                   src={DetailInfor}
  //                   onClick={() =>
  //                     this.setStatusRenderModalForm(
  //                       "showprofileinformodal",
  //                       item.profileId
  //                     )
  //                   }
  //                 />
  //               </td>
  //             </tr>
  //           ))}
  //         </tbody>
  //       </table>
  //     </div>
  //   );
  //   // }
  // };

  renderNewInforEmployeeTable = () => {
    return (
      <div>
        <table style={{ borderStyle: "groove", width: "100%" }}>
          <thead>
            <tr>
              <th>Họ và tên</th>
              <th>Vị trí công việc</th>
              <th>Trình độ chuyên môn</th>
              <th>Chuyên ngành</th>
              <th>Chứng chỉ</th>
              <th>Bằng cấp</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {this.state.inforEmployeeList.map((item, index) => (
              <tr key={index}>
                <td>{item.fullname}</td>
                <td>{item.jobPosition}</td>
                <td>{item.degreeIdentification}</td>
                <td>{item.degreeSpeciality}</td>
                <td>{item.certificateName}</td>
                <td>{item.degreeType}</td>
                <td>
                  <img
                    alt="detail-infor"
                    style={{ cursor: "pointer" }}
                    src={DetailInfor}
                    onClick={() =>
                      this.setStatusRenderModalForm(
                        "showprofileinformodal",
                        item.profileId
                      )
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    // }
  };

  // validateCheck = () => {
  //   if (
  //     this.state.checkvalidate &&
  //     (this.props.jobPositionFieldId === "" ||
  //       this.props.experienceYear === "" ||
  //       this.props.experienceYearEqual === "" ||
  //       this.props.certificateName === "" ||
  //       this.props.degreeIdentification === "" ||
  //       this.props.degreeSpeciality === "" ||
  //       this.props.certificateDate === "")
  //   ) {
  //     return (
  //       <div>
  //         <small style={{ color: "red", fontWeight: "bold" }}>
  //           Bạn không được để trống các ô !!!!
  //         </small>
  //       </div>
  //     );
  //   }
  // };

  render() {
    return (
      <div>
        {/* {this.validateCheck()} */}
        {this.searchButtonPane()}
        {this.renderNewInforEmployeeTable()}
      </div>
    );
  }
}
