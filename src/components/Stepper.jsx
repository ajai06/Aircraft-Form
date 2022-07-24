import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, fa1, fa2 } from "@fortawesome/free-solid-svg-icons";

function Stepper({ formCompleted }) {
  return (
    <div className="buttons">
      {formCompleted ? (
        <button type="button" className="btn  btn-xl btn-completed">
          <FontAwesomeIcon icon={faCheck} className="icon-item check-icon" />
          <span className="btn-text"> Application Information</span>
        </button>
      ) : (
        <button
          type="button"
          className="btn  btn-xl btn-pending btn-current-stage"
        >
          <FontAwesomeIcon icon={fa1} className="icon-item two-icon" />
          <span className="btn-text pending-btn-text">
            Application Information
          </span>
        </button>
      )}
      <hr
        className={
          "horizontal " +
          (formCompleted ? "completed-horizontal" : "pending-horizontal")
        }
      />
      <button
        type="button"
        className={
          "btn  btn-xl btn-pending" + (formCompleted ? " btn-current-stage" : "")
        }
      >
        <FontAwesomeIcon icon={fa2} className="icon-item two-icon" />
        <span className="btn-text pending-btn-text">Summary</span>
      </button>
    </div>
  );
}

export default Stepper;
