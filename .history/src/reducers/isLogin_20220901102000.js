const isLoginReducer = (state = false, action) => {
  switch(action.type) {
    case "log":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

export default counterReducer;