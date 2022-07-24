import React from "react";

function OneLinerText({ label, answer }) {
  return (
    <div className="row mb-3">
      <h6 className="col-6">{label}</h6>
      <h6 className="col-6">{answer}</h6>
    </div>
  );
}

export default OneLinerText;
