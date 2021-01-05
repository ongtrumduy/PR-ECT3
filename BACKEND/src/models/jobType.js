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
    // let countJobTypeField = this.JobType.length;
    let newJobTypeField = {
      jobTypeFieldId: uuidv4(),
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
    // let countJobTypeChild = this.JobType[index].jobTypeChild.length;
    let newJobTypeChild = {
      // jobTypeChildId: index + "-" + countJobTypeChild,
      jobTypeChildId: uuidv6(),
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

  readJobChildToUpdate(data) {
    let jobChildList = [];
    let indexChild = this.JobType.findIndex(item => {
      return data.jobGrandId === item.jobTypeFieldId;
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

  readGrandJobTypeChildForEditPage(data) {
    let grandTypeList = [];
    let jobGrandList = [];
    this.JobType.forEach(item => {
      let jobField = {
        jobGrandId: item.jobTypeFieldId,
        jobGrandName: item.jobTypeFieldName
      };
      jobGrandList.push(jobField);
    });
    let indexField = this.JobType.findIndex(item => {
      return data === item.jobTypeFieldId;
    });
    let grandType = {
      jobGrandId: this.JobType[indexField].jobTypeFieldId,
      jobGrandName: this.JobType[indexField].jobTypeFieldName
    };
    // grandTypeList = jobGrandList;
    // grandTypeList.splice(indexField, 1);
    // console.log(grandTypeList);
    grandTypeList.unshift(grandType);
    // console.log(grandTypeList);
    return grandTypeList;
  }

  readJobTypeChildToEditPage(data) {
    let indexField = this.JobType.findIndex(item => {
      return data.jobFieldId === item.jobTypeFieldId;
    });
    // console.log(indexField);
    let indexChild = this.JobType[indexField].jobTypeChild.findIndex(item => {
      return data.jobChildId === item.jobTypeChildId;
    });
    let jobGrandId = this.JobType[indexField].jobTypeFieldId;

    let jobGrandList = this.readGrandJobTypeChildForEditPage(jobGrandId);
    let returnJobChild = {
      jobChildId: this.JobType[indexField].jobTypeChild[indexChild]
        .jobTypeChildId,
      jobChildName: this.JobType[indexField].jobTypeChild[indexChild]
        .jobTypeChildName,
      jobGrandId: this.JobType[indexField].jobTypeFieldId,
      jobGrandName: this.JobType[indexField].jobTypeFieldName,
      jobGrandList: jobGrandList,
      jobKind: "child"
    };
    return returnJobChild;
  }

  updateJobTypeField(data) {
    this.JobType.forEach(item => {
      if (data.jobId === item.jobTypeFieldId) {
        item.jobTypeFieldName = data.jobName;
      }
    });
    this.saveJobTypeDataJson();
  }

  updateJobTypeChild(data) {
    let indexField = this.JobType.findIndex(item => {
      return data.jobGrandId === item.jobTypeFieldId;
    });
    this.JobType[indexField].jobTypeChild.forEach(item => {
      if (data.jobId === item.jobTypeChildId) {
        item.jobTypeChildName = data.jobName;
      }
    });
    this.saveJobTypeDataJson();
  }

  deleteJobTypeField(data) {
    let indexField = this.JobType.findIndex(item => {
      return data.jobFieldId === item.jobTypeFieldId;
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
