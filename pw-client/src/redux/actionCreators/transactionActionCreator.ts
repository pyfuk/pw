import { Dispatch } from "redux";
import axios from "axios";
import { User } from "../models/User";

export const RECEIVE_USERS = "RECEIVE_USERS";

interface ReceiveUsersAction {
  type: typeof RECEIVE_USERS;
  users: User[];
}

export type TransactionActionCreatorTypes = ReceiveUsersAction;

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
