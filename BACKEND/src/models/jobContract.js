import fs from "fs";
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

  returnExperienceYear(data) {
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
    }
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
    // console.log(experienceyearlist);
    return experienceyearlist;
  }

  returnProfileIdList(data) {
    let experienceyearlist = this.returnExperienceYear(data);
    // console.log(experienceyearlist);
    let profileidlist = [];
    experienceyearlist.forEach(item => {
      // console.log(item.experienceYear);
      // console.log(data.experienceYear);
      if ("-9999" === item.experienceYear) {
        profileidlist = [
          {
            profileId: "-9999"
          }
        ];
      } else if (data.experienceYear === item.experienceYear) {
        let profileid = {
          profileId: item.profileId
        };
        profileidlist.push(profileid);
      }
    });
    // console.log(profileidlist);
    return profileidlist;
  }
}

let jobContract = new JobContract();

module.exports = jobContract;
