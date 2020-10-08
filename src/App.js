import React from "react";
import "./App.css";
import Header from "./Components/Header/header";
import Tasks from "./pages/tasks/tasks";
import TaskForm from "./Components/task-form/task-form";
import UpComingEvents from "./pages/upcoming-events/upcoming-events";
import { Switch, Route, withRouter } from "react-router-dom";
import Notes from "./pages/notes/notes";
import SignInSignUp from "./pages/signin-singup/signin-signup";
import { auth, createUserProfile, db } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import setCurrentUser from "./redux/user/user.action";
import { AddTask } from "./redux/task-reducer/task.action";
import { AddEvent } from "./redux/event-reducer/event.action";
import { Spinner } from "./Components/spinner/spinner";
import { AddNote } from "./redux/note-reducer/note.action";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfile(user);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
        db.collection("UsersData")
          .doc(`${user.uid}`)
          .collection("UserTasks")
          .get()
          .then((snapshot) =>
            snapshot.docs.map((doc) => {
              if (doc.exists) {
                this.props.AddTask(doc.data());
              }
            })
          );
        db.collection("UsersData")
          .doc(`${user.uid}`)
          .collection("UserEvents")
          .get()
          .then((snapshot) =>
            snapshot.docs.map((doc) => {
              if (doc.exists) {
                this.props.AddEvent(doc.data());
              }
            })
          );
        db.collection("UsersData")
          .doc(`${user.uid}`)
          .collection("UserNotes")
          .get()
          .then((snapshot) =>
            snapshot.docs.map((doc) => {
              if (doc.exists) {
                this.props.AddNote(doc.data());
              }
            })
          );
      } else {
        setCurrentUser(user);
      }
    });
  }

  render() {
    return (
      <>
        <TaskForm></TaskForm>
        <Header unsub={this.unsubscribeFromAuth}></Header>
        <div className="main">
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <SignInSignUp {...props}></SignInSignUp>}
            />

            <Route
              exact
              path="/tasks"
              render={() =>
                this.props.currentUser ? <Tasks></Tasks> : <Spinner></Spinner>
              }
            />
            <Route
              exact
              path="/upcoming"
              render={() =>
                this.props.currentUser ? (
                  <UpComingEvents></UpComingEvents>
                ) : (
                  <Spinner></Spinner>
                )
              }
            />
            <Route
              exact
              path="/notes"
              render={() =>
                this.props.currentUser ? <Notes></Notes> : <Spinner></Spinner>
              }
            />
          </Switch>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
const dispatchProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  AddTask: (task) => dispatch(AddTask(task)),
  AddEvent: (event) => dispatch(AddEvent(event)),
  AddNote: (note) => dispatch(AddNote(note)),
});
export default withRouter(connect(mapStateToProps, dispatchProps)(App));
