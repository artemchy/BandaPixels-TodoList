import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../common/FormControl";

const Search = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="form-inline my-2 my-lg-0">
      <Field
        component={Input}
        className="form-control mr-sm-2"
        name="search"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  );
};

const SearchReduxForm = reduxForm({ form: "searchNote" })(Search);

export default SearchReduxForm;
