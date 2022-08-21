import React from "react";

import { Grid } from "@mui/material";
import Button from "../../atoms/Button/Button";

import { useOvermindState } from "../../../overmind/index";

export default function Summary(props) {
  const overmindState = useOvermindState();

  const priceWithTwoDecimals = (price) => {
    return price.toFixed(2);
  };

  const renderCarModel = () => {
    return <div>{overmindState.carManufacturer}</div>;
  };

  const renderSelectedServices = () => {
    return (
      <>
        {overmindState.services.map((service, index) => {
          return (
            <>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                key={`selected-services-${index}`}
              >
                <Grid item key={`selected-services-name-${index}`}>
                  {" "}
                  {service.service}
                </Grid>
                <Grid item key={`selected-services-price-${index}`}>
                  {priceWithTwoDecimals(service.price)} KN
                </Grid>
              </Grid>
            </>
          );
        })}

        <div
          style={{
            textAlign: "right",
          }}
        >
          {overmindState.discount && (
            <div>
              Popust (30%):{" "}
              <b>-{priceWithTwoDecimals(overmindState.discountValue)} KN</b>
            </div>
          )}
          <div>
            UKUPNO:{" "}
            <b>
              {priceWithTwoDecimals(
                overmindState.discount
                  ? overmindState.discountPrice
                  : overmindState.price
              )}{" "}
              KN
            </b>
          </div>
        </div>
      </>
    );
  };

  const renderContactInfo = () => {
    return (
      <Grid container direction="row">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          xs={6}
        >
          <div>Ime i prezime:</div>
          <div style={{ marginRight: "30px" }}>{overmindState.name}</div>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          xs={6}
        >
          <div>Email adresa:</div>
          <div>{overmindState.name}</div>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          xs={6}
        >
          <div>Broj telefona:</div>
          <div style={{ marginRight: "30px" }}>{overmindState.phoneNumber}</div>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          xs={6}
        >
          <div>Napomena:</div>
          <div
            style={{
              overflow: "hidden",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
              width: "400px",
              textAlign: "right",
            }}
          >
            {overmindState.note}
          </div>
        </Grid>
      </Grid>
    );
  };

  return (
    <Grid
      item
      xs={props.option === "KONTAKT PODACI" ? 12 : 6}
      style={{
        fontSize: "18px",
      }}
      borderTop={props.option === "KONTAKT PODACI" && "2px solid #848786"}
    >
      {props.option}
      <Button spacing={1} onClick={props.onEdit && props.onEdit}>
        Uredi
      </Button>
      {props.option === "MODEL VOZILA" && renderCarModel()}
      {props.option === "ODABRANE USLUGE" && renderSelectedServices()}
      {props.option === "KONTAKT PODACI" && renderContactInfo()}
    </Grid>
  );
}
