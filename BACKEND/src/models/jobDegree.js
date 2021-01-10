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
    let profileidlist = [];
    this.JobDegree.forEach(item => {
      if (
        item.degreeIdentification.toUpperCase() ===
        data.degreeIdentification.toUpperCase()
      ) {
        item.degreeConfirm.forEach(item2 => {
          let checkprofileid = 0;
          profileidlist.forEach(item3 => {
            if (item2.profileId === item3.profileId) {
              checkprofileid = 1;
            }
          });
          if (checkprofileid === 0) {
            let profileid = {
              profileId: item.profileId
            };
            profileidlist.push(profileid);
          }
        });
      }
    });
    return profileidlist;
  }

  returnDegreeSpecialityProfileIdList(data) {
    this.JobDegree.forEach((item, index) => {
      if (
        item.degreeSpeciality.toUpperCase() ===
        data.degreeSpeciality.toUpperCase()
      ) {
        this.JobDegree[index].degreeConfirm.forEach(item2 => {
          profileidlist.forEach(item3 => {
            if (item2.profileId !== item3.profileId) {
              let profileid = {
                profileId: item.profileId
              };
              profileidlist.push(profileid);
            }
          });
        });
      }
    });
    return profileidlist;
  }

  returnDegreeProfileIdList(data) {
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
    if (index1 < 0 && index2 < 0) {
      profileidlist = [
        {
          profileId: "-9999"
        }
      ];
    } else if (index1 >= 0 && index2 < 0) {
      profileidlist = this.returndegreeSpecialityProfileIdList(data);
    } else if (index1 < 0 && index2 >= 0) {
      profileidlist = this.returndegreeIdentificationProfileIdList(data);
    } else if (index1 >= 0 && index2 >= 0) {
      profileidlist = this.returndegreeProfileIdList(data);
    }
    return profileidlist;
  }
}

let jobDegree = new JobDegree();

module.exports = jobDegree;
