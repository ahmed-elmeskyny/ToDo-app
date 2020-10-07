export const AddNote = (note) => ({
  type: "ADD_NOTE",
  payload: note,
});

export const DeleteEvent = (id) => ({
  type: "DELETE_NOTE",
  payload: id,
});
