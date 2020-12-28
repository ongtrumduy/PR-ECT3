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
    let index = this.JobCertificate.findIndex(item => {
      return (
        data.certificateName.toUpperCase() ===
        item.certificateName.toUpperCase()
      );
    });
    let profileidlist = [];
    let checktime;
    this.JobCertificate[index].certificatePeriod.forEach(item => {
      checktime = 0;
      if (
        moment(
          item.profileCertificate.certificateEndDate,
          "DD/MM/YYYY"
        ).year() < moment(data.certificateDate, "DD/MM/YYYY").year()
      ) {
        checktime = 1;
      } else if (
        moment(
          item.profileCertificate.certificateEndDate,
          "DD/MM/YYYY"
        ).year() === moment(data.certificateDate, "DD/MM/YYYY").year()
      ) {
        if (
          moment(
            item.profileCertificate.certificateEndDate,
            "DD/MM/YYYY"
          ).month() < moment(data.certificateDate, "DD/MM/YYYY").month()
        ) {
          checktime = 1;
        } else if (
          moment(
            item.profileCertificate.certificateEndDate,
            "DD/MM/YYYY"
          ).month() === moment(data.certificateDate, "DD/MM/YYYY").month()
        ) {
          if (
            moment(
              item.profileCertificate.certificateEndDate,
              "DD/MM/YYYY"
            ).date() <= moment(data.certificateDate, "DD/MM/YYYY").date()
          ) {
            checktime = 1;
          }
        }
      }
      if (checktime === 1) {
        profileidlist.push(item.profileid);
      }
    });
    return profileidlist;
  }
}

let jobCertificate = new JobCertificate();

module.exports = jobCertificate;
