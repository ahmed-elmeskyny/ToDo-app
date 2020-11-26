import React from "react";
import "./task-form.scss";
import CusttomButton from "../CusttomButton/custtom-button";
import { connect } from "react-redux";
import { createTask } from "../../firebase/firebase.utils";
import { toggleForm } from "../../redux/form-reducer/form-action";
import { AddTask } from "../../redux/task-reducer/task.action";
import Spinner2 from "../spinner2/spinner2";

class TaskForm extends React.Component {
  state = { isLoading: false };

  onSubmit = async (e) => {
    this.setState({ isLoading: true });
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
    this.setState({ isLoading: false });
    toggleForm();
  };
  render() {
    return this.props.open ? (
      <div className="container1">
        <div className="form-container1">
          {this.state.isLoading ? (
            <Spinner2></Spinner2>
          ) : (
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
              <textarea
                className="input2"
                name="discription"
                type="text"
                placeholder="write..."
                required
              ></textarea>
              <CusttomButton inverted type="submit">
                Add task
              </CusttomButton>
            </form>
          )}
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
