import fs from "fs";
import uuid from "uuid";

class JobType {
  constructor() {
    let jobTypelist = fs.readFileSync("../BACKEND/src/databases/jobType.json");
    if (jobTypelist) {
      this.JobType = JSON.parse(jobTypelist);
    } else {
      this.JobType = [];
    }
  }

  saveJobTypeDataJson() {
    fs.writeFileSync(
      "../BACKEND/src/databases/jobType.json",
      JSON.stringify(this.JobType),
      err => {
        if (err) throw err;
        console.log("Complete!!!");
      }
    );
  }

  createNewJobTypeField(data) {
    let countJobTypeField = this.JobType.length;
    let newJobTypeField = {
      jobTypeFieldId: "" + countJobTypeField,
      jobTypeFieldName: data.jobFieldName,
      jobTypeChild: []
    };
    this.JobType.push(newJobTypeField);
    this.saveJobTypeDataJson();
  }

  createNewJobTypeChild(data) {
    // console.log(data);
    let index = this.JobType.findIndex(item => {
      // console.log(data.jobFieldId);
      // console.log(item.jobTypeFieldId);
      return data.jobFieldId === item.jobTypeFieldId;
    });
    // console.log(index);
    let countJobTypeChild = this.JobType[index].jobTypeChild.length;
    let newJobTypeChild = {
      jobTypeChildId: index + "-" + countJobTypeChild,
      jobTypeChildName: data.jobChildName
    };
    this.JobType[index].jobTypeChild.push(newJobTypeChild);
    this.saveJobTypeDataJson();
  }

  readJobTypeField() {
    let jobTypeFieldList = [];
    this.JobType.forEach(item => {
      let jobTypeField = {
        jobTypeFieldId: item.jobTypeFieldId,
        jobTypeFieldName: item.jobTypeFieldName
      };
      jobTypeFieldList.push(jobTypeField);
    });
    return jobTypeFieldList;
  }

  readJobField() {
    let jobFieldList = [];
    this.JobType.forEach(item => {
      let jobField = {
        jobFieldId: item.jobTypeFieldId,
        jobFieldName: item.jobTypeFieldName
      };
      jobFieldList.push(jobField);
    });
    return jobFieldList;
  }

  readJobChild(data) {
    let jobChildList = [];
    let indexChild = this.JobType.findIndex(item => {
      return data.jobFieldId === item.jobTypeFieldId;
    });
    this.JobType[indexChild].jobTypeChild.forEach(item => {
      let jobChild = {
        jobChildId: item.jobTypeChildId,
        jobChildName: item.jobTypeChildName
      };
      jobChildList.push(jobChild);
    });
    return jobChildList;
  }

  readJobTypeChild(data) {
    let index = data.jobTypeChildId;
    return this.JobType[index].jobTypeChild;
  }

  readGrandJobTypeField() {
    let grandList = [];
    let grand = {
      jobGrandId: -9999,
      jobGrandName: "Không có nhãn cha cho lĩnh vực"
    };
    grandList.push(grand);
    return grandList;
  }

  readJobTypeFieldToEditPage(data) {
    let indexField = this.JobType.findIndex(item => {
      return data.jobFieldId === item.jobTypeFieldId;
    });
    // console.log(indexField);
    let jobGrandList = this.readGrandJobTypeField();
    let returnJobField = {
      jobFieldId: this.JobType[indexField].jobTypeFieldId,
      jobFieldName: this.JobType[indexField].jobTypeFieldName,
      jobGrandId: -9999,
      jobGrandName: "Không có nhãn cha cho lĩnh vực",
      jobGrandList: jobGrandList,
      jobKind: "field"
    };
    return returnJobField;
  }

  updateJobTypeField(data) {
    this.JobType.forEach(item => {
      if ((data.jobTypeFieldId = item.jobTypeFieldId)) {
        item.jobTypeFieldName = data.jobTypeFieldName;
      }
    });
  }

  updateJobTypeChild(data) {
    let indexField = this.JobType.findIndex(item => {
      return data.jobTypeFieldId === item.jobTypeFieldId;
    });
    this.JobType[indexField].jobTypeChild.forEach(item => {
      if ((data.jobTypeChildId = item.jobTypeChildId)) {
        item.jobTypeChildName = data.jobTypeChildName;
      }
    });
  }

  deleteJobTypeField() {
    let indexField = this.JobType.findIndex(item => {
      return data.jobTypeFieldId === item.jobTypeFieldId;
    });
    this.JobType.splice(indexField, 1);
    this.saveJobTypeDataJson();
  }

  deleteJobTypeChild(data) {
    let indexField = this.JobType.findIndex(item => {
      return data.jobTypeFieldId === item.jobTypeFieldId;
    });
    let indexChild = this.JobType[indexField].jobTypeChild.findIndex(item => {
      return data.jobTypeChildId === item.jobTypeChildId;
    });
    this.JobType[indexField].jobTypeChild.splice(indexChild, 1);
    this.saveJobTypeDataJson();
  }
}

let jobType = new JobType();

module.exports = jobType;
