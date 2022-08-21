import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function TextInput(props) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": {
          m: 1,
          width: "100%",
        },

        "& label.Mui-focused": {
          background: "white",
        },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        required={props.required}
        id="outlined"
        value={props.value}
        label={props.option}
        size={props.small && "small"}
        onChange={(e) => props.onChange(e.target.value)}
        multiline={props.multiline}
        rows={props.multiline ? 4 : 1}
      />
    </Box>
  );
}
