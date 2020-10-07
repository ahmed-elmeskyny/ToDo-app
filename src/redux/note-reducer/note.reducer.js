const INITIALE_STATE = {
  notes: null,
};

const noteReturn = (state, action) => {
  if (state.notes === null) {
    return [action.payload];
  } else {
    return [...state.notes, action.payload];
  }
};

const noteReducer = (state = INITIALE_STATE, action) => {
  switch (action.type) {
    case "ADD_NOTE": {
      return {
        notes: noteReturn(state, action),
      };
    }
    case "DELETE_NOTE": {
      return {
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    }
    default:
      return state;
  }
};

export default noteReducer;
