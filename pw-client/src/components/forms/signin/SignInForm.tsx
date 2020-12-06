import React from "react";
import { Field, reduxForm, SubmitHandler } from "redux-form";

import s from "./SignInForm.module.scss";

interface SignInFormProps {
  handleSubmit: SubmitHandler;
}

const SignInForm = ({ handleSubmit }: SignInFormProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          component={"input"}
          name={"login"}
          placeholder={"Login"}
          className={s.form_input}
        />
      </div>
      <div>
        <Field
          component={"input"}
          name={"password"}
          placeholder={"Password"}
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

export default reduxForm({ form: "signin" })(SignInForm);
