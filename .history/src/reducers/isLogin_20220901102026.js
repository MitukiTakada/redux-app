const isLoginReducer = (state = false, action) => {
  switch(action.type) {
    case "LOGIN":
      return !STATE;
    
    default:
      return state;
  }
}

export default counterReducer;