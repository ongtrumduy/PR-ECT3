import React from "react";
import request from "request";
import "./SearchPage.css";
import ReturnInfor from "../ReturnInforEmployee/ReturnInforEmployee";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobPositionList: [],
      jobPositionFieldId: "",
      experienceYear: "",
      certificateName: "",
      degreeIdentification: "",
      degreeSpeciality: "",
      certificateDate: ""
    };
  }

  //-----------------------------------------------------------------------

  receivejobPositionDataList = callbackJobPosition => {
    var options = {
      method: "POST",
      url: "http://localhost:8081/receiveJobPositionList",
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
        jobPosition: "1"
      })
    };
    request(options, (error, response, body) => {
      if (error) throw new Error(error);
      // console.log(body);
      let receiveJobPosition = JSON.parse(body);
      callbackJobPosition(receiveJobPosition);
    });
  };
  //-----------------------------------------------------------------------

  componentWillMount = () => {
    this.receivejobPositionDataList(this.receiveJobPositionList);
  };

  receiveJobPositionList = _jobPositionList => {
    this.setState({
      jobPositionList: _jobPositionList
    });
  };

  handleExperienceYear = event => {
    this.setState({
      experienceYear: event.target.value
    });
  };

  handleChangeJobPositionFieldId = event => {
    this.setState({
      jobPositionFieldId: event.target.value
    });
  };

  handleDegreeSpeciality = event => {
    this.setState({
      degreeSpeciality: event.target.value
    });
  };

  handleCertificateDate = event => {
    this.setState({
      certificateDate: event.target.value
    });
  };

  handleCertificateName = event => {
    this.setState({
      certificateName: event.target.value
    });
  };

  handleDegreeIdentification = event => {
    this.setState({
      degreeIdentification: event.target.value
    });
  };

  searchPagePane = () => {
    return (
      <div className="search-page">
        <div className="search-div">
          <div>
            <label>Vị trí công việc </label>
            <select
              style={{ height: "21px", width: "177px" }}
              // jobPositionFieldId={this.state.jobPositionFieldId}
              onChange={this.handleChangeJobPositionFieldId}
            >
              <option key="-1" value="">
                Chọn vị trí công việc
              </option>
              {this.state.jobPositionList.map((item, index) => {
                return (
                  <option key={index} value={item.jobFieldId}>
                    {item.jobFieldName}
                  </option>
                );
              })}
            </select>
          </div>

          <div>
            <label>Số năm Kinh nghiệm </label>
            <input
              type="text"
              placeholder="0, 1, 2, 3,..."
              onChange={this.handleExperienceYear}
            />
          </div>
        </div>
        <div className="search-div-1">
          <div>
            <label>Trình độ chuyên môn </label>
            <input
              type="text"
              placeholder="Cử nhân, Kỹ sư, Thạc sĩ, Tiến sĩ,..."
              onChange={this.handleDegreeIdentification}
            />
          </div>
          <div>
            <label>Tên chứng chỉ </label>
            <input
              type="text"
              placeholder="Oracle Database Certifications"
              onChange={this.handleCertificateName}
            />
          </div>
        </div>
        <div className="search-div-2">
          <div>
            <label>Chuyên ngành </label>
            <input
              type="text"
              placeholder="Công nghệ phần mềm"
              onChange={this.handleDegreeSpeciality}
            />
          </div>
          <div>
            <label>Hiệu lực chứng chỉ </label>
            <input
              id="input-date"
              type="date"
              placeholder="26/12/2020"
              onChange={this.handleCertificateDate}
            />
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div style={{ height: "494px", overflow: "auto" }}>
        {this.searchPagePane()}
        <ReturnInfor
          jobPositionFieldId={this.state.jobPositionFieldId}
          experienceYear={this.state.experienceYear}
          certificateName={this.state.certificateName}
          degreeIdentification={this.state.degreeIdentification}
          degreeSpeciality={this.state.degreeSpeciality}
          certificateDate={this.state.certificateDate}
          setStatusRenderModalForm={this.props.setStatusRenderModalForm}
          setModalOptionJob={this.props.setModalOptionJob}
          socket={this.props.socket}
        />
      </div>
    );
  }
}
