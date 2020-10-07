import React from "react";
import "./signin-signup.scss";
import Signin from "../../Components/signin/signin";
import { BiTask } from "react-icons/bi";
import Signup from "../../Components/signup/signup";
import { Spinner } from "../../Components/spinner/spinner";
import { connect } from "react-redux";

const SignInSignUp = ({ spinner }) => {
  return spinner ? (
    <Spinner></Spinner>
  ) : (
    <div className="container2">
      <div className="logo-container">
        {" "}
        <div className="logo">
          <BiTask></BiTask> <span>To Do.</span>
        </div>
        <div className="text">
          <p>manage your time , organize your tasks , make your life easier</p>
        </div>
      </div>
      <Signin></Signin>
      <Signup></Signup>
    </div>
  );
};
const mapStateToProps = (state) => ({
  spinner: state.spinner.spinner,
});
export default connect(mapStateToProps)(SignInSignUp);
