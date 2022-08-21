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
        fontSize: "14px",
        color: props.disabled ? "gray" : "black",
        border: "2px solid black",
        background: props.disabled ? "#aaa" : "#848786",
      }}
      {...rest}
    >
      {children}
    </MuiButton>
  );
}
