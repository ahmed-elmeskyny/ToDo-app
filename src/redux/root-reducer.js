import { combineReducers } from "redux";
import formReducer from "./form-reducer/form-reducer";
import taskReducer from "./task-reducer/task.reducer";
import userReducer from "./user/user.reducer";
import discriptionReducer from "./task-discription-reducer/discription.reducer";
import eventReducer from "./event-reducer/event.reducer";
import noteReducer from "./note-reducer/note.reducer";

const appReducer = combineReducers({
  form: formReducer,
  tasks: taskReducer,
  user: userReducer,
  discription: discriptionReducer,
  events: eventReducer,
  notes: noteReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
