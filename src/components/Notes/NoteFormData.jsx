import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateNote } from "../../Redux/noteReducer";

const NoteFormData = ({ note, setEditMode }) => {
  let [currentNote, setNote] = useState(note.title);
  let [currentDescription, setDescription] = useState(note.description);
  let [currentData, setData] = useState(note.data);

  const dispatch = useDispatch()

  const onNoteChange = (e) => {
    setNote(e.currentTarget.value);
  };
  const onDescriptionChange = (e) => {
    setDescription(e.currentTarget.value);
  };
  const onDataChange = () => {
    setData(new Date().toJSON());
  };
  const saveAndClose = (id) => {
    dispatch(updateNote(id, currentNote, currentDescription, currentData));
    setEditMode(false);
  };

  return (
    <>
      <li className="list-group-item note" key={note.id}>
        <form className="input-group">
          <input
            className="form-control"
            onChange={onNoteChange}
            value={currentNote}
            type="text"
          />
          <input
            className="form-control"
            onChange={onDescriptionChange}
            value={currentDescription}
            type="text"
          />
          <input
            className="form-control"
            onChange={onDataChange}
            value={currentData}
            type="text"
          />
          <Link
            to="/"
            className="btn btn-outline-success"
            onClick={() => saveAndClose(note.id)}
          >
            &#10004;
          </Link>
        </form>
      </li>
    </>
  );
};

export default NoteFormData;
