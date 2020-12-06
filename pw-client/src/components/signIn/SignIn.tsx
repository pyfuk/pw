import React from "react";
import SignInForm from "../forms/signin/SignInForm";

interface SignInProps {
  onSignIn: () => void;
  email: string;
}

const SignIn = ({ onSignIn, email }: SignInProps) => {
  const onSubmit = (formData: any) => {
    console.log(formData);
    onSignIn();
  };

  return (
    <div>
      {email}
      <SignInForm onSubmit={onSubmit}></SignInForm>
    </div>
  );
};

export default SignIn;
