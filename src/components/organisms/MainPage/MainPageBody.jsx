import React from "react";
import Grid from "@mui/material/Grid";
import Button from "../../atoms/Button/Button";

export default function MainPageBody(props) {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="space-around"
        alignItems="center"
        spacing={10}
        marginTop="100px"
      >
        <Grid item>
          <div
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Pritisnite gumb niže kako biste pokrenuli
          </div>
        </Grid>
        <Grid item>
          <Button size="large" onClick={props.onOpenModal} spacing={1}>
            Pokreni konfigurator
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
