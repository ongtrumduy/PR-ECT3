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

  returnDegreeIdentificationProfileIdList(data) {
    // console.log(`Bắt ${data}`);
    let profileidlist = [];
    this.JobDegree.forEach(item => {
      if (
        item.degreeIdentification.toUpperCase() ===
        data.degreeIdentification.toUpperCase()
      ) {
        item.degreeConfirm.forEach(item2 => {
          let checkprofileid = 0;
          profileidlist.forEach(item3 => {
            // console.log("bắt");
            // console.log(item3.profileId);
            if (item2.profileId === item3.profileId) {
              checkprofileid = 1;
            }
          });
          if (checkprofileid === 0) {
            let profileid = {
              profileId: item2.profileId
            };
            profileidlist.push(profileid);
          }
        });
      }
    });
    return profileidlist;
  }

  returnDegreeSpecialityProfileIdList(data) {
    let profileidlist = [];
    this.JobDegree.forEach(item => {
      if (
        item.degreeSpeciality.toUpperCase() ===
        data.degreeSpeciality.toUpperCase()
      ) {
        item.degreeConfirm.forEach(item2 => {
          let checkprofileid = 0;
          profileidlist.forEach(item3 => {
            // console.log("bắt");
            // console.log(item3.profileId);
            if (item2.profileId === item3.profileId) {
              checkprofileid = 1;
            }
          });
          if (checkprofileid === 0) {
            let profileid = {
              profileId: item2.profileId
            };
            profileidlist.push(profileid);
          }
        });
      }
    });
    return profileidlist;
  }

  returnDegreeProfileIdList(data) {
    let profileidlist = [];
    let index = this.JobDegree.findIndex(item => {
      return (
        item.degreeIdentification.toUpperCase() ===
          data.degreeIdentification.toUpperCase() &&
        item.degreeSpeciality.toUpperCase() ===
          data.degreeSpeciality.toUpperCase()
      );
    });
    this.JobDegree[index].degreeConfirm.forEach(item => {
      let profileid = {
        profileId: item.profileId
      };
      profileidlist.push(profileid);
    });
    return profileidlist;
  }

  returnProfileIdList(data) {
    // console.log("Bắt");
    // console.log(data);
    let profileidlist = [];
    let index1 = this.JobDegree.findIndex(item => {
      return (
        item.degreeIdentification.toUpperCase() ===
        data.degreeIdentification.toUpperCase()
      );
    });
    let index2 = this.JobDegree.findIndex(item => {
      return (
        item.degreeSpeciality.toUpperCase() ===
        data.degreeSpeciality.toUpperCase()
      );
    });
    // console.log(`Bắt index2 ${index2}`);
    if (index1 < 0 && index2 < 0) {
      profileidlist = [
        {
          profileId: "-9999"
        }
      ];
    } else if (index1 >= 0 && index2 < 0) {
      profileidlist = this.returnDegreeIdentificationProfileIdList(data);
    } else if (index1 < 0 && index2 >= 0) {
      profileidlist = this.returnDegreeSpecialityProfileIdList(data);
    } else if (index1 >= 0 && index2 >= 0) {
      profileidlist = this.returnDegreeProfileIdList(data);
    }
    return profileidlist;
  }
}

let jobDegree = new JobDegree();

module.exports = jobDegree;
