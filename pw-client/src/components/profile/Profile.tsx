import React from "react";
import s from "./Profile.module.scss";

interface ProfileProps {
  user: {
    username: string;
    email: string;
    balance: number;
  };
}

const Profile = ({ user }: ProfileProps) => {
  return (
    <div className={s.container}>
      <span>{user.username}</span> <span>{user.email}</span>{" "}
      <span>{user.balance} PW</span>
    </div>
  );
};

export default Profile;
