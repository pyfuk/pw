import { createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";

import reducers from "./reducers";

const storeFactory = () => {
  const reducer = combineReducers({ ...reducers, form: formReducer });
  return createStore(reducer, applyMiddleware(thunk));
};

export default storeFactory;
