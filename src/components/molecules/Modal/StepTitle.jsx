import React from "react";

export default function StepTitle(props) {
  const index = props.stepIndex + 1;
  return (
    <div
      style={{
        fontSize: "30px",
        fontWeight: "bold",
      }}
    >
      {props.type === "finish"
        ? props.title
        : "Korak " + index + ". " + props.title}
    </div>
  );
}
