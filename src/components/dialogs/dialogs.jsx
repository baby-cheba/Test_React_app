import React from "react";
import { Link } from "react-router-dom";
import style from "./dialogs.module.css";

const DialogItem = (props) => {
  return (
    <div className={style.dialog}>
      <Link to={props.id}>{props.name}</Link>
    </div>
  );
};

const Message = (props) => {
  return <span className={style.message}>{props.message}</span>;
};

const Dialogs = () => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <DialogItem name="Seva" id="1" />
        <DialogItem name="Vit" id="2" />
        <DialogItem name="Vlad" id="3" />
        <DialogItem name="Mark" id="4" />
        <DialogItem name="Danik" id="5" />
        <DialogItem name="Alina" id="6" />
        <DialogItem name="Egor" id="7" />
      </div>

      <div className={style.messages}>
        <Message message="Hi" />
        <Message message="Hi" />
        <Message message="Hi" />
        <Message message="Hi" />
        <Message message="Yo" />
      </div>
    </div>
  );
};

export default Dialogs;
