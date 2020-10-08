import React, { useEffect, useState } from "react";
import Preloader from "../common/Preloader";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Route, BrowserRouter } from "react-router-dom";
import NoteFormData from "./NoteFormData";
import { Notes } from "./Notes";
import { useSelector, useDispatch } from 'react-redux';
import { getLoading, getNotes } from "../../Redux/selectors";
import { deleteNoteFromFirebase, fetchNotes } from "../../Redux/noteReducer";

const NotesPage = () => {
  const dispatch = useDispatch()
  const notes = useSelector(getNotes)
  const loading = useSelector(getLoading)

  const [editMode, setEditMode] = useState(false);

  const removeNote = (id) => {
    dispatch(deleteNoteFromFirebase(id));
  };

  useEffect( () => {
    dispatch(fetchNotes())
  },[])

  return (
    <BrowserRouter>
      {loading && <Preloader />}
      <TransitionGroup component="ul" className="list-group">
        {notes &&
          notes.map( note =>
            editMode ? (
              <Route
                key={note.id}
                path={`/edit/${note.id}`}
                render={() => (
                  <NoteFormData                   
                    note={note}
                    setEditMode={setEditMode}
                    editMode={editMode}
                  />
                )}
              />
            ) : (
              <CSSTransition key={note.id} classNames={"note"} timeout={800}>
                <Route
                  path={"/"}
                  render={() => (
                    <Notes
                      key={note.id}
                      note={note}
                      setEditMode={setEditMode}
                      removeNote={removeNote}
                    />
                  )}
                />
              </CSSTransition>
            )
          )}
      </TransitionGroup>
    </BrowserRouter>
  );
};

export default NotesPage;
