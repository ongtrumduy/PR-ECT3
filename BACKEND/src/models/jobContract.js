import fs from "fs";
import jobProfile from "./jobProfile";
import moment from "moment";
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

  returnExperienceYear() {
    let positionexperienceyearlist = [];
    let experienceyearlist = [];
    this.JobContract.forEach(item => {
      item.contractPositionList.forEach(item2 => {
        let sumexperienceyear = 0;
        item2.profileContract.forEach(item3 => {
          item3.contractPositionChildList.forEach(item4 => {
            sumexperienceyear +=
              moment(item4.contractEndDate, "DD/MM/YYYY").year() -
              moment(item4.contractStartDate, "DD/MM/YYYY").year();
          });
        });
        let experienceyear = {
          profileId: item2.profileId,
          experienceYear: "" + sumexperienceyear
        };
        experienceyearlist.push(experienceyear);
      });
      let positionexperienceyear = {
        contractId: item.contractId,
        jobPositionFieldId: item.jobPositionFieldId,
        experienceYearList: experienceyearlist
      };
      positionexperienceyearlist.push(positionexperienceyear);
    });
    console.log(positionexperienceyearlist);
    return positionexperienceyearlist;
  }

  returnSumExperienceYear() {
    let jobProfileIdList = jobProfile.returnProfileIdList();
    let positionexperienceyearlist = this.returnExperienceYear();
    let sumexperienceyearlist = [];
    jobProfileIdList.forEach(item => {
      let sumexperienceyear = 0;
      positionexperienceyearlist.forEach(item1 => {
        item1.experienceYearList.forEach(item2 => {
          if (item2.profileId === item.profileId) {
            sumexperienceyear += item2.experienceyear;
          }
        });
      });
      if (sumexperienceyear !== 0) {
        let sumexperienceyear = {
          profileId: item.profileId,
          sumexperienceyear: sumexperienceyear
        };
      }
      sumexperienceyearlist.push(sumexperienceyear);
    });
    return sumexperienceyearlist;
  }

  returnJobPositionExperienceYear(data) {
    let experienceyearlist = [];
    let index = this.JobContract.findIndex(item => {
      return item.jobPositionFieldId === data.jobPositionFieldId;
    });
    let sumexperienceyear;
    // console.log(index);
    if (index === -1) {
      experienceyearlist = [
        {
          profileId: "-9999",
          experienceYear: "-9999"
        }
      ];
    } else {
      this.JobContract[index].contractPositionList.forEach(item => {
        sumexperienceyear = 0;
        item.profileContract.forEach(item2 => {
          item2.contractPositionChildList.forEach(item3 => {
            // console.log(moment(item3.contractEndDate, "DD/MM/YYYY").year());
            // console.log(moment(item3.contractStartDate, "DD/MM/YYYY").year());
            sumexperienceyear +=
              moment(item3.contractEndDate, "DD/MM/YYYY").year() -
              moment(item3.contractStartDate, "DD/MM/YYYY").year();
          });
        });
        // console.log(sumexperienceyear);
        let experienceyear = {
          profileId: item.profileId,
          experienceYear: "" + sumexperienceyear
        };
        experienceyearlist.push(experienceyear);
      });
    }
    // console.log(experienceyearlist);
    return experienceyearlist;
  }

  returnExperienceYearPositionProfileIdList(data) {
    let sumexperienceyearlist = this.returnSumExperienceYear();
    let profileidlist = [];
    sumexperienceyearlist.forEach(item => {
      let checksum = 0;
      if (item.sumexperienceyear === data.experienceYear) {
        checksum = 1;
        let experienceyear = {
          profileId: item.profileId
        };
        profileidlist.push(experienceyear);
      }
    });
    if (checksum === 0) {
      profileidlist = [
        {
          profileId: "-9999"
        }
      ];
    }
    return profileidlist;
  }

  returnContractPositionProfileIdList(data) {
    let profileidlist = [];
    let index = this.JobContract.findIndex(item => {
      return item.jobPositionFieldId === data.jobPositionFieldId;
    });
    this.JobContract[index].contractPositionList.forEach(item => {
      let profileid = {
        profileId: item.profileId
      };
      profileidlist.push(profileid);
    });
    return profileidlist;
  }

  returnContractProfileIdList(data) {
    let experienceyearlist = this.returnJobPositionExperienceYear(data);
    // console.log(experienceyearlist);
    let profileidlist = [];
    let checkempty = 0;
    experienceyearlist.forEach(item => {
      if (data.experienceYear <= item.experienceYear) {
        checkempty = 1;
        let profileid = {
          profileId: item.profileId
        };
        profileidlist.push(profileid);
      }
    });
    if (checkempty === 0) {
      profileidlist = [
        {
          profileId: "-9999"
        }
      ];
    }
    // console.log(profileidlist);
    return profileidlist;
  }

  returnProfileIdList(data) {
    let profileidlist = [];
    let index = this.JobContract.findIndex(item => {
      return data.jobPositionFieldId === item.jobPositionFieldId;
    });
    if (index < 0 && data.experienceYear === "") {
      profileidlist = [
        {
          profileId: "-9999"
        }
      ];
    } else if (index < 0 && data.experienceYear !== "") {
      profileidlist = returnExperienceYearPositionProfileIdList(data);
    } else if (index >= 0 && data.experienceYear === "") {
      profileidlist = returnContractPositionProfileIdList(data);
    } else if (index >= 0 && data.experienceYear !== "") {
      profileidlist = returnContractProfileIdList(data);
    }
    return profileidlist;
  }
}

let jobContract = new JobContract();

module.exports = jobContract;
