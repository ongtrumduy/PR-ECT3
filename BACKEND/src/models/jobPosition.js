import fs from "fs";
import uuid from "uuid";
import jobType from "./jobType";

class JobPosition {
  constructor() {
    let jobPositionlist = fs.readFileSync(
      "../BACKEND/src/databases/jobPosition.json"
    );
    if (jobPositionlist) {
      this.JobPosition = JSON.parse(jobPositionlist);
    } else {
      this.JobPosition = [];
    }
  }

  saveJobPositionDataJson() {
    fs.writeFileSync(
      "../BACKEND/src/databases/jobPosition.json",
      JSON.stringify(this.JobPosition),
      err => {
        if (err) throw err;
        console.log("Complete!!!");
      }
    );
  }

  createNewJobPositionField(data) {
    let countJobPositionField = this.JobPosition.length;
    let newJobPositionField = {
      jobPositionFieldId: "" + countJobPositionField,
      jobPositionFieldName: data.jobFieldName,
      jobTypeFieldId: data.jobGrandId,
      jobPositionChild: []
    };
    this.JobPosition.push(newJobPositionField);
    this.saveJobPositionDataJson();
  }

  createNewJobPositionChild(data) {
    let index = this.JobPosition.findIndex(item => {
      return data.jobFieldId === item.jobPositionFieldId;
    });
    let countJobPositionChild = this.JobPosition[index].jobPositionChild.length;

    let newJobPositionChild = {
      jobPositionChildId: index + "-" + countJobPositionChild,
      jobPositionChildName: data.jobChildName
    };
    this.JobPosition[index].jobPositionChild.push(newJobPositionChild);
    this.saveJobPositionDataJson();
  }

  readJobPositionField() {
    let jobPositionFieldList = [];
    this.JobPosition.forEach(item => {
      let jobPositionField = {
        jobPositionFieldId: item.jobPositionFieldId,
        jobPositionFieldName: item.jobPositionFieldName
      };
      jobPositionFieldList.push(jobPositionField);
    });
    return jobPositionFieldList;
  }

  readJobField() {
    let jobFieldList = [];
    this.JobPosition.forEach(item => {
      let jobField = {
        jobFieldId: item.jobPositionFieldId,
        jobFieldName: item.jobPositionFieldName
      };
      jobFieldList.push(jobField);
    });
    return jobFieldList;
  }

  readJobChild(data) {
    let jobChildList = [];
    let indexChild = this.JobPosition.findIndex(item => {
      return data.jobFieldId === item.jobPositionFieldId;
    });
    this.JobPosition[indexChild].jobPositionChild.forEach(item => {
      let jobChild = {
        jobChildId: item.jobPositionChildId,
        jobChildName: item.jobPositionChildName
      };
      jobChildList.push(jobChild);
    });
    return jobChildList;
  }

  readJobPositionChild(data) {
    let index = data.jobPositionChildId;
    return this.JobPosition[index].jobPositionChild;
  }

  readGrandJobPositionField() {
    let grandTypeList = [];
    let jobTypeList = jobType.readJobTypeField();
    jobTypeList.forEach(item => {
      let grandType = {
        jobGrandId: item.jobTypeFieldId,
        jobGrandName: item.jobTypeFieldName
      };
      grandTypeList.push(grandType);
    });
    return grandTypeList;
  }

  readGrandJobPositionFieldForEditPage(data) {
    let grandTypeList = [];
    let jobTypeGrandList = [];
    let jobTypeList = jobType.readJobTypeField();
    this.JobPosition.forEach(item => {
      let jobField = {
        jobGrandId: item.jobPositionFieldId,
        jobGrandName: item.jobPositionFieldName
      };
      jobTypeGrandList.push(jobField);
    });
    let indexField = jobTypeList.findIndex(item => {
      return data === item.jobTypeFieldId;
    });
    let grandPosition = {
      jobGrandId: jobTypeList[indexField].jobTypeFieldId,
      jobGrandName: jobTypeList[indexField].jobTypeFieldName
    };
    grandTypeList = jobTypeGrandList;
    grandTypeList.splice(indexField, 1);
    // console.log(grandTypeList);
    grandTypeList.unshift(grandPosition);
    // console.log(grandTypeList);
    return grandTypeList;
  }

