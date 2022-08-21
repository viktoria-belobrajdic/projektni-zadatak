import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function RadioButton(props) {
  return (
    <FormControlLabel
      key={props.key}
      sx={{
        "& .MuiTypography-root": {
          fontSize: "20px",
          margin: "7.5px 0 7.5px 0",
          width: "110px",
        },
      }}
      control={
        <Radio
          checked={props.checked}
          id={props.option}
          onChange={(event) => props.onChange(event.target.value)}
          value={props.option}
          sx={{
            "& .MuiSvgIcon-root": {
              margin: 0,
            },
          }}
        />
      }
      label={props.option}
    />
  );
}
