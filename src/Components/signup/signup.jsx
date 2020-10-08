import React from "react";
import "./signup.scss";
import CusttomButton from "../CusttomButton/custtom-button";
import { auth, createUserProfile } from "../../firebase/firebase.utils";

import { withRouter } from "react-router-dom";

class Signup extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    erreur: "",
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfile(user, { name });
      this.setState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      this.props.history.push("/tasks");
    } catch (error) {
      this.setState({ erreur: error.message });
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value }, console.log(this.state));
  };

  render() {
    const { name, email, password, confirmPassword } = this.state;
    return (
      <div className="signup-container">
        <h1>Don't have an account sign up</h1>
        <span style={{ color: "red" }}>{this.state.erreur}</span>
        <form id="signup-form" onSubmit={this.onSubmit}>
          <label>name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          ></input>
          <label>email</label>
          <input
            type="email"
            value={email}
            name="email"
            onChange={this.handleChange}
          ></input>
          <label>password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          ></input>
          <label>confirm password</label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
          ></input>
          <CusttomButton
            inverted
            style={{ margin: "10px", padding: "10px 30px" }}
            type="submit"
          >
            Sign up
          </CusttomButton>
        </form>
      </div>
    );
  }
}

export default withRouter(Signup);
