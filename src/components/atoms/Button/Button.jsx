import React from "react";
import MuiButton from "@mui/material/Button";

export default function Button(props) {
  const { children, ...rest } = props;

  return (
    <MuiButton
      variant="outlined"
      size={props.size}
      sx={{ m: props.spacing }}
      style={{
        fontSize: "1rem",
        color: "black",
        border: "2px solid black",
        background: "#848786",
      }}
      {...rest}
    >
      {children}
    </MuiButton>
  );
}
