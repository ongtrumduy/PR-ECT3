import createNewJobFieldSockets from "./createNewJobField";
import createNewJobChildSockets from "./createNewJobChild";
import updateJobSockets from "./updateJob";

let AllSockets = io => {
  //============================Socket======================================

  createNewJobFieldSockets(io);

  createNewJobChildSockets(io);

  updateJobSockets(io);
  //   // --------------------------AddFriend--------------------------------------
  //   addfriendSocket(io);
  //   //--------------------------------------------------------------------------
  //   // --------------------------AddUserList--------------------------------------
  //   adduserSocket(io);
  //   //--------------------------------------------------------------------------
  //   // --------------------------ChatListFriend--------------------------------------
  //   // chatlistSocket(io);
  //   //--------------------------------------------------------------------------
  //   // --------------------------ChatMineFriend--------------------------------------
  //   // chatmineSocket(io);
  //   //--------------------------------------------------------------------------
  //   // --------------------------ChatMineFriend--------------------------------------
  //   chattextSocket(io);
  //   //--------------------------------------------------------------------------
  //   // --------------------------FriendOnline--------------------------------------
  //   friendonlineSocket(io);
  //   //--------------------------------------------------------------------------
  //   // --------------------------WaitUserList--------------------------------------
  //   waituserSocket(io);
  //   //--------------------------------------------------------------------------
  //   // --------------------------UserFriendList--------------------------------------
  //   friendlistSocket(io);
  //   //--------------------------------------------------------------------------
  //   // --------------------------AdminStatistic--------------------------------------
  //   adminstatisticSocket(io);
  //   //--------------------------------------------------------------------------
  //   // --------------------------AdminStatistic--------------------------------------
  //   adminstatisticSocket(io);
  //   //--------------------------------------------------------------------------
  //   // --------------------------TotalUserList--------------------------------------
  //   totaluserSocket(io);
  //   //--------------------------------------------------------------------------
  //   // --------------------------NextButon--------------------------------------
  //   buttonnextSocket(io);
  //   //--------------------------------------------------------------------------
  //   // --------------------------PreButon--------------------------------------
  //   buttonpreSocket(io);
  //   //--------------------------------------------------------------------------
  //   // --------------------------UpdateIndexFriend--------------------------------------
  //   indexfriendSocket(io);
  //   //--------------------------------------------------------------------------
  //   // --------------------------ChangeInfor--------------------------------------
  //   changeinforSocket(io);
  //   //--------------------------------------------------------------------------
  //   // --------------------------AdminSeeOnline--------------------------------------
  //   adminseeonlineSocket(io);
  //   //--------------------------------------------------------------------------
  //   //=========================================================================
};

module.exports = AllSockets;
