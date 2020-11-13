export const AddNote = (note) => ({
  type: "ADD_NOTE",
  payload: note,
});

export const DeleteNote = (id) => ({
  type: "DELETE_NOTE",
  payload: id,
});
