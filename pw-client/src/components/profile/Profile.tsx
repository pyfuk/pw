import React from "react";
import { User } from "../../redux/models/User";
import s from "./Profile.module.scss";

interface ProfileProps {
  user: User;
}

const Profile = ({ user }: ProfileProps) => {
  console.log(user);

  return (
    <div className={s.container}>
      <span>{user.username}</span> <span>{user.email}</span>{" "}
      <span>{user.account.balance} PW</span>
    </div>
  );
};

export default Profile;
