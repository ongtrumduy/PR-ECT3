import fs from "fs";
import jobContract from "./jobContract";
import jobCertificate from "./jobCertificate";
import jobDegree from "./jobDegree";
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

  returnProfileInfor(data) {
    let index = this.JobProfile.findIndex(item => {
      return data.profileId === item.profileId;
    });
    return this.JobProfile[index];
  }

  returnProfileFullName(data) {
    let index = this.JobProfile.findIndex(item => {
      return data.profileId === item.profileId;
    });
    return this.JobProfile[index].fullname;
  }

  returnProfileIdList() {
    let profileidlist = [];
    this.JobProfile.forEach(item => {
      let profileid = {
        profileId: item.profileId
      };
      profileidlist.push(profileid);
    });
    return profileidlist;
  }

  returnTrueProfileInfor(data) {
    let trueprofileinfor = {
      profileId: data.profileId,
      fullname: this.returnProfileFullName(data),
      jobPositionName: jobContract.returnPositionName(data),
      degreeIdentification: jobDegree.returnDegreeIndentificateName(data),
      degreeSpeciality: jobDegree.returnDegreeSpecialityName(data),
      certificateName: jobCertificate.returnCertificateNameDate(data),
      degreeType: jobDegree.returnDegreeType(data)
    };
    return trueprofileinfor;
  }
}

let jobProfile = new JobProfile();

module.exports = jobProfile;
