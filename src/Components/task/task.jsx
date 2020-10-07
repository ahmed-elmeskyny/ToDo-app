import React from "react";
import "./task.scss";
import { BsCheckAll } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { connect } from "react-redux";
import { openDiscdription } from "../../redux/task-discription-reducer/discription.action";

const Task = ({ title, createdAt, openDisc, discription, id, isDone }) => (
  <div
    className="task-container"
    onClick={(e) => {
      openDisc({
        id: id,
        title: title,
        createdAt: createdAt,
        discription: discription,
      });
    }}
  >
    <div>
      <div className={isDone ? "done" : "not-done"}>
        <BsCheckAll style={{ fontSize: "20px" }}></BsCheckAll>
      </div>
    </div>
    <div className="task-info">
      <p>{title}</p>
      <span>
        <BiTime /> {createdAt}{" "}
      </span>
    </div>
  </div>
);
const dispatchProps = (dispatch) => ({
  openDisc: (discription) => dispatch(openDiscdription(discription)),
});

export default connect(null, dispatchProps)(Task);
