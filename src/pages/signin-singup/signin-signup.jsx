import React, { useState } from "react";
import "./signin-signup.scss";
import Signin from "../../Components/signin/signin";
import { BiTask } from "react-icons/bi";
import Signup from "../../Components/signup/signup";
import CusttomButton from "../../Components/CusttomButton/custtom-button";

const SignInSignUp = ({ currentUser, history }) => {
  const [isLoading, setLoading] = useState(false);
  return currentUser ? (
    <div className="loggedin">
      <div> already logged in go to tasks :</div>
      <CusttomButton inverted  onClick={() => history.push("/tasks")}>
        {" "}
        go to tasks
      </CusttomButton>
    </div>
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

export default SignInSignUp;
