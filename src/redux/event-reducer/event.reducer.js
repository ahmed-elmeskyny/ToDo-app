const INITIALE_STATE = {
  events: null,
};
const eventReturn = (state, action) => {
  if (state.events === null) {
    return [action.payload];
  } else {
    return [...state.events, action.payload];
  }
};

const eventReducer = (state = INITIALE_STATE, action) => {
  switch (action.type) {
    case "ADD_EVENT": {
      return {
        events: eventReturn(state, action),
      };
    }
    case "DELETE_EVENT": {
      return {
        events: state.events.filter((event) => event.id !== action.payload),
      };
    }
    default:
      return state;
  }
};

export default eventReducer;
