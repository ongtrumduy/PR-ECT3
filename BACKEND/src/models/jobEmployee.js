import fs from "fs";
import jobProfile from "./jobProfile";
import jobContract from "./jobContract";
import jobDegree from "./jobDegree";
import jobCertificate from "./jobCertificate";
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

  returnTrueProfileIdList(data) {
    let returnTrueProfileIdList = [];
    let profilecontractlist = jobContract.returnProfileIdList(data);
    let profilecertificatelist = jobCertificate.returnProfileIdList(data);
    let profiledegreelist = jobDegree.returnProfileIdList(data);
    let checkcontract = 0;
    let checkcertificate = 0;
    let checkdegree = 0;
    profilecontractlist.some(item => {
      if (item.profileId !== "-9999") {
        checkcontract = 1;
        return true;
      } else return false;
    });
    profilecertificatelist.some(item => {
      if (item.profileId !== "-9999") {
        checkcertificate = 1;
        return true;
      } else return false;
    });
    profiledegreelist.some(item => {
      if (item.profileId !== "-9999") {
        checkdegree = 1;
        return true;
      } else return false;
    });
    if (checkcontract === 0 && checkcertificate === 0 && checkdegree === 0) {
      let profileid = {
        profileId: "-9999"
      };
      returnTrueProfileIdList.push(profileid);
    } else if (
      checkcontract === 1 &&
      checkcertificate === 0 &&
      checkdegree === 0
    ) {
      returnTrueProfileIdList = profilecontractlist;
    } else if (
      checkcontract === 0 &&
      checkcertificate === 1 &&
      checkdegree === 0
    ) {
      returnTrueProfileIdList = profilecertificatelist;
    } else if (
      checkcontract === 0 &&
      checkcertificate === 0 &&
      checkdegree === 1
    ) {
      returnTrueProfileIdList = profiledegreelist;
    } else if (
      checkcontract === 1 &&
      checkcertificate === 1 &&
      checkdegree === 0
    ) {
      profilecontractlist.forEach(item => {
        profilecertificatelist.forEach(item1 => {
          if (item.profileId === item1.profileId) {
            let profileid = {
              profileId: item.profileId
            };
            returnTrueProfileIdList.push(profileid);
          }
        });
      });
    } else if (
      checkcontract === 0 &&
      checkcertificate === 1 &&
      checkdegree === 1
    ) {
      profilecertificatelist.forEach(item => {
        profiledegreelist.forEach(item1 => {
          if (item.profileId === item1.profileId) {
            let profileid = {
              profileId: item.profileId
            };
            returnTrueProfileIdList.push(profileid);
          }
        });
      });
    } else if (
      checkcontract === 1 &&
      checkcertificate === 0 &&
      checkdegree === 1
    ) {
      profilecontractlist.forEach(item => {
        profiledegreelist.forEach(item1 => {
          if (item.profileId === item1.profileId) {
            let profileid = {
              profileId: item.profileId
            };
            returnTrueProfileIdList.push(profileid);
          }
        });
      });
    } else if (
      checkcontract === 1 &&
      checkcertificate === 1 &&
      checkdegree === 1
    ) {
      let returnprofileidlist = [];
      profilecontractlist.forEach(item => {
        profilecertificatelist.forEach(item1 => {
          if (item.profileId === item1.profileId) {
            let profileid = {
              profileId: item.profileId
            };
            returnprofileidlist.push(profileid);
          }
        });
      });
      profiledegreelist.forEach(item => {
        returnprofileidlist.forEach(item1 => {
          if (item.profileId === item1.profileId) {
            let profileid = {
              profileId: item.profileId
            };
            returnTrueProfileIdList.push(profileid);
          }
        });
      });
    }
    // console.log(returnTrueProfileIdList);
    return returnTrueProfileIdList;
  }

  returnNewTrueProfileInforList(data) {
    let trueprofileinforlist = [];
    let trueprofileidlist = this.returnTrueProfileIdList(data);
    let checkerror;
    trueprofileidlist.forEach(item => {
      if (item.profileId === "-9999") {
        checkerror = 1;
      }
    });
    if (checkerror === 1) {
      trueprofileinforlist = [];
    } else {
      trueprofileidlist.forEach(item => {
        trueprofileinforlist.push(jobProfile.returnTrueProfileInfor(item));
      });
    }
    // console.log("Xuất ra");
    // console.log(trueprofileinforlist);
    return trueprofileinforlist;
  }

  // returnTrueProfileIdList(data) {
  //   let profilecontractlist = jobContract.returnProfileIdList(data);
  //   let profilecertificatelist = jobCertificate.returnProfileIdList(data);
  //   let profiledegreelist = jobDegree.returnProfileIdList(data);
  //   let profileidlist = jobProfile.returnProfileIdList();
  //   console.log(profilecontractlist);
  //   console.log(profilecertificatelist);
  //   console.log(profiledegreelist);
  //   console.log(profileidlist);
  //   console.log("===============================================");
  //   let sumcheck;
  //   let checkerror;
  //   let returnTrueProfileIdList = [];
  //   profileidlist.forEach(item => {
  //     sumcheck = 0;
  //     profilecontractlist.forEach(itemcontract => {
  //       if (itemcontract.profileId == "-9999") {
  //         sumcheck = -999999999999999999;
  //       } else if (item.profileId === itemcontract.profileId) {
  //         sumcheck++;
  //       }
  //     });
  //     profilecertificatelist.forEach(itemcertififcate => {
  //       if (itemcertififcate.profileId == "-9999") {
  //         sumcheck = -999999999999999999;
  //       } else if (item.profileId === itemcertififcate.profileId) {
  //         sumcheck++;
  //       }
  //     });
  //     profiledegreelist.forEach(itemdegree => {
  //       if (itemdegree.profileId == "-9999") {
  //         sumcheck = -999999999999999999;
  //       } else if (item.profileId === itemdegree.profileId) {
  //         sumcheck++;
  //       }
  //     });
  //     // console.log(`Check errorr ${sumcheck}`);
  //     if (sumcheck < 0) {
  //       checkerror = 1;
  //     }
  //     if (sumcheck >= 3) {
  //       let profileid = {
  //         profileId: item.profileId
  //       };
  //       returnTrueProfileIdList.push(profileid);
  //     }
  //   });
  //   // console.log(`Check errorr ${checkerror}`);
  //   if (checkerror === 1) {
  //     let profileid = {
  //       profileId: "-9999"
  //     };
  //     returnTrueProfileIdList.push(profileid);
  //   }
  //   return returnTrueProfileIdList;
  // }

  // returnTrueProfileInforList(data) {
  //   let trueprofileinforlist = [];
  //   let trueprofileidlist = this.returnTrueProfileIdList(data);
  //   let checkerror;
  //   // console.log(trueprofileidlist);
  //   trueprofileidlist.forEach(item => {
  //     if (item.profileId === "-9999") {
  //       checkerror = 1;
  //     }
  //   });
  //   // console.log(`Checkerrorr ${checkerror}`);
  //   if (checkerror === 1) {
  //     // console.log("trúng");
  //     trueprofileinforlist = [];
  //   } else {
  //     trueprofileidlist.forEach(item => {
  //       trueprofileinforlist.push(jobProfile.returnProfileInfor(item));
  //     });
  //     // console.log(trueprofileinforlist);
  //   }
  //   return trueprofileinforlist;
  // }
}

let jobEmployee = new JobEmployee();

module.exports = jobEmployee;
