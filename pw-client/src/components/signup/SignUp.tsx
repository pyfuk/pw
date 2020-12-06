import React from "react";
import SignUpForm from "../forms/signup/SignUpForm";

interface SignUpProps {
  onSignUp: () => void;
}

const SignUp = ({ onSignUp }: SignUpProps) => {
  const onSubmit = (formData: any) => {
    console.log(formData);
    onSignUp();
  };

  return (
    <div>
      <SignUpForm onSubmit={onSubmit}></SignUpForm>
    </div>
  );
};

export default SignUp;
