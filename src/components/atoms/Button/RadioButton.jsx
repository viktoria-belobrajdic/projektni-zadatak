import React from "react";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function RadioButton(props) {
  return (
    <FormControlLabel
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
