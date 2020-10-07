export const AddTask = (task) => ({
  type: "ADD_TASK",
  payload: task,
});

export const DeleteTask = (id) => ({
  type: "DELETE_TASK",
  payload: id,
});

export const MarkTaskDone = (id) => ({
  type: "DONE",
  payload: id,
});
