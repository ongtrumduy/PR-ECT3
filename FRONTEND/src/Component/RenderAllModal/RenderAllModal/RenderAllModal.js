import React from "react";

import "./RenderAllModal.css";

import AddJobFieldForm from "../AddJobFieldForm/AddJobFieldForm";
import AddJobChildForm from "../AddJobChildForm/AddJobChildForm";
import RemoveItemJobForm from "../RemoveItemJobForm/RemoveItemJobForm";
import DetailInforModal from "../DetailInforModal/DetailInforModal";

export default class RenderAllModal extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  chooseModalToRender = (modal_name, option_job_name) => {
    switch (modal_name) {
      case "addjobfieldform":
        return (
          <AddJobFieldForm
            statusRenderModalForm={this.props.statusRenderModalForm}
            setStatusRenderModalForm={this.props.setStatusRenderModalForm}
            setOptionJob={option_job_name}
            socket={this.props.socket}
          />
        );
      case "addjobchildform":
        return (
          <AddJobChildForm
            statusRenderModalForm={this.props.statusRenderModalForm}
            setStatusRenderModalForm={this.props.setStatusRenderModalForm}
            setOptionJob={option_job_name}
            socket={this.props.socket}
          />
        );
      case "removeitemjobform":
        return (
          <RemoveItemJobForm
            statusRenderModalForm={this.props.statusRenderModalForm}
            setStatusRenderModalForm={this.props.setStatusRenderModalForm}
            setOptionJob={option_job_name}
            socket={this.props.socket}
          />
        );
      case "showprofileinformodal":
        return (
          <DetailInforModal
            statusRenderModalForm={this.props.statusRenderModalForm}
            setStatusRenderModalForm={this.props.setStatusRenderModalForm}
            setOptionJob={option_job_name}
            socket={this.props.socket}
          />
        );
      default:
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
        {this.chooseModalToRender(
          this.props.statusRenderModalForm,
          this.props.setOptionJob
        )}
      </div>
    );
  }
}
