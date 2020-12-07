import { Reducer } from "redux";
import {
  CONFIRM_TRANSFER,
  RECEIVE_TRANSACTIONS,
  RECEIVE_USERS,
  TransactionActionCreatorTypes,
} from "../actionCreators/transactionActionCreator";
import { Transaction } from "../models/Transaction";
import { User } from "../models/User";

interface TransactionReducerType {
  users: User[];
  transactions: Transaction[];
}

const transactionReducer: Reducer<
  TransactionReducerType,
  TransactionActionCreatorTypes
> = (
  state = { users: [], transactions: [] },
  action: TransactionActionCreatorTypes
) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return { ...state, users: action.users };
    case CONFIRM_TRANSFER:
      return state;
    case RECEIVE_TRANSACTIONS:
      return { ...state, transactions: action.transactions };
    default:
      return state;
  }
};

export default transactionReducer;
