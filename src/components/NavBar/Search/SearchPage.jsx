import React from "react";
import SearchReduxForm from "./Search";
import { connect } from "react-redux";
import { searchNote } from "../../../Redux/noteReducer";

const SearchPage = ({ searchNote }) => {
  const submit = (searchData) => {
    Object.keys(searchData).length !== 0 && searchNote(searchData);
  };
  return (
    <>
      <SearchReduxForm onSubmit={submit} />
    </>
  );
};
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, { searchNote })(SearchPage);
