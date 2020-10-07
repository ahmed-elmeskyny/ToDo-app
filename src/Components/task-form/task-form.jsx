import React from "react";
import "./task-form.scss";
import CusttomButton from "../CusttomButton/custtom-button";
import { connect } from "react-redux";
import { createTask } from "../../firebase/firebase.utils";
import { toggleForm } from "../../redux/form-reducer/form-action";
import { AddTask } from "../../redux/task-reducer/task.action";

class TaskForm extends React.Component {
  onSubmit = async (e) => {
    e.preventDefault();
    const form = document.querySelector("#form");
    const { currentUser, toggleForm, AddTask } = this.props;
    const { title, discription } = form;
    const taskRef = await createTask(
      currentUser,
      title.value,
      discription.value
    );
    AddTask({
      id: taskRef.id,
      isDone: false,
      title: title.value,
      discription: discription.value,
      createdAt: new Date().toDateString(),
    });
    toggleForm();
  };
  render() {
    return this.props.open ? (
      <div className="container1">
        <div className="form-container1">
          <form id="form" onSubmit={this.onSubmit}>
            <label>Title</label>
            <input
              className="input1"
              name="title"
              type="text"
              placeholder="write..."
              required
            ></input>
            <label>discription</label>
            <input
              className="input2"
              name="discription"
              type="text"
              placeholder="write..."
              required
            ></input>
            <CusttomButton inverted type="submit">
              Add task
            </CusttomButton>
          </form>
        </div>
      </div>
    ) : null;
  }
}
const mapStateToProps = (state) => ({
  open: state.form.open,
  currentUser: state.user.currentUser,
  tasks: state.tasks.tasks,
});

const mapDispatchToProps = (dispatch) => ({
  toggleForm: () => dispatch(toggleForm()),
  AddTask: (task) => dispatch(AddTask(task)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
