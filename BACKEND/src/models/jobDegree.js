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

  returnProfileIdList(data) {
    let index = this.JobDegree.findIndex(item => {
      return (
        item.degreeIdentification.toUpperCase() ===
          data.degreeIdentification.toUpperCase() &&
        item.degreeSpeciality.toUpperCase() ===
          data.degreeSpeciality.toUpperCase()
      );
    });
    let profileidlist = [];
    this.JobDegree[index].degreeConfirm.forEach(item => {
      profileidlist.push(item.profileId);
    });
    return profileidlist;
  }
}

let jobDegree = new JobDegree();

module.exports = jobDegree;
