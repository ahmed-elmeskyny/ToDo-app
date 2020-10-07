export const AddEvent = (event) => ({
  type: "ADD_EVENT",
  payload: event,
});

export const DeleteEvent = (id) => ({
  type: "DELETE_EVENT",
  payload: id,
});
