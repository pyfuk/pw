import { Reducer } from "redux";
import {
  AccountActionCreatorTypes,
  CONFIRM_SIGNIN,
  CONFIRM_SIGNUP,
} from "../actionCreators/accountActionCreator";

interface AccountReducerType {
  user: any;
  token: string;
}

const accountReducer: Reducer<AccountReducerType, AccountActionCreatorTypes> = (
  state = { user: undefined, token: "" },
  action: AccountActionCreatorTypes
) => {
  switch (action.type) {
    case CONFIRM_SIGNUP:
      return { ...state, user: action.user, token: action.token };
    case CONFIRM_SIGNIN:
      return { ...state, user: action.user, token: action.token };
    default:
      return state;
  }
};

export default accountReducer;
