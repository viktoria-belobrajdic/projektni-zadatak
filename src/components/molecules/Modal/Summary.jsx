import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import Button from "../../atoms/Button/Button";

import { useActions, useOvermindState } from "../../../overmind/index";

export default function Summary(props) {
  const overmindState = useOvermindState();
  const actions = useActions();

  console.log(overmindState);

  const renderCarModel = () => {
    return <div>{overmindState.carManufacturer}</div>;
  };

  const renderSelectedServices = () => {
    return overmindState.services.map((service, index) => {
      return (
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item> {service.service}</Grid>
          <Grid item>{service.price} KN</Grid>
        </Grid>
      );
    });
  };

  const renderContactInfo = () => {
    return (
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item> {overmindState.name}</Grid>
        <Grid item>{overmindState.email}</Grid>
        <Grid item>{overmindState.phoneNumber}</Grid>
      </Grid>
    );
  };

  console.log(overmindState);
  return (
    <Grid
      item
      xs={props.option === "KONTAKT PODACI" ? 12 : 6}
      style={{
        fontSize: "30px",
      }}
    >
      {props.option}
      <Button spacing={true} onClick={props.onEdit && props.onEdit}>
        Uredi
      </Button>
      {props.option === "MODEL VOZILA" && renderCarModel()}
      {props.option === "ODABRANE USLUGE" && renderSelectedServices()}
      {props.option === "KONTAKT PODACI" && renderContactInfo()}
    </Grid>
  );
}
