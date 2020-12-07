import { Dispatch } from "redux";
import axios from "axios";
import { User } from "../models/User";
import { Transaction } from "../models/Transaction";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const CONFIRM_TRANSFER = "CONFIRM_TRANSFER";
export const RECEIVE_TRANSACTIONS = "RECEIVE_TRANSACTIONS";

interface ReceiveUsersAction {
  type: typeof RECEIVE_USERS;
  users: User[];
}

export interface ConfirmTransferAction {
  type: typeof CONFIRM_TRANSFER;
  user: User;
}

interface ReceiveTransactionsAction {
  type: typeof RECEIVE_TRANSACTIONS;
  transactions: Transaction[];
}

export type TransactionActionCreatorTypes =
  | ReceiveUsersAction
  | ConfirmTransferAction
  | ReceiveTransactionsAction;

export const receiveUsers = (users: User[]) => ({ type: RECEIVE_USERS, users });
export const loadUsers = () => async (dispatch: Dispatch, getState: any) => {
  const {
    account: { token },
  } = getState();

  axios
    .get("http://localhost:8888/api/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      dispatch(receiveUsers(res.data));
    });
};

export const confirmTransfer = (user: User) => ({
  type: CONFIRM_TRANSFER,
  user,
});

export const completeTransfer = () => async (
  dispatch: Dispatch,
  getState: any
) => {
  const {
    account: { token },
    form: {
      transfer: { values },
    },
  } = getState();

  axios
    .post(
      "http://localhost:8888/api/add-transaction",
      {
        email: values.email,
        amount: values.amount,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => {
      dispatch(confirmTransfer(res.data.senderAccount));
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const receiveTransactions = (transactions: Transaction[]) => ({
  type: RECEIVE_TRANSACTIONS,
  transactions,
});
export const loadTransactions = () => async (
  dispatch: Dispatch,
  getState: any
) => {
  const {
    account: { token },
  } = getState();

  axios
    .get("http://localhost:8888/api/history", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      dispatch(receiveTransactions(res.data));
      console.log(res.data);
    });
};
