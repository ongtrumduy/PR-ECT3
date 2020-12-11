import React from "react";

import "./RenderAllModal.css";

import AddJobFieldForm from "../JobList/AddJobFieldForm/AddJobFieldForm";
import AddJobChildForm from "../JobList/AddJobChildForm/AddJobChildForm";

export default class RenderAllModal extends React.Component {
  constructor(props) {
    super(props); 
  }

  chooseModalToRender = modal_name => {
    switch (modal_name) {
      case "addjobfieldform":
    return (
      <AddJobFieldForm
        statusRenderModalForm={this.props.statusRenderModalForm}
        setStatusRenderModalForm={this.props.setStatusRenderModalForm}
      />
    );
    case "addjobchildform":
    return (
      <AddJobChildForm
        statusRenderModalForm={this.props.statusRenderModalForm}
        setStatusRenderModalForm={this.props.setStatusRenderModalForm}
      />
    );
      case "addjobchildform":
        return (
          <div>
            <AddJobFieldForm />
          </div>
        );
    }
  };

  render() {
    return (
      <div
        className="render-all-modal"
        style={
          this.props.statusRenderModalForm !== "none"
            ? { display: "flex" }
            : { display: "none" }
        }
      >
        {this.chooseModalToRender(this.props.statusRenderModalForm)}
      </div>
    );
  }
}
