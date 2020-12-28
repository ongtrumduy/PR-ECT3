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
}

let jobContract = new JobContract();

module.exports = jobContract;
