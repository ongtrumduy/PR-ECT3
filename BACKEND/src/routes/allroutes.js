import receiveJobFieldRoutes from "./receiveJobField";
import receiveJobChildRoutes from "./receiveJobChild";
import receiveJobFieldFormRoutes from "./receiveJobFieldForm";
import receiveJobChildFormRoutes from "./receiveJobChildForm";
import receiveJobPositionListRoutes from "./receiveJobPositionList";
import receiveInforEmployeeRoutes from "./receiveInforEmployee";

let AllRoutes = (app, corsOptions) => {
  //========================Routes=========================================

  receiveJobFieldRoutes(app, corsOptions);

  receiveJobChildRoutes(app, corsOptions);

  receiveJobFieldFormRoutes(app, corsOptions);

  receiveJobChildFormRoutes(app, corsOptions);

  receiveJobPositionListRoutes(app, corsOptions);

  receiveInforEmployeeRoutes(app, corsOptions);
  //   // -----------------------Register---------------------------------------
  //   registerRoutes(app, corsOptions);
  //   //-----------------------------------------------------------------------

  //   // -----------------------Login---------------------------------------
  //   loginRoutes(app, corsOptions);
  //   //-----------------------------------------------------------------------

  //   // -----------------------UserDashBoard---------------------------------------
  //   firstnameRoutes(app, corsOptions);
  //   //-----------------------------------------------------------------------

  //   // --------------------------Home---------------------------------------
  //   homeRoutes(app, corsOptions);
  //   //-----------------------------------------------------------------------

  //   // --------------------------Profile---------------------------------------
  //   profileRoutes(app, corsOptions);
  //   //-----------------------------------------------------------------------

  //   // --------------------------SearchUser---------------------------------------
  //   searchRoutes(app, corsOptions);
  //   //-----------------------------------------------------------------------

  //   // --------------------------UnknowhUser---------------------------------------
  //   unknowRoutes(app, corsOptions);
  //   //-----------------------------------------------------------------------

  //   // --------------------------AddFriend---------------------------------------
  //   addfriendRoutes(app, corsOptions);
  //   //-----------------------------------------------------------------------

  //   // --------------------------AddHomeFriend---------------------------------------
  //   addhomefriendRoutes(app, corsOptions);
  //   //-----------------------------------------------------------------------

  //   // --------------------------Notify---------------------------------------
  //   notifyRoutes(app, corsOptions);
  //   //-----------------------------------------------------------------------

  //   // --------------------------AddUserList---------------------------------------
  //   // adduserRoutes(app, corsOptions);
  //   //-----------------------------------------------------------------------

  //   // --------------------------ChatFriendList---------------------------------------
  //   chatfriendRoutes(app, corsOptions);
  //   //-----------------------------------------------------------------------

  //   // --------------------------Message---------------------------------------
  //   messageRoutes(app, corsOptions);
  //   //-----------------------------------------------------------------------

  //   // --------------------------UpdateImage---------------------------------------
  //   updateimageRoutes(app, corsOptions);
  //   //-----------------------------------------------------------------------

  //   // --------------------------WaitFriendList---------------------------------------
  //   // waitfriendRoutes(app, corsOptions);
  //   //-----------------------------------------------------------------------

  //   // --------------------------IndexFriendList---------------------------------------
  //   indexfriendRoutes(app, corsOptions);
  //   //-----------------------------------------------------------------------

  //   // --------------------------ChangeInfor---------------------------------------
  //   changeinforRoutes(app, corsOptions);
  //   //-----------------------------------------------------------------------

  //   // --------------------------ChangePass---------------------------------------
  //   changepassRoutes(app, corsOptions);
  //   //-----------------------------------------------------------------------

  //=========================================================================
};

module.exports = AllRoutes;
