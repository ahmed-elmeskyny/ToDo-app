import React from "react";
import "./signin.scss";
import CusttomButton from "../CusttomButton/custtom-button";
import { auth } from "../../firebase/firebase.utils";

import { withRouter } from "react-router-dom";

class Signin extends React.Component {
  constructor() {
    super();
    this.state = {
      erreur: "",
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const form = document.querySelector("#signin-form");
    const { email, password } = form;
    try {
      await auth.signInWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/tasks");
    } catch (error) {
      this.setState({ erreur: error.message }, () => console.log(this.state));
    }
  };

  render() {
    return (
      <div className="signin-container">
        <h1> I have an account</h1>
        <span>sign in with email and password</span>
        <p style={{ color: "red" }}>{this.state.erreur}</p>
        <form id="signin-form" onSubmit={this.handleSubmit}>
          <label>email</label>
          <input type="email" name="email" required></input>
          <label>password</label>
          <input type="password" name="password" required></input>

          <CusttomButton
            inverted
            style={{ margin: "10px", padding: "10px 30px" }}
            type="submit"
          >
            Sign in
          </CusttomButton>
        </form>
      </div>
    );
  }
}

export default withRouter(Signin);
