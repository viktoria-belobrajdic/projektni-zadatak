import React from "react";
import Grid from "@mui/material/Grid";
import Button from "../../atoms/Button/Button";
import { useOvermindState } from "../../../overmind";

export default function ModalFooter(props) {
  const overmindState = useOvermindState();
  return overmindState.stepIndex !== 4 ? (
    <Grid
      container
      direction="row"
      justifyContent="flex-end"
      borderTop="2px solid #848786"
      position="absolute"
      bottom="0"
      left="0"
      padding="25px 50px 50px 50px"
    >
      {overmindState.stepIndex !== 0 && (
        <Button
          onClick={props.onPrevious && props.onPrevious}
          size="large"
          spacing={1}
        >
          Nazad
        </Button>
      )}
      <Button
        onClick={props.onNext && props.onNext}
        disabled={overmindState.nextDisabled}
        size="large"
        spacing={1}
      >
        {overmindState.stepIndex === 3 ? "Pošalji" : "Dalje"}
      </Button>
    </Grid>
  ) : (
    <Grid
      container
      direction="row"
      justifyContent="center"
      padding="25px 50px 50px 50px"
    >
      <Button
        onClick={props.onFinish && props.onFinish}
        size="large"
        spacing={1}
      >
        Završi
      </Button>
    </Grid>
  );
}
