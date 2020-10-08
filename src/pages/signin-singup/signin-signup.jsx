import React from "react";
import "./signin-signup.scss";
import Signin from "../../Components/signin/signin";
import { BiTask } from "react-icons/bi";
import Signup from "../../Components/signup/signup";

const SignInSignUp = () => {
  return (
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

export default SignInSignUp;
