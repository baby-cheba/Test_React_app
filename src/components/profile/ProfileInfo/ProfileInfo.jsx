import React from "react";
import style from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div className={style.ProfileInfo}>
      <div>
        <img
          className={style.ProfileInfo__img}
          src="https://avatars.mds.yandex.net/i?id=0eaa142d7202ac9bbd26ac279e7ae159_l-4898876-images-thumbs&n=27&h=384&w=480"
          alt="error"
        />
      </div >
      <div className={style.ProfileInfo__descriptionBlock}>
        ava + description
        </div>
    </div>
  );
};

export default ProfileInfo;
