import fs from "fs";
import jobProfile from "./jobProfile";
import jobContract from "./jobContract";
import jobDegree from "./jobDegree";
import jobCertificate from "./jobCertificate";
import uuid from "uuid";

class JobEmployee {
  constructor() {
    let jobEmployee = fs.readFileSync(
      "../BACKEND/src/databases/jobEmployee.json"
    );
    if (jobEmployee) {
      this.JobEmployee = JSON.parse(jobEmployee);
    } else {
      this.JobEmployee = [];
    }
  }

  saveJobActivityDataJson() {
    fs.writeFileSync(
      "../BACKEND/src/databases/jobEmployee.json",
      JSON.stringify(this.JobEmployee),
      err => {
        if (err) throw err;
        console.log("Complete!!!");
      }
    );
  }

  returnTrueProfileIdList(data) {
    let profilecontractlist = jobContract.returnProfileIdList(data);
    let profilecertificatelist = jobCertificate.returnProfileIdList(data);
    let profiledegreelist = jobDegree.returnProfileIdList(data);
    let profileidlist = jobProfile.returnProfileList();
    let sumcheck;
    let returnTrueProfileIdList = [];
    profileidlist.forEach(item => {
      sumcheck = 0;
      profilecontractlist.forEach(itemcontract => {
        if (item.profileId === itemcontract.profileId) {
          sumcheck++;
        }
      });
      profilecertificatelist.forEach(itemcertififcate => {
        if (item.profileId === itemcertififcate.profileId) {
          sumcheck++;
        }
      });
      profiledegreelist.forEach(itemdegree => {
        if (item.profileId === itemdegree.profileId) {
          sumcheck++;
        }
      });
      if (sumcheck >= 3) {
        returnTrueProfileIdList.push(item.profileId);
      }
    });
    return returnTrueProfileIdList;
  }
}

let jobEmployee = new JobEmployee();

module.exports = jobEmployee;
