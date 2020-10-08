import React from "react";
import NoteReduxForm from "./Form";
import { useDispatch } from "react-redux";
import { addNote } from "../Redux/noteReducer";

export const FormPage = () => {
  const dispatch = useDispatch()
  const submit = (noteValue) => {
    const title = noteValue["choses"];
    dispatch(addNote(title));
  };

  return (
    <>
      <NoteReduxForm onSubmit={submit} />
    </>
  );
};

