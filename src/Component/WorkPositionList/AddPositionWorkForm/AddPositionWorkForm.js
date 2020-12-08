import React from "react";
import "./AddPositionWorkForm.css";

export default class AddPositionWorkForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Add-Position-Work">
        <div className="Add-Position-Work-Form">
          <p>Thêm vị trí công việc</p>
          <p>Tên (*)</p>
          <input type="text" />
          <p>Chọn thông tin cha (*)</p>
          <input type="text" />
          <p>Nhãn (*)</p>
          <input type="text" />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              margin: "10px 0 10px 0"
            }}
          >
            <div style={{ width: "70%" }}>
              <input
                style={{ color: "white", backgroundColor: "red" }}
                type="button"
                value="Đóng"
              />
            </div>
            <div>
              <input
                style={{ color: "white", backgroundColor: "green" }}
                type="button"
                value="Lưu"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
