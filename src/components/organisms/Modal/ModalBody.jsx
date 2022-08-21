import React from "react";
import StepTitle from "../../molecules/Modal/StepTitle";
import StepOptions from "../../molecules/Modal/StepOptions";

export default function ModalBody(props) {
  return (
    <>
      <StepTitle
        stepIndex={props.step.stepIndex}
        title={props.step.title}
        type={props.step.type}
      />
      <StepOptions
        stepIndex={props.step.stepIndex}
        options={props.step.options}
        type={props.step.type}
        text={props.step.text}
      ></StepOptions>
    </>
  );
}
