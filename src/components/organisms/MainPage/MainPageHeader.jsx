import React from "react";
import { TokicLogo } from "../../../assets/imagesList";
import Grid from "@mui/material/Grid";

export default function MainPageHeader(props) {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      style={{ borderBottom: "2px solid black" }}
    >
      <Grid style={{ paddingLeft: "50px" }}>
        <img src={TokicLogo} alt="Tokic logo" height="auto" width="max-width" />
      </Grid>
      <Grid style={{ paddingLeft: "50px" }}>
        <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
          Konfigurator servisa
        </div>
        <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          Izračunajte trošak servisa{" "}
        </div>
      </Grid>
    </Grid>
  );
}
