import { Reducer } from "redux";
import {
  CONFIRM_TRANSFER,
  RECEIVE_USERS,
  TransactionActionCreatorTypes,
} from "../actionCreators/transactionActionCreator";
import { User } from "../models/User";

interface TransactionReducerType {
  users: User[];
}

const transactionReducer: Reducer<
  TransactionReducerType,
  TransactionActionCreatorTypes
> = (state = { users: [] }, action: TransactionActionCreatorTypes) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return { ...state, users: action.users };
    case CONFIRM_TRANSFER:
      return state;
    default:
      return state;
  }
};

export default transactionReducer;
