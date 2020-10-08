import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeAlert } from "../Redux/noteReducer";
import { CSSTransition } from "react-transition-group";
import { getAlert } from "../Redux/selectors";

export const Alert = () => {
  const alert = useSelector(getAlert)
  const dispatch = useDispatch()

  const closeModal = () => {
    dispatch(closeAlert());
  };

  return (
    <CSSTransition
      in={alert.visible}
      timeout={{
        enter: 500,
        exit: 350,
      }}
      classNames="alert"
      mountOnEnter
      unmountOnExit
    >
      <div
        className={`alert alert-${
          alert.type ? "warning" : "success"
        } alert-dismissible `}
      >
        <strong>Attention!&nbsp;</strong>
        {alert.text}
        <button
          onClick={closeModal}
          type="button"
          className="close"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </CSSTransition>
  );
};



