import { combineReducers } from "redux";
import formReducer from "./form-reducer/form-reducer";
import taskReducer from "./task-reducer/task.reducer";
import userReducer from "./user/user.reducer";
import discriptionReducer from "./task-discription-reducer/discription.reducer";
import SpinnerReducer from "./spinner-reducer/spinner.reducer";
import eventReducer from "./event-reducer/event.reducer";
import noteReducer from "./note-reducer/note.reducer";

export default combineReducers({
  form: formReducer,
  tasks: taskReducer,
  user: userReducer,
  discription: discriptionReducer,
  spinner: SpinnerReducer,
  events: eventReducer,
  notes: noteReducer,
});
