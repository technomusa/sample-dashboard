import React, { useState } from "react";
import Stepper from "../components/multistep/Stepper";
import StepperControl from "../components/multistep/StepperControl";
import Account from "../components/multistep/steps/Account";
import Details from "../components/multistep/steps/Details";
import Final from "../components/multistep/steps/Final";

import { StepperContext } from "../components/multistep/contexts/StepperContext";

const Multistep = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [userData, setUserData] = useState("");

  const [finalData, setFinalData] = useState([]);

  const steps = ["Account Information", "Personal Details", "Complete"];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Account />;

      case 2:
        return <Details />;

      case 3:
        return <Final />;

      default:
        break;
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    //check if steps are within bounds..

    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="md:w-5/6 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      {/* stepper */}
      <div className="container horizontal mt-5">
        <Stepper steps={steps} currentStep={currentStep} />

        {/* Display components */}

        <div className="my-10 p-10">
          <StepperContext.Provider
            value={{
              userData,
              setUserData,
              finalData,
              setFinalData,
            }}
          >
            {displayStep(currentStep)}
          </StepperContext.Provider>
        </div>
      </div>

      {/* navigation controls */}

      <StepperControl
        handleClick={handleClick}
        currentStep={currentStep}
        steps={steps}
      />
    </div>
  );
};

export default Multistep;
