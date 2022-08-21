import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import MuiCheckbox from "@mui/material/Checkbox";

export default function Checkbox(props) {
  return (
    <FormGroup
      sx={{
        "& .MuiTypography-root": {
          fontSize: "20px",
          margin: "7.5px 0 7.5px 0",
          width: "350px",
        },
      }}
    >
      <FormControlLabel
        control={<MuiCheckbox checked={props.checked} />}
        label={props.option}
        onChange={(event) => props.onChange(event.target.checked)}
      />
    </FormGroup>
  );
}
