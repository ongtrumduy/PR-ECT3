import fs from "fs";
import uuid from "uuid";

class JobContract {
  constructor() {
    let jobContract = fs.readFileSync(
      "../BACKEND/src/databases/jobContract.json"
    );
    if (jobContract) {
      this.JobContract = JSON.parse(jobContract);
    } else {
      this.JobContract = [];
    }
  }

  saveJobActivityDataJson() {
    fs.writeFileSync(
      "../BACKEND/src/databases/jobContract.json",
      JSON.stringify(this.JobContract),
      err => {
        if (err) throw err;
        console.log("Complete!!!");
      }
    );
  }

  returnExperienceYear(data) {
    let experienceyearlist = [];
    let index = this.JobContract.findIndex(item => {
      return item.jobPositionFieldId === data.jobPositionFieldId;
    });
    let sumexperienceyear;
    console.log(index);
    this.JobContract[index].contractPositionList.forEach(item => {
      sumexperienceyear = 0;
      item.contractPositionChildList.forEach(item => {
        sumexperienceyear +=
          moment(item.contractEndDate, "DD/MM/YYYY").year() -
          moment(item.contractEndDate, "DD/MM/YYYY").year();
      });
      let experienceyear = {
        profileId: item.profileId,
        experienceyear: sumexperienceyear
      };
      experienceyearlist.push(experienceyear);
    });
    return experienceyearlist;
  }

  returnProfileIdList(data) {
    let experienceyearlist = this.returnExperienceYear(data);
    let profileidlist = [];
    experienceyearlist.forEach(item => {
      if (data.experienceyear === item.experienceyear) {
        profileidlist.push(item.profileId);
      }
    });
    return profileidlist;
  }
}

let jobContract = new JobContract();

module.exports = jobContract;
