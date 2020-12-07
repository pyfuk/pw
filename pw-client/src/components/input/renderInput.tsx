import s from "./renderInput.module.scss";

export const renderField = ({
  label,
  input,
  type,
  meta: { touched, error, warning },
}: any) => (
  <div>
    <div className={s.input_container}>
      <input
        {...input}
        type={type}
        placeholder={label}
        className={s.form_input}
      />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);
