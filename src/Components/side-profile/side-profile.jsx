import React from "react";
import "./side-profile.scss";
import pdp from "../assets/pdp2.jpeg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const SideProfile = ({ history, currentUser, tasks, events }) => (
  <div className="side-profile">
    <div className="profile-data">
      <div
        className="profile-img"
        style={{ backgroundImage: `url(${pdp})` }}
      ></div>
      <div className="name">
        <h2>Hello , {currentUser.name}</h2>
        <p>{currentUser.email}</p>
      </div>
      <div className="tasks-data">
        <div className="tasks">
          <h4 className="number">{tasks ? tasks.length : 0}</h4>
          <span>to do</span>
        </div>
        <div className="tasks completed">
          <h4 className="number">
            {tasks
              ? tasks.reduce((acc, task) => (task.isDone ? acc + 1 : 0), 0)
              : 0}
          </h4>
          <span>completed</span>
        </div>
        <div className="tasks upcoming">
          <h4 className="number">
            {events ? events.reduce((acc, event) => acc + 1, 0) : 0}
          </h4>
          <span>upcom.</span>
        </div>
      </div>
    </div>
    <div className="pages">
      <ul>
        {" "}
        <li
          onClick={() => history.push("/tasks")}
          className={history.location.pathname === "/tasks" ? "li" : "link"}
        >
          {" "}
          Tasks <AiOutlineArrowRight className="svg" />
        </li>
        <li
          onClick={() => history.push("upcoming")}
          className={history.location.pathname === "/upcoming" ? "li" : "link"}
        >
          {" "}
          Upcoming events <AiOutlineArrowRight className="svg" />
        </li>
        <li
          onClick={() => history.push("/notes")}
          className={history.location.pathname === "/notes" ? "li" : "link"}
        >
          {" "}
          Notes <AiOutlineArrowRight className="svg" />
        </li>
      </ul>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  tasks: state.tasks.tasks,
  events: state.events.events,
});

export default withRouter(connect(mapStateToProps)(SideProfile));
