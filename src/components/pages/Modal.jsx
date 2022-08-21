import React, { useState, useEffect } from "react";
import ModalHeader from "../organisms/Modal/ModalHeader";
import Box from "@mui/material/Box";
import MuiModal from "@mui/material/Modal";
import ModalBody from "../organisms/Modal/ModalBody";
import ModalFooter from "../organisms/Modal/ModalFooter";
import { steps } from "../organisms/data";
import { useActions, useOvermindState } from "../../overmind/index";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 1200,
  minWidth: "80%",
  minHeight: "60%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  padding: "50px",
  overflow: "hidden",
};

export default function Modal(props) {
  const overmindState = useOvermindState();
  const actions = useActions();
  const [stepIndex, setStepIndex] = useState(
    overmindState.stepIndex ? overmindState.stepIndex : 0
  );

  const handleFinish = () => {
    props.onClose && props.onClose();
    setStepIndex(0);
    actions.setStepIndex(0);
  };

  const handleStepIndex = (val) => {
    let index = stepIndex;
    let newStep = index + val;
    setStepIndex(newStep);
    actions.setStepIndex(newStep);
  };

  useEffect(() => {
    switch (overmindState.stepIndex) {
      case 0:
        if (overmindState.carManufacturer) {
          actions.setEnableGoNext(true);
        } else {
          actions.setEnableGoNext(false);
        }
        break;
      case 1:
        if (overmindState.services.length !== 0) {
          actions.setEnableGoNext(true);
        } else {
          actions.setEnableGoNext(false);
        }
        break;
      case 2:
        if (
          overmindState.name &&
          overmindState.email &&
          overmindState.phoneNumber
        ) {
          actions.setEnableGoNext(true);
        } else {
          actions.setEnableGoNext(false);
        }
        break;
      default:
        break;
    }
  }, [overmindState.stepIndex]);

  useEffect(() => {
    setStepIndex(overmindState.stepIndex);
  }, [overmindState.stepIndex]);

  return (
    <MuiModal
      open={props.open}
      onClose={props.onClose && props.onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <ModalHeader onClose={props.onClose && props.onClose} />
        <div
          style={{
            marginTop: "20px",
            textAlign: steps[stepIndex].type === "finish" && "center",
          }}
        >
          <ModalBody step={steps[stepIndex]} />
        </div>
        <ModalFooter
          stepIndex={stepIndex}
          onPrevious={() => handleStepIndex(-1)}
          onNext={() => {
            handleStepIndex(1);
          }}
          onFinish={handleFinish}
        />
      </Box>
    </MuiModal>
  );
}
