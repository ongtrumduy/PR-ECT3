import React from "react";
import "./ReturnInfor.css";

export default class ReturnInfor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <table style={{ borderStyle: "groove", width: "100%" }}>
          <tr>
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
            <td>Hủy</td>
          </tr>
          <tr>
            <td>MS2015124</td>
            <td>Trần Văn Bình</td>
            <td>Nam</td>
            <td>17-02-1988</td>
            <td>25-10-2020</td>
            <td>Phụ thuộc</td>
            <td style={{ color: "green" }}>Đang làm việc</td>
            <td>Hủy</td>
          </tr>
          <tr>
            <td>MS2015122</td>
            <td>Vũ Thị Cúc</td>
            <td>Nữ</td>
            <td>17-02-1988</td>
            <td>25-10-2020</td>
            <td>Phụ thuộc</td>
            <td style={{ color: "green" }}>Đang làm việc</td>
            <td>Hủy</td>
          </tr>
        </table>
      </div>
    );
  }
}
