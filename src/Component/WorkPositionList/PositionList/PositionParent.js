import React from "react";

import PositionChild from "./PositionChild";

import ArrowUp from "../../../Icons/Arrow Up.png";
import ArrowRight from "../../../Icons/Arrow Right.png";
import ParentIcon from "../../../Icons/Button White Remove.png";

export default class PositionParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changeIconParent: false,
      changeIdParent: -1
    };
  }

  checkChangeIconParent = ParentId => {
    if (this.state.changeIconParent) {
      this.setState({
        changeIconParent: false,
        changeIdParent: ParentId
      });
    } else {
      this.setState({
        changeIconParent: true,
        changeIdParent: ParentId
      });
    }
  };

  renderPositionChild = (grandId, parentId) => {
    if (this.state.changeIconParent && this.state.changeIdParent === parentId) {
      return <PositionChild grandId={grandId} parentId={parentId} />;
    }
  };

  positionListParent = grandId => {
    switch (grandId) {
      case 0:
        return (
          <div>
            <div>
              <img
                alt="icon-Parent "
                src={
                  this.state.changeIconParent && this.state.changeIdParent === 0
                    ? ArrowRight
                    : ArrowUp
                }
              />
              <img alt="" src={ParentIcon} />
              <label onClick={() => this.checkChangeIconParent(0)}>
                Kỹ thuật viên
              </label>
              {this.renderPositionChild(grandId, 0)}
            </div>
            <div>
              <img
                alt="icon-Parent "
                src={
                  this.state.changeIconParent && this.state.changeIdParent === 1
                    ? ArrowRight
                    : ArrowUp
                }
              />
              <img alt="" src={ParentIcon} />
              <label onClick={() => this.checkChangeIconParent(1)}>
                Chuyên viên hỗ trợ người dùng
              </label>
              {this.renderPositionChild(grandId, 1)}
            </div>
            <div>
              <img
                alt="icon-Parent "
                src={
                  this.state.changeIconParent && this.state.changeIdParent === 2
                    ? ArrowRight
                    : ArrowUp
                }
              />
              <img alt="" src={ParentIcon} />
              <label onClick={() => this.checkChangeIconParent(2)}>
                Chuyên viên Quản Trị và Bảo Trì Ứng Dụng
              </label>
              {this.renderPositionChild(grandId, 2)}
            </div>
            <div>
              <img
                alt="icon-Parent "
                src={
                  this.state.changeIconParent && this.state.changeIdParent === 3
                    ? ArrowRight
                    : ArrowUp
                }
              />
              <img alt="" src={ParentIcon} />
              <label onClick={() => this.checkChangeIconParent(3)}>
                IT Support-Kỹ sư Máy Tính/Mạng
              </label>
              {this.renderPositionChild(grandId, 3)}
            </div>
          </div>
        );

      case 1:
        return (
          <div>
            <div>
              <img
                alt="icon-Parent "
                src={
                  this.state.changeIconParent && this.state.changeIdParent === 0
                    ? ArrowRight
                    : ArrowUp
                }
              />
              <img alt="" src={ParentIcon} />
              <label onClick={() => this.checkChangeIconParent(0)}>
                Giảng viên
              </label>
              {this.renderPositionChild(grandId, 0)}
            </div>
            <div>
              <img
                alt="icon-Parent "
                src={
                  this.state.changeIconParent && this.state.changeIdParent === 1
                    ? ArrowRight
                    : ArrowUp
                }
              />
              <img alt="" src={ParentIcon} />
              <label onClick={() => this.checkChangeIconParent(1)}>
                Trợ giảng
              </label>
              {this.renderPositionChild(grandId, 1)}
            </div>
          </div>
        );
    }
  };

  render() {
    return (
      <div className="Position-Parent-List">
        {this.positionListParent(this.props.grandId)}
      </div>
    );
  }
}
