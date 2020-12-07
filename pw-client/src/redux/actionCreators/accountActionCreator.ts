import { Dispatch } from "redux";
import { GetFormState } from "redux-form";
import axios from "axios";
import { User } from "../models/User";
import { ConfirmTransferAction } from "./transactionActionCreator";

export const CONFIRM_SIGNUP = "CONFIRM_SIGNUP";
export const CONFIRM_SIGNIN = "CONFIRM_SIGNIN";

interface ConfirmSignUpAction {
  type: typeof CONFIRM_SIGNUP;
  user: any;
  token: string;
}

interface ConfirmSignInAction {
  type: typeof CONFIRM_SIGNIN;
  user: any;
  token: string;
}

export type AccountActionCreatorTypes =
  | ConfirmSignUpAction
  | ConfirmSignInAction
  | ConfirmTransferAction;

export const confirmSignIn = (user: User, token: string) => ({
  type: CONFIRM_SIGNIN,
  user,
  token,
});

export const сompleteSignIn = () => async (
  dispatch: Dispatch,
  getState: any
) => {
  const {
    form: {
      signin: { values },
    },
  } = getState();

  axios
    .post("http://localhost:8888/api/signin", {
      email: values.email,
      password: values.password,
    })
    .then((res) => {
      dispatch(confirmSignUp(res.data.user, res.data.token));
      console.log(res.data.user);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const confirmSignUp = (user: User, token: string) => ({
  type: CONFIRM_SIGNUP,
  user,
  token,
});

export const сompleteSignUp = () => async (
  dispatch: Dispatch,
  getState: any
) => {
  const {
    form: {
      signup: { values },
    },
  } = getState();

  axios
    .post("http://localhost:8888/api/signup", {
      username: values.username,
      email: values.email,
      password: values.password,
    })
    .then((res) => {
      dispatch(confirmSignUp(res.data.user, res.data.token));
      console.log(res.data.user);
    })
    .catch((error) => {
      console.log(error);
    });
};
