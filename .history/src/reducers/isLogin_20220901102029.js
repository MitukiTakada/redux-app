const isLoginReducer = (state = false, action) => {
  switch(action.type) {
    case "LOGIN":
      return !
    default:
      return state;
  }
}

export default counterReducer;