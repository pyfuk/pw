import React from "react";
import { Field, FormErrors, reduxForm, SubmitHandler } from "redux-form";
import {
  NOT_MATCHING,
  REQUIRED,
  TOO_LONG,
  TOO_SHORT,
} from "../../../redux/models/ValidationErrors";
import { renderField } from "../../input/renderInput";

import s from "./SignUpForm.module.scss";

interface SignUpFormProps {
  handleSubmit: SubmitHandler;
}

interface SignUpFormData {
  username?: string;
  email?: string;
  password?: string;
  confirmation?: string;
}

const validate = (values: SignUpFormData) => {
  let errors: FormErrors<SignUpFormData> = {};

  if (!values.username) {
    errors.username = REQUIRED;
  } else if (values.username.length > 15) {
    errors.username = TOO_LONG(15);
  }

  if (!values.email) {
    errors.email = REQUIRED;
  } else if (values.email.length > 15) {
    errors.email = TOO_LONG(15);
  }

  if (!values.password) {
    errors.password = REQUIRED;
  } else if (values.password.length < 6) {
    errors.password = TOO_SHORT(6);
  }

  if (!values.confirmation) {
    errors.confirmation = REQUIRED;
  } else if (values.confirmation !== values.password) {
    errors.confirmation = NOT_MATCHING;
  }

  return errors;
};

const SignUpForm = ({ handleSubmit }: SignUpFormProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field component={renderField} name={"username"} label={"Username"} />
      </div>
      <div>
        <Field component={renderField} name={"email"} label={"Email"} />
      </div>
      <div>
        <Field
          component={renderField}
          name={"password"}
          label={"Password"}
          type={"password"}
        />
      </div>
      <div>
        <Field
          component={renderField}
          name={"confirmation"}
          label={"Password confirmation"}
          type={"password"}
        />
      </div>
      <div>
        <button>Sign Up</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "signup", validate })(SignUpForm);
