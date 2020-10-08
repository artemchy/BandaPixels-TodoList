import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as formReducer } from "redux-form";
import thunkMiddlewarefrom from "redux-thunk";
import noteReducer from "./noteReducer";
import { firebaseReducer } from "react-redux-firebase";

let reducers = combineReducers({
  notePage: noteReducer,
  form: formReducer,
  firebase: firebaseReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddlewarefrom));

export default store;
