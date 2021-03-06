import createNewJobFieldSockets from "./createNewJobField";
import createNewJobChildSockets from "./createNewJobChild";
import updateFieldJobSockets from "./updateFieldJob";
import updateChildJobSockets from "./updateChildJob";
import removeFieldJobSockets from "./removeJobField";
import removeChildJobSockets from "./removeJobChild";
import returnRemoveJobSockets from "./returnRemoveJob";
import returnUpdateJobSockets from "./returnUpdateJob";
import returnAllProfileInforSockets from "./returnAllProfileInfor";

let AllSockets = io => {
  //============================Socket======================================

  createNewJobFieldSockets(io);

  createNewJobChildSockets(io);

  updateFieldJobSockets(io);

  updateChildJobSockets(io);

  removeFieldJobSockets(io);

  removeChildJobSockets(io);

  returnRemoveJobSockets(io);

  returnUpdateJobSockets(io);

  returnAllProfileInforSockets(io);
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
