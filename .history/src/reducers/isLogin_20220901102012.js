const isLoginReducer = (state = false, action) => {
  switch(action.type) {
    case "LOGIN":
      return state + 1;
    case "":
      return state - 1;
    default:
      return state;
  }
}

export default counterReducer;