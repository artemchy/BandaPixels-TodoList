import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "./common/FormControl";

const Form = ({ handleSubmit }) => {

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          component={Input}
          name={"choses"}
          type={"text"}
          className="form-control"
          placeholder="Enter announcement name"
        />

      </div>
    </form>
  );
};
const NoteReduxForm = reduxForm({ form: "title" })(Form);

export default NoteReduxForm;
