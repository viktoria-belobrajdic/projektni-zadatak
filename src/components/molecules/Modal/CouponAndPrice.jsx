import React, { useState } from "react";

import Grid from "@mui/material/Grid";
import TextInput from "../../atoms/Input/TextInput";
import Button from "../../atoms/Button/Button";
import { useActions, useOvermindState } from "../../../overmind/index";

export default function CouponAndPrice(props) {
  const [couponCode, setCouponCode] = useState("");
  const actions = useActions();
  const overmindState = useOvermindState();

  const couponInputCheck = () => {
    if (couponCode !== "Tokić123") alert("Uneseni kod nije valjan!");
    else {
      actions.setDiscount(true);
      actions.setCouponInput(false);
      actions.setPrice(props.price);
    }
  };

  const priceWithTwoDecimals = (price) => {
    return price.toFixed(2);
  };

  return (
    <div style={{ marginRight: "50px" }}>
      {!overmindState.couponInput && !overmindState.discount && (
        <div
          style={{
            fontSize: "20px",
            color: "blue",
            fontWeight: "bold",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={() => actions.setCouponInput(true)}
        >
          Imam kupon
        </div>
      )}
      {overmindState.couponInput && !overmindState.discount && (
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Grid item>
            <TextInput
              option="Unesite kod kupona ovdje"
              width="30ch"
              small={true}
              onChange={(value) => setCouponCode(value)}
            ></TextInput>
          </Grid>
          <Grid item>
            <Button size="medium" onClick={couponInputCheck}>
              Primjeni
            </Button>
          </Grid>
        </Grid>
      )}
      {!overmindState.couponInput && overmindState.discount && (
        <div
          style={{
            fontSize: "20px",
            textAlign: "right",
          }}
        >
          <div
            style={{
              color: "green",
            }}
          >
            Hvala vam, unijeli ste ispravan kod kupona{" "}
          </div>
          <div>
            OSNOVICA: <b>{priceWithTwoDecimals(overmindState.price)} KN</b>
          </div>
          <div>
            Popust (30%):{" "}
            <b>-{priceWithTwoDecimals(overmindState.discountValue)} KN</b>
          </div>
        </div>
      )}
      <div
        style={{
          fontSize: "30px",
          textAlign: "right",
        }}
      >
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
  );
}
