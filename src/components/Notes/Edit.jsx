import React from "react";
import classes from "./Edit.module.scss";
import { Link } from "react-router-dom";

const Edit = ({ setEditOpen, setEditMode, note, removeNote, selectLikeDone, selectLikeActive }) => {


  return (
    <div onMouseLeave={() => setEditOpen(false)} className={classes.modal}>
      <div className={classes.item}>
        <Link to={`/edit/${note.id}`} onClick={() => setEditMode(true)}>
          edit
        </Link>
      </div>
      <div onClick={() => selectLikeDone(note.id)} className={classes.item}>
        <span>Done</span>
      </div>
      <div onClick={() => selectLikeActive(note.id)} className={classes.item}>
        <span>Active</span>
      </div>
      <div onClick={() => removeNote(note.id)} className={classes.item}>
        <span>Delete</span>
      </div>
    </div>
  );
};

export default Edit;
