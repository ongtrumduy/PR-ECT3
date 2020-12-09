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
          <p style={{ textAlign: "center", fontSize: "22px" }}>
            Thông tin nhân viên
          </p>
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
                <label>2015123</label>
              </div>
              <div>
                <label>Họ và tên &nbsp; &nbsp;</label>
                <label>Nguyễn Văn An</label>
              </div>
              <div>
                <label>Ngày sinh &nbsp; &nbsp;</label>
                <label>20-05-1988</label>
              </div>
              <div>
                <label>Trạng thái &nbsp; &nbsp;</label>
                <label>Đang làm việc</label>
              </div>
              <div>
                <label>Email công ty &nbsp; &nbsp;</label>
                <label>nva.vnist@gmail.com</label>
              </div>
              <div>
                <label>Ngày bắt đầu làm việc &nbsp; &nbsp;</label>
                <label>Mã nhân viên</label>
              </div>
              <div>
                <label>Số CMND/Hộ chiếu &nbsp; &nbsp;</label>
                <label>163414569</label>
              </div>
              <div>
                <label>Nơi cấp &nbsp; &nbsp;</label>
                <label>Nam Định</label>
              </div>
              <div>
                <label>Tôn giáo &nbsp; &nbsp;</label>
                <label>Không</label>
              </div>
            </div>
            <div className="Detail-Infor-Atribute-1">
              <div>
                <label>Mã số chấm công &nbsp; &nbsp;</label>
                <label>123456</label>
              </div>
              <div>
                <label>Giới tính &nbsp; &nbsp;</label>
                <label>Nam</label>
              </div>
              <div>
                <label>Nơi sinh &nbsp; &nbsp;</label>
                <label>Hải Phương - Hải Hậu - Nam Định</label>
              </div>
              <div>
                <label>Chức vụ &nbsp; &nbsp;</label>
                <label>Giám đốc</label>
              </div>
              <div>
                <label>Tình trạng hôn nhân &nbsp; &nbsp;</label>
                <label>Độc thân</label>
              </div>
              <div>
                <label>Ngày nghỉ việc &nbsp; &nbsp;</label>
                <label>Mã nhân viên</label>
              </div>
              <div>
                <label>Ngày cấp &nbsp; &nbsp;</label>
                <label>20-10-2015</label>
              </div>
              <div>
                <label>Dân tộc &nbsp; &nbsp;</label>
                <label>Kinh</label>
              </div>
              <div>
                <label>Quốc tịch &nbsp; &nbsp;</label>
                <label>Việt Nam</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
