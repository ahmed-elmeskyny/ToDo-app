import React from "react";
import "./header.scss";
import CusttomButton from "../CusttomButton/custtom-button";
import { BiTask } from "react-icons/bi";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { resetState } from "../../redux/root.action";
const Header = ({ currentUser, history, unsub, resetState }) => (
  <div className="header">
    <div className="container">
      <div className="logo">
        {" "}
        <BiTask></BiTask> <span>To Do.</span>
      </div>
      {currentUser ? (
        <CusttomButton
          onClick={async () => {
            await auth.signOut();
            history.push("/");
            resetState();
          }}
        >
          {" "}
          Log Out{" "}
        </CusttomButton>
      ) : null}
    </div>
    <div className="empty"></div>
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
  resetState: () => dispatch(resetState()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
