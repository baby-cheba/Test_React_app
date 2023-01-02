import React from "react";
import style from "./Profile.module.css";

const ProfileInfo = React.lazy(() => import("./ProfileInfo/ProfileInfo.jsx"));

const MyPosts = React.lazy(() => import("./MyPosts/MyPosts"));

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};

export default Profile;
