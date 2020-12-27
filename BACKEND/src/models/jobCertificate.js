import fs from "fs";
import uuid from "uuid";

class JobCertificate {
  constructor() {
    let jobCertificate = fs.readFileSync(
      "../BACKEND/src/databases/jobCertificate.json"
    );
    if (jobCertificate) {
      this.JobCertificate = JSON.parse(jobCertificate);
    } else {
      this.JobCertificate = [];
    }
  }

  saveJobActivityDataJson() {
    fs.writeFileSync(
      "../BACKEND/src/databases/jobCertificate.json",
      JSON.stringify(this.JobCertificate),
      err => {
        if (err) throw err;
        console.log("Complete!!!");
      }
    );
  }
}

let jobCertificate = new JobCertificate();

module.exports = jobCertificate;
