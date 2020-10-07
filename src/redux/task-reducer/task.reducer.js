const INITIALE_STATE = {
  tasks: null,
};
const tasksReturn = (state, action) => {
  if (state.tasks === null) {
    return [action.payload];
  } else {
    return [...state.tasks, action.payload];
  }
};
const taskReducer = (state = INITIALE_STATE, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        tasks: tasksReturn(state, action),
      };
    case "SET_TASKS": {
      return {
        tasks: action.playload,
      };
    }
    case "DELETE_TASK": {
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    }
    case "DONE": {
      return {
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload) {
            return { ...task, isDone: true };
          } else {
            return task;
          }
        }),
      };
    }
    default:
      return state;
  }
};

export default taskReducer;
