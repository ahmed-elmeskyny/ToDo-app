const INITIALE_STATE = {
  spinner: false,
};

const SpinnerReducer = (state = INITIALE_STATE, action) => {
  switch (action.type) {
    case "SPINNER": {
      return {
        spinner: !state.spinner,
      };
    }
    default:
      return state;
  }
};

export default SpinnerReducer;
