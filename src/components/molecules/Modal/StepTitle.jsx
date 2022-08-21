import React from "react";
import Grid from "@mui/material/Grid";

export default function StepTitle(props) {
  const index = props.stepIndex + 1;
  return (
    <div
      style={{
        fontSize: "2rem",
        fontWeight: "bold",
      }}
    >
      {props.type === "finish"
        ? props.title
        : "Korak " + index + ". " + props.title}
    </div>
  );
}
