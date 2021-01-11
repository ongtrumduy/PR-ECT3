import fs from "fs";
import jobPosition from "./jobPosition";
import moment from "moment";
import uuid from "uuid";

class JobContract {
  constructor() {
    let jobContract = fs.readFileSync(
      "../BACKEND/src/databases/jobContract.json"
    );
    if (jobContract) {
      this.JobContract = JSON.parse(jobContract);
    } else {
      this.JobContract = [];
    }
  }

  saveJobActivityDataJson() {
    fs.writeFileSync(
      "../BACKEND/src/databases/jobContract.json",
      JSON.stringify(this.JobContract),
      err => {
        if (err) throw err;
        console.log("Complete!!!");
      }
    );
  }

  returnExperienceYear() {
    let positionexperienceyearlist = [];
    this.JobContract.forEach(item => {
      let positionexperienceyear = {
        contractId: item.contractId,
        jobPositionFieldId: item.jobPositionFieldId,
        experienceYearList: []
      };
      item.contractPositionList.forEach(item2 => {
        let sumexperienceyear = 0;
        item2.profileContract.forEach(item3 => {
          item3.contractPositionChildList.forEach(item4 => {
            sumexperienceyear +=
              moment(item4.contractEndDate, "DD/MM/YYYY").year() -
              moment(item4.contractStartDate, "DD/MM/YYYY").year();
          });
        });
        let experienceyear = {
          profileId: item2.profileId,
          experienceYear: "" + sumexperienceyear
        };
        positionexperienceyear.experienceYearList.push(experienceyear);
      });
      positionexperienceyearlist.push(positionexperienceyear);
    });
    // console.log(positionexperienceyearlist);
    // positionexperienceyearlist.forEach(item => {
    //   console.log(item.experienceYearList);
    // });
    return positionexperienceyearlist;
  }

  returnSumProfileIdList() {
    let profileidlist = [];
    let positionexperienceyearlist = this.returnExperienceYear();
    positionexperienceyearlist.forEach(item => {
      item.experienceYearList.forEach(item1 => {
        let checkprofileid = 0;
        profileidlist.forEach(item2 => {
          if (item1.profileId === item2.profileId) {
            checkprofileid = 1;
          }
        });
        if (checkprofileid === 0) {
          let profileid = {
            profileId: item1.profileId
          };
          profileidlist.push(profileid);
        }
      });
    });
    return profileidlist;
  }

  returnSumExperienceYear() {
    let jobProfileIdList = this.returnSumProfileIdList();
    let positionexperienceyearlist = this.returnExperienceYear();
    // console.log("Xem thử");
    // console.log(positionexperienceyearlist);
    let sumexperienceyearlist = [];
    jobProfileIdList.forEach(item => {
      let sumexperienceyear = 0;
      positionexperienceyearlist.forEach(item1 => {
        item1.experienceYearList.forEach(item2 => {
          // console.log("xem item2");
          // console.log(item2.profileId);
          if (item2.profileId === item.profileId) {
            sumexperienceyear += parseInt(item2.experienceYear);
          }
        });
      });
      if (sumexperienceyear !== 0) {
        let experienceyear = {
          profileId: item.profileId,
          sumexperienceYear: "" + sumexperienceyear
        };
        sumexperienceyearlist.push(experienceyear);
      }
    });
    // console.log("Xuất ra");
    // console.log(sumexperienceyearlist);
    return sumexperienceyearlist;
  }

