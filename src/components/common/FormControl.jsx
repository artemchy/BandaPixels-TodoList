import React from "react";


export const Input = ({ input, meta, ...props }) => {

  return (
    <div>
      <input {...input} {...props} />
    </div>
  );
};
