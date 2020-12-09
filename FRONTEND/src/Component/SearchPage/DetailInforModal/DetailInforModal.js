import React from "react";

import "./DetailInforModal.css";

import DefaultAvatar from "../../../Icons/a.jpg";

export default class DetailInfor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Detail-Infor">
        <div className="Detail-Infor-Modal">
          <p style={{ textAlign: "center" }}>Thông tin nhân viên</p>
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
                <label>Mã nhân viên</label>
              </div>
              <div>
                <label>Họ và tên</label>
              </div>
              <div>
                <label>Ngày sinh</label>
              </div>
              <div>
                <label>Trạng thái</label>
              </div>
              <div>
                <label>Email công ty</label>
              </div>
              <div>
                <label>Ngày bắt đầu làm việc</label>
              </div>
              <div>
                <label>Số CMND/Hộ chiếu</label>
              </div>
              <div>
                <label>Nơi cấp</label>
              </div>
              <div>
                <label>Tôn giáo</label>
              </div>
            </div>
            <div className="Detail-Infor-Atribute-1">
              <div>
                <label>Mã số chấm công</label>
              </div>
              <div>
                <label>Giới tính</label>
              </div>
              <div>
                <label>Nơi sinh</label>
              </div>
              <div>
                <label>Chức vụ</label>
              </div>
              <div>
                <label>Tình trạng hôn nhân</label>
              </div>
              <div>
                <label>Ngày nghỉ việc</label>
              </div>
              <div>
                <label>Ngày cấp</label>
              </div>
              <div>
                <label>Dân tộc</label>
              </div>
              <div>
                <label>Quốc tịch</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