  returnJobPositionExperienceYear(data) {
    let experienceyearlist = [];
    let index = this.JobContract.findIndex(item => {
      return item.jobPositionFieldId === data.jobPositionFieldId;
    });
    let sumexperienceyear;
    // console.log(index);
    if (index === -1) {
      experienceyearlist = [
        {
          profileId: "-9999",
          experienceYear: "-9999"
        }
      ];
    } else {
      this.JobContract[index].contractPositionList.forEach(item => {
        sumexperienceyear = 0;
        item.profileContract.forEach(item2 => {
          item2.contractPositionChildList.forEach(item3 => {
            // console.log(moment(item3.contractEndDate, "DD/MM/YYYY").year());
            // console.log(moment(item3.contractStartDate, "DD/MM/YYYY").year());
            sumexperienceyear +=
              moment(item3.contractEndDate, "DD/MM/YYYY").year() -
              moment(item3.contractStartDate, "DD/MM/YYYY").year();
          });
        });
        // console.log(sumexperienceyear);
        let experienceyear = {
          profileId: item.profileId,
          experienceYear: "" + sumexperienceyear
        };
        experienceyearlist.push(experienceyear);
      });
    }
    // console.log(experienceyearlist);
    return experienceyearlist;
  }

  returnExperienceYearPositionProfileIdList(data) {
    let sumexperienceyearlist = this.returnSumExperienceYear();
    // console.log("Check xem sao");
    // console.log(sumexperienceyearlist);
    let profileidlist = [];
    let checksum = 0;
    sumexperienceyearlist.forEach(item => {
      // console.log(item.sumexperienceYear);
      // console.log(data.experienceYear);
      if (parseInt(item.sumexperienceYear) >= parseInt(data.experienceYear)) {
        checksum = 1;
        let experienceyear = {
          profileId: item.profileId
        };
        profileidlist.push(experienceyear);
      }
    });
    if (checksum === 0) {
      profileidlist = [
        {
          profileId: "-9999"
        }
      ];
    }
    return profileidlist;
  }

  returnContractPositionProfileIdList(data) {
    let profileidlist = [];
    let index = this.JobContract.findIndex(item => {
      return item.jobPositionFieldId === data.jobPositionFieldId;
    });
    this.JobContract[index].contractPositionList.forEach(item => {
      let profileid = {
        profileId: item.profileId
      };
      profileidlist.push(profileid);
    });
    return profileidlist;
  }

  returnContractProfileIdList(data) {
    let experienceyearlist = this.returnJobPositionExperienceYear(data);
    // console.log(experienceyearlist);
    let profileidlist = [];
    let checkempty = 0;
    experienceyearlist.forEach(item => {
      if (parseInt(data.experienceYear) <= parseInt(item.experienceYear)) {
        checkempty = 1;
        let profileid = {
          profileId: item.profileId
        };
        profileidlist.push(profileid);
      }
    });
    if (checkempty === 0) {
      profileidlist = [
        {
          profileId: "-9999"
        }
      ];
    }
    // console.log(profileidlist);
    return profileidlist;
  }

  returnProfileIdList(data) {
    let profileidlist = [];
    let index = this.JobContract.findIndex(item => {
      return data.jobPositionFieldId === item.jobPositionFieldId;
    });
    if (index < 0 && data.experienceYear === "") {
      profileidlist = [
        {
          profileId: "-9999"
        }
      ];
    } else if (index < 0 && data.experienceYear !== "") {
      profileidlist = this.returnExperienceYearPositionProfileIdList(data);
    } else if (index >= 0 && data.experienceYear === "") {
      profileidlist = this.returnContractPositionProfileIdList(data);
    } else if (index >= 0 && data.experienceYear !== "") {
      profileidlist = this.returnContractProfileIdList(data);
    }
    return profileidlist;
  }

  returnPositionName(data) {
    let positionNameList = [];
    let checkpositionname = 0;
    this.JobContract.forEach(item => {
      let jobpositionname;
      item.contractPositionList.forEach(item1 => {
        if (data.profileId === item1.profileId) {
          checkpositionname = 1;
          jobpositionname = jobPosition.readJobPositionName(item);

          let jobposition = {
            profileId: item1.profileId,
            jobPositionName: jobpositionname
          };
          positionNameList.push(jobposition);
        }
      });
    });
    if (checkpositionname === 0) {
      positionNameList = [
        {
          profileId: "-9999",
          jobPositionName: "Chưa có dữ liệu"
        }
      ];
    }
    return positionNameList;
  }
}

let jobContract = new JobContract();

module.exports = jobContract;
