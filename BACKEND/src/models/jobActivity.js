import fs from "fs";
import uuid from "uuid";
import jobPosition from "./jobPosition";

class JobActivity {
  constructor() {
    let jobActivitylist = fs.readFileSync(
      "../BACKEND/src/databases/jobActivity.json"
    );
    if (jobActivitylist) {
      this.JobActivity = JSON.parse(jobActivitylist);
    } else {
      this.JobActivity = [];
    }
  }

  saveJobActivityDataJson() {
    fs.writeFileSync(
      "../BACKEND/src/databases/jobActivity.json",
      JSON.stringify(this.JobActivity),
      err => {
        if (err) throw err;
        console.log("Complete!!!");
      }
    );
  }

  createNewJobActivityField(data) {
    let countJobActivityField = this.JobActivity.length;
    let newJobActivityField = {
      jobActivityFieldId: "" + countJobActivityField,
      jobActivityFieldName: data.jobFieldName,
      jobPositionFieldId: data.jobGrandId,
      jobActivityChild: []
    };
    this.JobActivity.push(newJobActivityField);
    this.saveJobActivityDataJson();
  }

  createNewJobActivityChild(data) {
    let index = this.JobActivity.findIndex(item => {
      return data.jobFieldId === item.jobActivityFieldId;
    });
    // console.log(index);
    let countJobActivityChild = this.JobActivity[index].jobActivityChild.length;

    let newJobActivityChild = {
      jobActivityChildId: index + "-" + countJobActivityChild,
      jobActivityChildName: data.jobChildName
    };
    this.JobActivity[index].jobActivityChild.push(newJobActivityChild);
    this.saveJobActivityDataJson();
  }

  readJobActivityField() {
    let jobActivityFieldList = [];
    this.JobActivity.forEach(item => {
      let jobActivityField = {
        jobActivityFieldId: item.jobActivityFieldId,
        jobActivityFieldName: item.jobActivityFieldName
      };
      jobActivityFieldList.push(jobActivityField);
    });
    return jobActivityFieldList;
  }

  readJobField() {
    let jobFieldList = [];
    this.JobActivity.forEach(item => {
      let jobField = {
        jobFieldId: item.jobActivityFieldId,
        jobFieldName: item.jobActivityFieldName
      };
      jobFieldList.push(jobField);
    });
    return jobFieldList;
  }

  readJobChild(data) {
    let jobChildList = [];
    let indexChild = this.JobActivity.findIndex(item => {
      return data.jobFieldId === item.jobActivityFieldId;
    });
    this.JobActivity[indexChild].jobActivityChild.forEach(item => {
      let jobChild = {
        jobChildId: item.jobActivityChildId,
        jobChildName: item.jobActivityChildName
      };
      jobChildList.push(jobChild);
    });
    return jobChildList;
  }

  readJobActivityChild(data) {
    let index = data.jobActivityChildId;
    return this.JobActivity[index].jobActivityChild;
  }

  readGrandJobActivityField() {
    let grandPositionList = [];
    let jobPositionList = jobPosition.readJobPositionField();
    jobPositionList.forEach(item => {
      let grandPosition = {
        jobGrandId: item.jobPositionFieldId,
        jobGrandName: item.jobPositionFieldName
      };
      grandPositionList.push(grandPosition);
    });
    return grandPositionList;
  }

  readGrandJobActivityFieldForEditPage(data) {
    let grandPositionList = [];
    let jobPositionGrandList = this.readGrandJobActivityField();
    let jobPositionList = jobPosition.readJobPositionField();
    let indexField = jobPositionList.findIndex(item => {
      return data === item.jobPositionFieldId;
    });
    let grandPosition = {
      jobGrandId: jobPositionList[indexField].jobPositionFieldId,
      jobGrandName: jobPositionList[indexField].jobPositionFieldName
    };
    grandPositionList = jobPositionGrandList;
    grandPositionList.splice(indexField, 1);
    // console.log(grandPositionList);
    grandPositionList.unshift(grandPosition);
    // console.log(grandPositionList);
    return grandPositionList;
  }

  readJobActivityFieldToEditPage(data) {
    let indexField = this.JobActivity.findIndex(item => {
      return data.jobFieldId === item.jobActivityFieldId;
    });
    let jobPositionList = jobPosition.readJobPositionField();
    let jobGrandId = this.JobActivity[indexField].jobPositionFieldId;
    let indexGrandField = jobPositionList.findIndex(item => {
      return jobGrandId === item.jobPositionFieldId;
    });
    let jobGrandList = this.readGrandJobActivityFieldForEditPage(jobGrandId);
    // console.log(jobGrandList);
    let returnJobField = {
      jobFieldId: this.JobActivity[indexField].jobActivityFieldId,
      jobFieldName: this.JobActivity[indexField].jobActivityFieldName,
      jobGrandId: jobGrandId,
      jobGrandName: jobPositionList[indexGrandField].jobPositionFieldName,
      jobGrandList: jobGrandList,
      jobKind: "field"
    };
    return returnJobField;
  }

  updateJobActivityField(data) {
    this.JobActivity.forEach(item => {
      if ((data.jobActivityFieldId = item.jobActivityFieldId)) {
        item.jobActivityFieldName = data.jobActivityFieldName;
      }
    });
  }

  updateJobActivityChild(data) {
    let indexField = this.JobActivity.findIndex(item => {
      return data.jobActivityFieldId === item.jobActivityFieldId;
    });
    this.JobActivity[indexField].jobActivityChild.forEach(item => {
      if ((data.jobActivityChildId = item.jobActivityChildId)) {
        item.jobActivityChildName = data.jobActivityChildName;
      }
    });
  }

  deleteJobActivityField() {
    let indexField = this.JobActivity.findIndex(item => {
      return data.jobActivityFieldId === item.jobActivityFieldId;
    });
    this.JobActivity.splice(indexField, 1);
    this.saveJobActivityDataJson();
  }

  deleteJobActivityChild(data) {
    let indexField = this.JobActivity.findIndex(item => {
      return data.jobActivityFieldId === item.jobActivityFieldId;
    });
    let indexChild = this.JobActivity[indexField].jobActivityChild.findIndex(
      item => {
        return data.jobActivityChildId === item.jobActivityChildId;
      }
    );
    this.JobActivity[indexField].jobActivityChild.splice(indexChild, 1);
    this.saveJobActivityDataJson();
  }
}

let jobActivity = new JobActivity();

module.exports = jobActivity;
