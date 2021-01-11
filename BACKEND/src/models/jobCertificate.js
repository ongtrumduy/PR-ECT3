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

  checkCertificateDate(item, data) {
    let checktime = 0;
    if (
      moment(item.certificateEndDate, "DD/MM/YYYY").year() >
      moment(data.certificateDate, "YYYY/MM/DD").year()
    ) {
      checktime = 1;
    } else if (
      moment(item.certificateEndDate, "DD/MM/YYYY").year() ===
      moment(data.certificateDate, "YYYY/MM/DD").year()
    ) {
      if (
        moment(item.certificateEndDate, "DD/MM/YYYY").month() >
        moment(data.certificateDate, "YYYY/MM/DD").month()
      ) {
        checktime = 1;
      } else if (
        moment(item.certificateEndDate, "DD/MM/YYYY").month() ===
        moment(data.certificateDate, "YYYY/MM/DD").month()
      ) {
        if (
          moment(item.certificateEndDate, "DD/MM/YYYY").date() >=
          moment(data.certificateDate, "YYYY/MM/DD").date()
        ) {
          checktime = 1;
        }
      }
    }
    return checktime;
  }

  returnCertificateNameProfileIdList(data) {
    let index = this.JobCertificate.findIndex(item => {
      return (
        data.certificateName.toUpperCase() ===
        item.certificateName.toUpperCase()
      );
    });
    let profileidlist = [];
    this.JobCertificate[index].certificatePeriod.forEach(item => {
      let profileid = {
        profileId: item.profileId
      };
      profileidlist.push(profileid);
    });
    return profileidlist;
  }

  returnCertificateDateProfileIdList(data) {
    let profileidlist = [];
    let checktime;
    this.JobCertificate.forEach(item => {
      item.certificatePeriod.forEach(item2 => {
        item2.profileCertificate.forEach(item3 => {
          checktime = this.checkCertificateDate(item3, data);
        });
        if (checktime === 1) {
          let checkprofileid = 0;
          profileidlist.forEach(item4 => {
            if (item2.profileId === item4.profileId) {
              checkprofileid = 1;
            }
          });
          if (checkprofileid === 0) {
            let profileid = {
              profileId: item2.profileId
            };
            profileidlist.push(profileid);
          }
        }
      });
    });
    return profileidlist;
  }

  returnCertificateProfileIdList(data) {
    let index = this.JobCertificate.findIndex(item => {
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
    } else {
      this.JobCertificate[index].certificatePeriod.forEach(item => {
        checktime = 0;
        item.profileCertificate.forEach(item2 => {
          // console.log(moment(item2.certificateEndDate, "DD/MM/YYYY").year());
          // console.log(moment(data.certificateDate, "YYYY/MM/DD").year());
          checktime = this.checkCertificateDate(item2, data);
        });
        if (checktime === 1) {
          let profileid = {
            profileId: item.profileId
          };
          profileidlist.push(profileid);
        }
      });
    }
    return profileidlist;
  }

  returnProfileIdList(data) {
    let profileidlist = [];
    let index = this.JobCertificate.findIndex(item => {
      return (
        data.certificateName.toUpperCase() ===
        item.certificateName.toUpperCase()
      );
    });
    if (index < 0 && data.certificateDate === "") {
      profileidlist = [
        {
          profileId: "-9999"
        }
      ];
    } else if (index < 0 && data.certificateDate !== "") {
      profileidlist = this.returnCertificateDateProfileIdList(data);
    } else if (index >= 0 && data.certificateDate === "") {
      profileidlist = this.returnCertificateNameProfileIdList(data);
    } else if (index >= 0 && data.certificateDate !== "") {
      profileidlist = this.returnCertificateProfileIdList(data);
    }
    return profileidlist;
  }

  returnCertificateName(data) {
    let certificateList = [];
    this.JobCertificate.forEach(item => {
      let checkcertificate = 0;
      item.certificatePeriod.forEach(item1 => {
        if (data.profileId === item1.profileId) {
          checkcertificate = 1;
          item1.profileCertificate.forEach(item => {
            let certificateDate;
          });

          let certificate = {
            profileId: item1.profileId,
            certificateName: item.certificateName,
            certificateDate: certificateDate
          };
        }
      });
    });
  }
}

let jobCertificate = new JobCertificate();

module.exports = jobCertificate;
