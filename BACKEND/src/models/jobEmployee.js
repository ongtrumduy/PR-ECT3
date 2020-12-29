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
    let profileidlist = jobProfile.returnProfileIdList();
    console.log(profilecontractlist);
    console.log(profilecertificatelist);
    console.log(profiledegreelist);
    console.log(profileidlist);
    let sumcheck;
    let checkerror;
    let returnTrueProfileIdList = [];
    profileidlist.forEach(item => {
      sumcheck = 0;
      profilecontractlist.forEach(itemcontract => {
        if (itemcontract.profileId == "-9999") {
          sumcheck = -999999999999999999;
        } else if (item.profileId === itemcontract.profileId) {
          sumcheck++;
        }
      });
      profilecertificatelist.forEach(itemcertififcate => {
        if (itemcertififcate.profileId == "-9999") {
          sumcheck = -999999999999999999;
        } else if (item.profileId === itemcertififcate.profileId) {
          sumcheck++;
        }
      });
      profiledegreelist.forEach(itemdegree => {
        if (itemdegree.profileId == "-9999") {
          sumcheck = -999999999999999999;
        } else if (item.profileId === itemdegree.profileId) {
          sumcheck++;
        }
      });
      if (sumcheck < 0) {
        checkerror = 1;
      }
      if (sumcheck >= 3) {
        let profileid = {
          profileId: item.profileId
        };
        returnTrueProfileIdList.push(profileid);
      }
    });
    if (checkerror === 1) {
      let profileid = {
        profileId: "-9999"
      };
      returnTrueProfileIdList.push(profileid);
    }
    return returnTrueProfileIdList;
  }

  returnTrueProfileInforList(data) {
    let trueprofileidlist = this.returnTrueProfileIdList(data);
    console.log(trueprofileidlist);
    let trueprofileinforlist = [];
    trueprofileidlist.forEach(item => {
      trueprofileinforlist.push(jobProfile.returnProfileInfor(item));
    });
    console.log(trueprofileinforlist);
    return trueprofileinforlist;
  }
}

let jobEmployee = new JobEmployee();

module.exports = jobEmployee;
