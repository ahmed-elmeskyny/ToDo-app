const INITIAL_STATE = {
  discription: null,
};

const discriptionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "DISCRIPTION_OPEN":
      return {
        discription: action.payload,
      };
    case "SET_DISCRIPTION":
      return {
        discription: action.payload,
      };
    default:
      return state;
  }
};

export default discriptionReducer;
