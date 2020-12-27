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
}

let jobProfile = new JobProfile();

module.exports = jobProfile;
