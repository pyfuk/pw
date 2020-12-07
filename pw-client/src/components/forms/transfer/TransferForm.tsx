import React from "react";
import { Field, reduxForm, SubmitHandler } from "redux-form";

import s from "./TransferForm.module.scss";

interface TransferFormProps {
  handleSubmit: SubmitHandler;
}

const TransferForm = ({ handleSubmit }: TransferFormProps) => {
  return (
    <form onSubmit={handleSubmit}>
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
          name={"amount"}
          placeholder={"Amount"}
          className={s.form_input}
        />
      </div>
      <div>
        <button>Send money</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "transfer" })(TransferForm);
