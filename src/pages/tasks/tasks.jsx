import React from "react";
import "./tasks.scss";
import { IoIosArrowDown } from "react-icons/io";
import Task from "../../Components/task/task";
import EmptyTask from "../../Components/empty/empty";
import CusttomButton from "../../Components/CusttomButton/custtom-button";
import TaskDiscription from "../../Components/task-discription/task-discription";
import { connect } from "react-redux";
import { toggleForm } from "../../redux/form-reducer/form-action";
import { AddTask } from "../../redux/task-reducer/task.action";
import SideProfile from "../../Components/side-profile/side-profile";

const Tasks = ({ tasks, toggleForm, discription, currentUser }) => {
  return (
    <>
      <SideProfile></SideProfile>
      {tasks ? (
        <div className="task-page-container">
          <div className="tasks-container">
            <div className="tasks-header">
              <h4>Tasks</h4>
              <span>
                {" "}
                <IoIosArrowDown style={{ fontSize: "20px" }}></IoIosArrowDown>
              </span>
            </div>
            <div className="tasks-main">
              {tasks.map((task) => (
                <Task
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  discription={task.discription}
                  createdAt={task.createdAt}
                  isDone={task.isDone}
                />
              ))}
            </div>

            <div className="create-task">
              <CusttomButton inverted onClick={toggleForm}>
                {" "}
                Add task{" "}
              </CusttomButton>
            </div>
          </div>
          {discription ? (
            <TaskDiscription
              id={discription.id}
              discription={discription}
              currentUser={currentUser}
            />
          ) : (
            <EmptyTask isDiscription>
              {" "}
              Click on a task to see its discription
            </EmptyTask>
          )}
        </div>
      ) : (
        <div className="task-page-container">
          <EmptyTask isButton onClick={toggleForm}>
            {" "}
            you have no tasks right now , create one to start
          </EmptyTask>
          <EmptyTask isDiscription>
            {" "}
            Click on a task to see its discription
          </EmptyTask>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  tasks: state.tasks.tasks,
  discription: state.discription.discription,
});

const mapDispatchToProps = (dispatch) => ({
  toggleForm: () => dispatch(toggleForm()),
  AddTask: (task) => dispatch(AddTask(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
