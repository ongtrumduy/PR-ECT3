import fs from "fs";

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
      jobTypeFieldId: countJobTypeField,
      jobTypeFieldName: data.jobTypeFieldName,
      jobTypeChild: []
    };
    this.JobType.push(newJobTypeField);
    this.saveJobTypeDataJson();
  }

  createNewJobTypeChild(data) {
    let index = this.JobType.findIndex(item => {
      return data.jobTypeFieldId === item.jobTypeFieldId;
    });
    let countJobTypeField = this.JobType[index].jobTypeChild.length;

    let newJobTypeChild = {
      jobTypeChildId: index + "-" + countJobTypeField,
      jobTypeChildName: data.jobTypeChildName
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

  readJobTypeChild(data) {
    let index = data.jobTypeChildId;
    return this.JobType[index].jobTypeChild;
  }

  updateJobTypeField() {
    this.JobType.forEach(item => {
      if ((data.jobTypeFieldId = item.jobTypeFieldId)) {
        item.jobTypeFieldName = data.jobTypeFieldName;
      }
    });
  }

  updateJobTypeChild(data) {
    let indexField = this.JobType.findIndex(item => {
      return (data.jobTypeFieldId = item.jobTypeFieldId);
    });
    this.JobType[indexField].jobTypeChild.forEach(item => {
      if ((data.jobTypeChildId = item.jobTypeChildId)) {
        item.jobTypeChildName = data.jobTypeChildName;
      }
    });
  }

  deleteJobTypeField() {
    let indexField = this.JobType.findIndex(item => {
      return (data.jobTypeFieldId = item.jobTypeFieldId);
    });
    this.JobType.splice(indexField, 1);
    this.saveJobTypeDataJson();
  }

  deleteJobTypeChild(data) {
    let indexField = this.JobType.findIndex(item => {
      return (data.jobTypeFieldId = item.jobTypeFieldId);
    });
    let indexChild = this.JobType[indexField].jobTypeChild.findIndex(item => {
      return (data.jobTypeChildId = item.jobTypeChildId);
    });
    this.JobType[indexField].jobTypeChild.splice(indexChild, 1);
    this.saveJobTypeDataJson();
  }
}

let jobType = new JobType();

module.exports = jobType;
