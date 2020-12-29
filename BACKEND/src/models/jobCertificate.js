import fs from "fs";
import uuid from "uuid";
import moment from "moment";

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

  returnProfileIdList(data) {
    // console.log(data.certificateName.toUpperCase());
    let index = this.JobCertificate.findIndex(item => {
      // console.log(item.certificateName.toUpperCase());
      return (
        data.certificateName.toUpperCase() ===
        item.certificateName.toUpperCase()
      );
    });
    let profileidlist = [];
    let checktime;
    if (index === -1) {
      profileidlist = [
        {
          profileId: "-9999"
        }
      ];
    }
    // console.log(index);

    this.JobCertificate[index].certificatePeriod.forEach(item => {
      checktime = 0;
      item.profileCertificate.forEach(item2 => {
        // console.log(moment(item2.certificateEndDate, "DD/MM/YYYY").year());
        // console.log(moment(data.certificateDate, "YYYY/MM/DD").year());
        if (
          moment(item2.certificateEndDate, "DD/MM/YYYY").year() >
          moment(data.certificateDate, "YYYY/MM/DD").year()
        ) {
          // console.log("A");
          checktime = 1;
        } else if (
          moment(item2.certificateEndDate, "DD/MM/YYYY").year() ===
          moment(data.certificateDate, "YYYY/MM/DD").year()
        ) {
          if (
            moment(item2.certificateEndDate, "DD/MM/YYYY").month() >
            moment(data.certificateDate, "YYYY/MM/DD").month()
          ) {
            // console.log("B");
            checktime = 1;
          } else if (
            moment(item2.certificateEndDate, "DD/MM/YYYY").month() ===
            moment(data.certificateDate, "YYYY/MM/DD").month()
          ) {
            if (
              moment(item2.certificateEndDate, "DD/MM/YYYY").date() >=
              moment(data.certificateDate, "YYYY/MM/DD").date()
            ) {
              // console.log("C");
              checktime = 1;
            }
          }
        }
      });
      if (checktime === 1) {
        let profileid = {
          profileId: item.profileId
        };
        profileidlist.push(profileid);
      }
    });

    return profileidlist;
  }
}

let jobCertificate = new JobCertificate();

module.exports = jobCertificate;
