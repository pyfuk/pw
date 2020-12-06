import { Dispatch } from "redux";
import { GetFormState } from "redux-form";

export const ADD_EMAIL = "ADD_EMAIL";
export const COMPLETE_SIGNIN = "COMPLETE_SIGNIN";

interface AddEmailAction {
  type: typeof ADD_EMAIL;
}

interface СompleteSignInAction {
  type: typeof COMPLETE_SIGNIN;
}

export type AccountActionCreatorTypes = AddEmailAction | СompleteSignInAction;

export const addEmail = () => ({
  type: ADD_EMAIL,
});

export const сompleteSignIn = () => async (
  dispatch: Dispatch,
  getState: GetFormState
) => {
  console.log("hrere");
};

export const сompleteSignUp = () => async (
  dispatch: Dispatch,
  getState: GetFormState
) => {
  console.log("hrere");
};

export const completeTransfer = () => async (
  dispatch: Dispatch,
  getState: GetFormState
) => {
  console.log("hrere");
};
