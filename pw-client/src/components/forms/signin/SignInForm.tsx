import React from "react";
import { Field, FormErrors, reduxForm, SubmitHandler } from "redux-form";
import {
  REQUIRED,
  TOO_LONG,
  TOO_SHORT,
} from "../../../redux/models/ValidationErrors";
import { renderField } from "../../input/renderInput";

import s from "./SignInForm.module.scss";

interface SignInFormProps {
  handleSubmit: SubmitHandler;
}

interface SignInFormData {
  email?: string;
  password?: string;
}

const validate = (values: SignInFormData) => {
  let errors: FormErrors<SignInFormData> = {};

  if (!values.email) {
    errors.email = REQUIRED;
  }

  if (!values.password) {
    errors.password = REQUIRED;
  }

  return errors;
};

const SignInForm = ({ handleSubmit }: SignInFormProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          component={renderField}
          name={"email"}
          label={"Email"}
          className={s.form_input}
        />
      </div>
      <div>
        <Field
          component={renderField}
          name={"password"}
          label={"Password"}
          type={"password"}
          className={s.form_input}
        />
      </div>
      <div>
        <button>Sign In</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "signin", validate })(SignInForm);
