import fs from "fs";
import uuid from "uuid";

class JobDegree {
  constructor() {
    let jobDegree = fs.readFileSync("../BACKEND/src/databases/jobDegree.json");
    if (jobDegree) {
      this.JobDegree = JSON.parse(jobDegree);
    } else {
      this.JobDegree = [];
    }
  }

  saveJobActivityDataJson() {
    fs.writeFileSync(
      "../BACKEND/src/databases/jobDegree.json",
      JSON.stringify(this.JobDegree),
      err => {
        if (err) throw err;
        console.log("Complete!!!");
      }
    );
  }
}

let jobDegree = new JobDegree();

module.exports = jobDegree;
