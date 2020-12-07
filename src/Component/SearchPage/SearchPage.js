import React from "react";
import "./Search.css";
import ReturnInfor from "./ReturnInfor";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  searchPagePane = () => {
    return (
      <div className="search-page">
        <div className="search-div">
          <div>
            <label>Đơn vị </label>
            <input type="text" />
          </div>
          <div>
            <label>Trình độ chuyên môn </label>
            <input type="text" />
          </div>
          <div>
            <label>Chuyên ngành </label>
            <input type="text" />
          </div>
        </div>
        <div className="search-div-1">
          <div>
            <label>Vị trí công việc </label>
            <input type="textf" />
          </div>
          <div>
            <label>Số năm KH </label>
            <input type="text" />
          </div>
          <div>
            <label>Số năm KN công việc tương đương </label>
            <input type="text" />
          </div>
        </div>
        <div className="search-div-2">
          <div>
            <label>Loại chứng chỉ </label>
            <input type="text" />
          </div>
          <div>
            <label>Tên chứng chỉ </label>
            <input type="text" />
          </div>
          <div>
            <label>Hiệu lực chứng chỉ </label>
            <input id="input-date" type="date" />
          </div>
        </div>
      </div>
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
            margin: "30px"
          }}
          type="button"
          value="Tìm kiếm"
        />
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.searchPagePane()}
        {this.searchButtonPane()}
        <ReturnInfor/>
      </div>
    );
  }
}
