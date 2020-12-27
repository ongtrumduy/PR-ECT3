import fs from "fs";
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
}

let jobEmployee = new JobEmployee();

module.exports = jobEmployee;
