import React from "react";
import { Field, reduxForm, SubmitHandler } from "redux-form";

interface SignInFormProps {
  handleSubmit: SubmitHandler;
}

const SignInForm = ({ handleSubmit }: SignInFormProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field component={"input"} name={"login"} placeholder={"Login"} />
      </div>
      <div>
        <Field component={"input"} name={"password"} placeholder={"Password"} />
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "login" })(SignInForm);
