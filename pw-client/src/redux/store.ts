import { createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";

import reducers from "./reducers";

const reducer = combineReducers({ ...reducers, form: formReducer });

const storeFactory = () => {
  return createStore(reducer, applyMiddleware(thunk));
};

export type ReduxState = ReturnType<typeof reducer>;

export default storeFactory;
