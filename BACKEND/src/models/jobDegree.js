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
    // console.log(data.degreeSpeciality.toUpperCase());

    let index = this.JobDegree.findIndex(item => {
      // console.log(item.degreeIdentification.toUpperCase());
      // console.log(item.degreeSpeciality.toUpperCase());
      return (
        item.degreeIdentification.toUpperCase() ===
          data.degreeIdentification.toUpperCase() &&
        item.degreeSpeciality.toUpperCase() ===
          data.degreeSpeciality.toUpperCase()
      );
    });
    // console.log(index);
    let profileidlist = [];
    if (index === -1) {
      profileidlist = [
        {
          profileId: "-9999"
        }
      ];
    }
    this.JobDegree[index].degreeConfirm.forEach(item => {
      let profileid = {
        profileId: item.profileId
      };
      profileidlist.push(profileid);
    });
    return profileidlist;
  }
}

let jobDegree = new JobDegree();

module.exports = jobDegree;
