import React from "react";

export default class CreateEditPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div style={{ margin: "20px 0 20px 0" }}>
          <input
            style={{ color: "white", backgroundColor: "green" }}
            type="button"
            value="Thêm"
          />
        </div>
        <div>
          <p>
            Tên <label style={{ color: "red" }}>(*)</label>
          </p>
          <input style={{ width: "80%" }} type="text" />
        </div>
        <p>
          Nhãn dán <label style={{ color: "red" }}>(*)</label>
        </p>
        <input style={{ width: "80%" }} type="text" />
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
    );
  }
}
