import {combineReducers} from "redux"
import counterReducer from "./counter"

const allReducers = combineReducers({
  counter: counterReducer,
  isLogin
})