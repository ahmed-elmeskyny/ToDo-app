const INITIAL_STATE = {
  open: false,
};

const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_FORM":
      return {
        open: !state.open,
      };
    default:
      return state;
  }
};

export default formReducer;
