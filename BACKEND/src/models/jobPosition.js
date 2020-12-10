import fs from "fs";

class jobPosition {
  constructor() {
    let jobpositionlist = fs.readFileSync(
      "../ BackEnd/src/databases/jobPosition.json"
    );
    if (jobpositionlist) {
      this.JobPosition = JSON.parse(jobpositionlist);
    } else {
      this.JobPosition = [];
    }
  }

  saveJobPositionDataJson() {
    fs.writeFileSync(
      "../ BackEnd/src/databases/jobPosition.json",
      JSON.stringify(this.JobPosition),
      err => {
        if (err) throw err;
        console.log("Complete!!!");
      }
    );
  }

  createNewJobPosition(data) {

  }
}
