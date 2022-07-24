import React from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import OneLinerText from "./sharedComponents/OneLinerText";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function Summary({
  formData,
  setFormData,
  setFormCompleted,
  setCancelBtnClicked,
}) {
  const cancelClick = () => {
    setFormCompleted(false);
    setFormData(formData);
    setCancelBtnClicked(true);
  };

  const submitForm = () => {
    window.alert("Apllication Submitted !")
    setFormCompleted(false);
  }

  return (
    <>
      <div className="mt-5">
        <h3 className="heading-text">Summary</h3>
        <p>
         A sub-heading is a mini-heading givwn to a subsection or paragraph within a main piece of writing.<br/>
         They're smaller than the mai headline but larger than tha paragraph text of the article
        </p>
      </div>
      <div className="view-form-data">
        <h4 className="heading-text mb-5">Application Information</h4>
        <>
          <OneLinerText
            label="Aircraft Operator"
            answer={formData.aircraftOperator}
          />
          <OneLinerText
            label="Aircraft Make/Type"
            answer={formData.aircraftMake}
          />
          <OneLinerText
            label="Aircraft Call Sign"
            answer={formData.aircraftCallSign}
          />
          <OneLinerText
            label="Aircraft Registration"
            answer={formData.aircraftRegistration}
          />
          <OneLinerText
            label="Date Of Occurance"
            answer={formData.dateOfOccurance}
          />
          <OneLinerText
            label="Time Of Occurance"
            answer={formData.timeOfOccurance}
          />
          <OneLinerText label="Flight Rules" answer={formData.flightRules} />
          <OneLinerText
            label="Application Type"
            answer={formData.applicationType}
          />
          <OneLinerText label="Runway In Use" answer={formData.runwayInUse} />
          <OneLinerText label="Height (Agl)" answer={formData.heightAgl} />
          <OneLinerText
            label="Aircraft Operator"
            answer={formData.indicatedAirSpeed}
          />
          <OneLinerText
            label="Indicated Air Speed (las-Kt)"
            answer={formData.aircraftMake}
          />
          <OneLinerText
            label="Environmental Details (Met Conditions"
            answer={formData.environmentalDetails}
          />
          <OneLinerText label="Facility" answer={formData.facility} />
          <OneLinerText label="Other" answer={formData.other} />
          <OneLinerText label="Frequency/Channel" answer={formData.frequency} />
          <OneLinerText
            label="Deatils Of Inadequacy"
            answer={formData.detailsOfInadequacy}
          />
          <OneLinerText
            label="Name Of Reporter"
            answer={formData.nameOfReporter}
          />
          <OneLinerText
            label="Organization/Position"
            answer={formData.organization}
          />
          <OneLinerText label="Email Address" answer={formData.email} />
          <OneLinerText label="Address" answer={formData.address} />
          <OneLinerText label="Telephone" answer={formData.telephone} />
        </>
        <div className="mt-5">
          <Button
            type="button"
            className="cancel-btn ml-5"
            onClick={cancelClick}
          >
            Cancel
          </Button>
          <Button className="ml-3 submit-btn" type="button" onClick={submitForm}>
            Submit Form <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </div>
      </div>
    </>
  );
}

export default Summary;
