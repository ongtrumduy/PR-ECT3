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
          <p style={{ textAlign: "center" }}>Thêm vị trí công việc</p>
          <p>
            Tên <label style={{ color: "red" }}>(*)</label>
          </p>
          <input type="text" />
          <p>
            Chọn thông tin cha <label style={{ color: "red" }}>(*)</label>
          </p>
          <input type="text" />
          <p>
            Nhãn <label style={{ color: "red" }}>(*)</label>
          </p>
          <input type="text" />
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
