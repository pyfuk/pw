import React from "react";
import { Field, reduxForm, SubmitHandler } from "redux-form";

import s from "./SignUpForm.module.scss";

interface SignUpFormProps {
  handleSubmit: SubmitHandler;
}

const SignUpForm = ({ handleSubmit }: SignUpFormProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          component={"input"}
          name={"username"}
          placeholder={"Username"}
          className={s.form_input}
        />
      </div>
      <div>
        <Field
          component={"input"}
          name={"email"}
          placeholder={"Email"}
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
        <Field
          component={"input"}
          name={"password-validation"}
          placeholder={"Password validation"}
          type={"password"}
          className={s.form_input}
        />
      </div>
      <div>
        <button>Sign Up</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "signup" })(SignUpForm);
