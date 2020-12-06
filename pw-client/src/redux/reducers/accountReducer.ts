import { Action, Reducer } from "redux";
import {
  AccountActionCreatorTypes,
  ADD_EMAIL,
} from "../actionCreators/accountActionCreator";
import { Account } from "../models/Account";

const initialState: Account = {
  email: "",
};

const accountReducer: Reducer<Account, Action> = (
  state = initialState,
  action: AccountActionCreatorTypes
) => {
  switch (action.type) {
    case ADD_EMAIL:
      return state;
    default:
      return state;
  }
};

export default accountReducer;
