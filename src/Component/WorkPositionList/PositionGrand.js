import React from "react";
import PositionParent from "./PositionParent";

import ArrowUp from "../../Icons/Arrow Up.png";
import ArrowRight from "../../Icons/Arrow Right.png";
import GrandIcon from "../../Icons/Button White Stop.png";

export default class PositionGrand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changeIconGrand: false,
      changeIdGrand: -1
    };
  }

  checkChangeIconGrand = GrandId => {
    if (this.state.changeIconGrand) {
      this.setState({
        changeIconGrand: false,
        changeIdGrand: GrandId
      });
    } else {
      this.setState({
        changeIconGrand: true,
        changeIdGrand: GrandId
      });
    }
  };

  renderPositionParent = grandId => {
    if (this.state.changeIconGrand && this.state.changeIdGrand === grandId) {
      return <PositionParent grandId={grandId} />;
    }
  };

  positionListGrand = () => {
    return (
      <div>
        <div>
          <img
            alt="icon-Grand"
            src={
              this.state.changeIconGrand && this.state.changeIdGrand === 0
                ? ArrowRight
                : ArrowUp
            }
          />
          <img alt="" src={GrandIcon} />
          <label onClick={() => this.checkChangeIconGrand(0)}>
            Công nghệ kỹ thuật
          </label>
          {this.renderPositionParent(0)}
        </div>
        <div>
          <img
            alt="icon-Grand"
            src={
              this.state.changeIconGrand && this.state.changeIdGrand === 1
                ? ArrowRight
                : ArrowUp
            }
          />
          <img alt="" src={GrandIcon} />
          <label onClick={() => this.checkChangeIconGrand(1)}>Giáo dục</label>
          {this.renderPositionParent(1)}
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="Position-Grand-List">{this.positionListGrand()}</div>
    );
  }
}
