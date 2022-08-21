import React from "react";

export default function StepTitle(props) {
  const index = props.stepIndex + 1;
  return (
    <div
      style={{
        fontSize: "20px",
        fontWeight: "bold",
      }}
    >
      {props.type === "finish"
        ? props.title
        : "Korak " + index + ". " + props.title}
    </div>
  );
}