  readJobPositionFieldToEditPage(data) {
    let indexField = this.JobPosition.findIndex(item => {
      return data.jobFieldId === item.jobPositionFieldId;
    });
    let jobTypeList = jobType.readJobTypeField();
    let indexGrandField = jobTypeList.findIndex(item => {
      return (
        this.JobPosition[indexField].jobTypeFieldId === item.jobTypeFieldId
      );
    });
    let jobGrandId = this.JobPosition[indexField].jobTypeFieldId;
    let jobGrandList = this.readGrandJobPositionFieldForEditPage(jobGrandId);
    // console.log(jobGrandList);
    let returnJobField = {
      jobFieldId: this.JobPosition[indexField].jobPositionFieldId,
      jobFieldName: this.JobPosition[indexField].jobPositionFieldName,
      jobGrandId: jobGrandId,
      jobGrandName: jobTypeList[indexGrandField].jobTypeFieldName,
      jobGrandList: jobGrandList,
      jobKind: "field"
    };
    return returnJobField;
  }

  readGrandJobPositionChildForEditPage(data) {
    let grandPositionList = [];
    let jobGrandList = [];
    this.JobPosition.forEach(item => {
      let jobField = {
        jobGrandId: item.jobPositionFieldId,
        jobGrandName: item.jobPositionFieldName
      };
      jobGrandList.push(jobField);
    });
    let indexField = this.JobPosition.findIndex(item => {
      return data === item.jobPositionFieldId;
    });
    let grandPosition = {
      jobGrandId: this.JobPosition[indexField].jobPositionFieldId,
      jobGrandName: this.JobPosition[indexField].jobPositionFieldName
    };
    grandPositionList = jobGrandList;
    grandPositionList.splice(indexField, 1);
    // console.log(grandTypeList);
    grandPositionList.unshift(grandPosition);
    // console.log(grandTypeList);
    return grandPositionList;
  }

  readJobPositionChildToEditPage(data) {
    let indexField = this.JobPosition.findIndex(item => {
      return data.jobFieldId === item.jobPositionFieldId;
    });
    let indexChild = this.JobPosition[indexField].jobPositionChild.findIndex(
      item => {
        return data.jobChildId === item.jobPositionChildId;
      }
    );
    let jobGrandId = this.JobPosition[indexChild].jobPositionFieldId;

    let jobGrandList = this.readGrandJobPositionChildForEditPage(jobGrandId);
    let returnJobChild = {
      jobChildId: this.JobPosition[indexField].jobPositionChild[indexChild]
        .jobPositionChildId,
      jobChildName: this.JobPosition[indexField].jobPositionChild[indexChild]
        .jobPositionChildName,
      jobGrandId: this.JobPosition[indexField].jobPositionFieldId,
      jobGrandName: this.JobPosition[indexField].jobPositionFieldName,
      jobGrandList: jobGrandList,
      jobKind: "child"
    };
    return returnJobChild;
  }

  updateJobPositionField(data) {
    this.JobPosition.forEach(item => {
      if (data.jobId === item.jobPositionFieldId) {
        item.jobPositionFieldName = data.jobName;
        item.jobTypeFieldId = data.jobGrandId;
      }
    });
    this.saveJobPositionDataJson();
  }

  updateJobPositionChild(data) {
    let indexField = this.JobPosition.findIndex(item => {
      return data.jobPositionFieldId === item.jobPositionFieldId;
    });
    this.JobPosition[indexField].jobPositionChild.forEach(item => {
      if ((data.jobPositionChildId = item.jobPositionChildId)) {
        item.jobPositionChildName = data.jobPositionChildName;
      }
    });
  }

  deleteJobPositionField() {
    let indexField = this.JobPosition.findIndex(item => {
      return data.jobPositionFieldId === item.jobPositionFieldId;
    });
    this.JobPosition.splice(indexField, 1);
    this.saveJobPositionDataJson();
  }

  deleteJobPositionChild(data) {
    let indexField = this.JobPosition.findIndex(item => {
      return data.jobPositionFieldId === item.jobPositionFieldId;
    });
    let indexChild = this.JobPosition[indexField].jobPositionChild.findIndex(
      item => {
        return data.jobPositionChildId === item.jobPositionChildId;
      }
    );
    this.JobPosition[indexField].jobPositionChild.splice(indexChild, 1);
    this.saveJobPositionDataJson();
  }
}

let jobPosition = new JobPosition();

module.exports = jobPosition;
