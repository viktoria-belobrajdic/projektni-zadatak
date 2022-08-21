import React from "react";
import Grid from "@mui/material/Grid";
import CloseIcon from "@mui/icons-material/Close";

export default function ModalHeader(props) {
  return (
    <Grid container>
      <Grid item xs={10} style={{ paddingLeft: "166px" }}>
        <div
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Konfigurator servisa
        </div>
      </Grid>
      <Grid
        item
        xs={2}
        style={{
          display: "grid",
          justifyItems: "end",
          alignItems: "center",
        }}
      >
        <CloseIcon onClick={props.onClose && props.onClose}></CloseIcon>
      </Grid>
    </Grid>
  );
}
