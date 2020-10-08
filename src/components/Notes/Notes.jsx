import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { selectActive, selectDone } from '../../Redux/noteReducer';
import Edit from "./Edit";
import styled from "styled-components";

const StyledNote = styled.li`
  background-color: ${({ status }) => (status === 'done' ? "#90EE90" : "#fff")};
  transition: background-color 0.2s linear;
  :hover {
    background-color: #ccc;
  }
`;

export const Notes = ({ note, removeNote, setEditMode }) => {

  const [openEdit, setEditOpen] = useState(false);

  const dispatch = useDispatch()

  const onEdit = () => {
    setEditOpen(true);
  };
  const selectLikeDone = (noteId) => {
    dispatch(selectDone(noteId))
  }
  const selectLikeActive = (noteId) => {
    dispatch(selectActive(noteId))
  }

  return (
    <>
      <StyledNote
        onMouseLeave={() => setEditOpen(false)}
        className="list-group-item note"
        status={note.status}
      >
        {openEdit && (
          <Edit
            removeNote={removeNote}
            setEditMode={setEditMode}
            note={note}
            setEditOpen={setEditOpen}
            selectLikeDone={selectLikeDone}
            selectLikeActive={selectLikeActive}
          />
        )}
        <div className="note_body" onClick={onEdit}>
          <strong>{note.title}</strong>
          <span className="description">{note.status ? note.status : note.description}</span>
          <small>{note.data}</small>
        </div>
        <button
          type="button"
          className="btn btn-dark btn-sm"
          onClick={() => removeNote(note.id)}
        >
          &times;
        </button>
      </StyledNote>
    </>
  );
};


