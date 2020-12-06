import React from "react";
import SignInForm from "../forms/signin/SignInForm";

interface SignInProps {
  onSignIn: () => void;
}

const SignIn = ({ onSignIn }: SignInProps) => {
  const onSubmit = (formData: any) => {
    console.log(formData);
    onSignIn();
  };

  return (
    <div>
      <SignInForm onSubmit={onSubmit}></SignInForm>
    </div>
  );
};

export default SignIn;
