const isLoginReducer = (state = false, action) => {
  switch(action.type) {
    case "LOGIN":
      return ;
    case "":
      return state - 1;
    default:
      return state;
  }
}

export default counterReducer;