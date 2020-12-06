export const ADD_EMAIL = "ADD_EMAIL";

interface AddEmailAction {
  type: typeof ADD_EMAIL;
}

export type AccountActionCreatorTypes = AddEmailAction;

export const addEmail = () => ({
  type: ADD_EMAIL,
});
