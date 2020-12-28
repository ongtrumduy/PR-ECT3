import fs from "fs";
import uuid from "uuid";

class JobProfile {
  constructor() {
    let jobProfile = fs.readFileSync(
      "../BACKEND/src/databases/jobProfile.json"
    );
    if (jobProfile) {
      this.JobProfile = JSON.parse(jobProfile);
    } else {
      this.JobProfile = [];
    }
  }

  saveJobActivityDataJson() {
    fs.writeFileSync(
      "../BACKEND/src/databases/jobProfile.json",
      JSON.stringify(this.JobProfile),
      err => {
        if (err) throw err;
        console.log("Complete!!!");
      }
    );
  }

  returnProfileInfor(data) {
    let index = this.JobProfile.findIndex(item => {
      return data.profileId === item.profileId;
    });
    let profileinfor = [];
    profileinfor.push(this.JobProfile[index]);
    return profileinfor;
  }

  returnProfileList() {
    let profileidlist = [];
    this.JobProfile.forEach(item => {
      profileidlist.push(item.profileId);
    });
    return profileidlist;
  }
}

let jobProfile = new JobProfile();

module.exports = jobProfile;
