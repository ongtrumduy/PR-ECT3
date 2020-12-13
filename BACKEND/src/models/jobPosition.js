import fs from "fs";

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
      jobPositionFieldId: countJobPositionField,
      jobPositionFieldName: data.jobPositionFieldName,
      jobTypeFieldId: data.jobTypeFieldId,
      jobPositionChild: []
    };
    this.JobPosition.push(newJobPositionField);
    this.saveJobPositionDataJson();
  }

  createNewJobPositionChild(data) {
    let index = this.JobPosition.findIndex(item => {
      return data.jobPositionFieldId === item.jobPositionFieldId;
    });
    let countJobPositionField = this.JobPosition[index].jobPositionChild.length;

    let newJobPositionChild = {
      jobPositionChildId: index + "-" + countJobPositionField,
      jobPositionChildName: data.jobPositionChildName
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

  readJobPositionChild(data) {
    let index = data.jobPositionChildId;
    return this.JobPosition[index].jobPositionChild;
  }

  updateJobPositionField() {
    this.JobPosition.forEach(item => {
      if ((data.jobPositionFieldId = item.jobPositionFieldId)) {
        item.jobPositionFieldName = data.jobPositionFieldName;
      }
    });
  }

  updateJobPositionChild(data) {
    let indexField = this.JobPosition.findIndex(item => {
      return (data.jobPositionFieldId = item.jobPositionFieldId);
    });
    this.JobPosition[indexField].jobPositionChild.forEach(item => {
      if ((data.jobPositionChildId = item.jobPositionChildId)) {
        item.jobPositionChildName = data.jobPositionChildName;
      }
    });
  }

  deleteJobPositionField() {
    let indexField = this.JobPosition.findIndex(item => {
      return (data.jobPositionFieldId = item.jobPositionFieldId);
    });
    this.JobPosition.splice(indexField, 1);
    this.saveJobPositionDataJson();
  }

  deleteJobPositionChild(data) {
    let indexField = this.JobPosition.findIndex(item => {
      return (data.jobPositionFieldId = item.jobPositionFieldId);
    });
    let indexChild = this.JobPosition[indexField].jobPositionChild.findIndex(
      item => {
        return (data.jobPositionChildId = item.jobPositionChildId);
      }
    );
    this.JobPosition[indexField].jobPositionChild.splice(indexChild, 1);
    this.saveJobPositionDataJson();
  }
}

let jobPosition = new JobPosition();

module.exports = jobPosition;
