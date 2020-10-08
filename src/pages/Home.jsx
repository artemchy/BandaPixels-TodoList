import React from "react";
import { FormPage } from "../components/FormPage";
import NotesPage from "../components/Notes/NotesPage";
import { Sort } from "../components/Sort/Sort";

export const Home = () => {
  return (
    <>
      <FormPage />
      <hr />
      <Sort />
      <NotesPage/>
    </>
  );
};


