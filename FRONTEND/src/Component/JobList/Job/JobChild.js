import React from "react";

import ArrowUp from "../../../Icons/Arrow Up.png";
import ArrowRight from "../../../Icons/Arrow Right.png";
import ChildIcon from "../../../Icons/Star On.png";

export default class PositionChild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changeIconChild: false,
      changeIdChild: -1
    };
  }

  checkChangeIconChild = ChildId => {
    if (this.state.changeIconChild) {
      this.setState({
        changeIconChild: false,
        changeIdChild: ChildId
      });
      this.setState({
        changeIconChild: true,
        changeIdChild: ChildId
      });
    }
  };

  positionListChild = (grandId, parentId) => {
    switch (grandId) {
      case 0:
        switch (parentId) {
          case 0:
            return (
              <div>
                <div>
                  <img
                    alt="icon-Child "
                    src={
                      this.state.changeIconChild &&
                      this.state.changeIdChild === 0
                        ? ArrowRight
                        : ArrowUp
                    }
                  />
                  <img alt="" src={ChildIcon} />
                  <label onClick={() => this.checkChangeIconChild(0)}>
                    Giám sát kỹ thuật an toàn thông tin
                  </label>
                </div>
                <div>
                  <img
                    alt="icon-Child "
                    src={
                      this.state.changeIconChild &&
                      this.state.changeIdChild === 1
                        ? ArrowRight
                        : ArrowUp
                    }
                  />
                  <img alt="" src={ChildIcon} />
                  <label onClick={() => this.checkChangeIconChild(1)}>
                    Giảng dạy đào tạo kĩ thuật
                  </label>
                </div>
                <div>
                  <img
                    alt="icon-Child "
                    src={
                      this.state.changeIconChild &&
                      this.state.changeIdChild === 2
                        ? ArrowRight
                        : ArrowUp
                    }
                  />
                  <img alt="" src={ChildIcon} />
                  <label onClick={() => this.checkChangeIconChild(2)}>
                    Quản lý hệ thống an toàn thông tin
                  </label>
                </div>
              </div>
            );
          case 1:
            return (
              <div>
                <div>
                  <img
                    alt="icon-Child "
                    src={
                      this.state.changeIconChild &&
                      this.state.changeIdChild === 0
                        ? ArrowRight
                        : ArrowUp
                    }
                  />
                  <img alt="" src={ChildIcon} />
                  <label onClick={() => this.checkChangeIconChild(0)}>
                    Phối hơp, giám sát và đốc thúc các đơn vị chức năng trong
                    quá trình xử lý các yêu cầu hỗ trợ CNTT đảm bảo các SLA đã
                    được cam kết
                  </label>
                </div>
                <div>
                  <img
                    alt="icon-Child "
                    src={
                      this.state.changeIconChild &&
                      this.state.changeIdChild === 1
                        ? ArrowRight
                        : ArrowUp
                    }
                  />
                  <img alt="" src={ChildIcon} />
                  <label onClick={() => this.checkChangeIconChild(1)}>
                    Thực hiện việc xử lý các yêu cầu hỗ trợ CNTT theo quy trình,
                    hướng dẫn
                  </label>
                </div>
              </div>
            );
          case 2:
            return (
              <div>
                <div>
                  <img
                    alt="icon-Child "
                    src={
                      this.state.changeIconChild &&
                      this.state.changeIdChild === 0
                        ? ArrowRight
                        : ArrowUp
                    }
                  />
                  <img alt="" src={ChildIcon} />
                  <label onClick={() => this.checkChangeIconChild(0)}>
                    Tham gia triển khai các dự án công nghệ theo yêu cầu của
                    lãnh đạo
                  </label>
                </div>
                <div>
                  <img
                    alt="icon-Child "
                    src={
                      this.state.changeIconChild &&
                      this.state.changeIdChild === 1
                        ? ArrowRight
                        : ArrowUp
                    }
                  />
                  <img alt="" src={ChildIcon} />
                  <label onClick={() => this.checkChangeIconChild(1)}>
                    Xây dựng các quy trình liên quan đến quản trị, bảo trì các
                    hệ thống ứng dụng
                  </label>
                </div>
              </div>
            );
          case 3:
            return (
              <div>
                <div>
                  <img
                    alt="icon-Child "
                    src={
                      this.state.changeIconChild &&
                      this.state.changeIdChild === 0
                        ? ArrowRight
                        : ArrowUp
                    }
                  />
                  <img alt="" src={ChildIcon} />
                  <label onClick={() => this.checkChangeIconChild(0)}>
                    Tư vấn, hỗ trợ, khắc phục sự cố máy tính, mạng LAN, Internet
                    và các thiết bị văn phòng
                  </label>
                </div>
                <div>
                  <img
                    alt="icon-Child "
                    src={
                      this.state.changeIconChild &&
                      this.state.changeIdChild === 1
                        ? ArrowRight
                        : ArrowUp
                    }
                  />
                  <img alt="" src={ChildIcon} />
                  <label onClick={() => this.checkChangeIconChild(1)}>
                    Bảo trì hệ thống máy tính, mạng máy tính và các thiết bị văn
                    phòng
                  </label>
                </div>
              </div>
            );
        }

      case 1:
        switch (parentId) {
          case 0:
            return (
              <div>
                <div>
                  <img
                    alt="icon-Child "
                    src={
                      this.state.changeIconChild &&
                      this.state.changeIdChild === 0
                        ? ArrowRight
                        : ArrowUp
                    }
                  />
                  <img alt="" src={ChildIcon} />
                  <label onClick={() => this.checkChangeIconChild(0)}>
                    Giảng dạy
                  </label>
                </div>
                <div>
                  <img
                    alt="icon-Child "
                    src={
                      this.state.changeIconChild &&
                      this.state.changeIdChild === 1
                        ? ArrowRight
                        : ArrowUp
                    }
                  />
                  <img alt="" src={ChildIcon} />
                  <label onClick={() => this.checkChangeIconChild(1)}>
                    Nghiên cứu phát triển ứng dụng công nghệ thông tin
                  </label>
                </div>
              </div>
            );
          case 1:
            return (
              <div>
                <div>
                  <img
                    alt="icon-Child "
                    src={
                      this.state.changeIconChild &&
                      this.state.changeIdChild === 0
                        ? ArrowRight
                        : ArrowUp
                    }
                  />
                  <img alt="" src={ChildIcon} />
                  <label onClick={() => this.checkChangeIconChild(0)}>
                    Hỗ trợ giảng dạy
                  </label>
                </div>
                <div>
                  <img
                    alt="icon-Child "
                    src={
                      this.state.changeIconChild &&
                      this.state.changeIdChild === 1
                        ? ArrowRight
                        : ArrowUp
                    }
                  />
                  <img alt="" src={ChildIcon} />
                  <label onClick={() => this.checkChangeIconChild(1)}>
                    Hỗ trợ nghiên cứu khoa học
                  </label>
                </div>
              </div>
            );
        }
    }
  };

  render() {
    return (
      <div className="Position-Child-List">
        {this.positionListChild(this.props.grandId, this.props.parentId)}
      </div>
    );
  }
}
