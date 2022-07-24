import React, { useState } from "react";

import Stepper from "./components/Stepper";
import InformationForm from "./components/InformationForm";
import Summary from "./components/Summary";

import "./App.scss";

function App() {
  const [formCompleted, setFormCompleted] = useState(false);
  const [formData, setFormData] = useState([]);
  const [cancelBtnClicked, setCancelBtnClicked] = useState(false);

  return (
    <div className="home">
      <Stepper formCompleted={formCompleted} />

      {!formCompleted ? (
        <InformationForm
          setFormCompleted={setFormCompleted}
          setFormData={setFormData}
          cancelBtnClicked={cancelBtnClicked}
          formData={formData}
        />
      ) : (
        <Summary
          formData={formData}
          setFormCompleted={setFormCompleted}
          setFormData={setFormData}
          setCancelBtnClicked={setCancelBtnClicked}
        />
      )}
    </div>
  );
}

export default App;
