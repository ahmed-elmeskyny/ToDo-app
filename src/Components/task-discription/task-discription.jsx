import React from "react";
import "./task-discription.scss";
import { BiTime } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { IoMdDoneAll } from "react-icons/io";
import { db } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { DeleteTask, MarkTaskDone } from "../../redux/task-reducer/task.action";
import { SetDiscription } from "../../redux/task-discription-reducer/discription.action";

const TaskDiscription = ({
  discription,
  currentUser,
  id,
  DeleteTask,
  SetDiscription,
  MarkTaskDone,
}) => {
  return (
    <div className="discription-container">
      <div className="disc-title">
        <h1>{discription.title}</h1>
        <span>
          {" "}
          <BiTime /> {discription.createdAt}
        </span>
      </div>
      <div className="discription">
        <p> {discription.discription}</p>
      </div>
      <div className="state">
        <AiOutlineDelete
          style={{ marginRight: "15px" }}
          onClick={() => {
            db.collection("UsersData")
              .doc(`${currentUser.id}`)
              .collection("UserTasks")
              .doc(`${id}`)
              .delete();
            DeleteTask(id);
            SetDiscription();
          }}
        />
        <IoMdDoneAll
          onClick={() => {
            db.collection("UsersData")
              .doc(`${currentUser.id}`)
              .collection("UserTasks")
              .doc(`${id}`)
              .update({ isDone: true });
            MarkTaskDone(id);
          }}
        />
      </div>
    </div>
  );
};
const dispatchToProps = (dispatch) => ({
  DeleteTask: (id) => dispatch(DeleteTask(id)),
  SetDiscription: () => dispatch(SetDiscription()),
  MarkTaskDone: (id) => dispatch(MarkTaskDone(id)),
});
export default connect(null, dispatchToProps)(TaskDiscription);
