import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";

import Checkbox from "../../atoms/Button/Checkbox";
import RadioButton from "../../atoms/Button/RadioButton";
import TextInput from "../../atoms/Input/TextInput";
import CouponAndPrice from "./CouponAndPrice";
import Summary from "./Summary";

import { useActions, useOvermindState } from "../../../overmind/index";

export default function StepOptions(props) {
  const overmindState = useOvermindState();
  const actions = useActions();

  const [carManufacturer, setCarManufacturer] = useState(
    overmindState.carManufacturer ? overmindState.carManufacturer : ""
  );
  const [services, setServices] = useState(
    overmindState.service ? overmindState.service : []
  );
  const [price, setPrice] = useState(
    overmindState.price ? overmindState.price : 0
  );

  const handleCarManufacturer = (value) => {
    actions.setCarManufacturer(value);
    setCarManufacturer(value);
  };

  const handleService = (value, option) => {
    let newServices = services;
    let newPrice = price;
    if (value) {
      newServices.push(option);
      newPrice = newPrice + option.price;
    } else {
      let foundIndex = newServices.findIndex(
        (element) => element.service === option.service
      );
      newServices.splice(foundIndex, 1);
      newPrice = newPrice - option.price;
    }
    setPrice(newPrice);
    setServices(newServices);

    actions.setServices(newServices);
    actions.setPrice(newPrice);
  };

  const handleContactInformation = (value, code) => {
    switch (code) {
      case "name":
        actions.setName(value);
        break;
      case "email":
        actions.setEmail(value);
        break;
      case "phoneNumber":
        actions.phoneNumber(value);
        break;
      case "note":
        actions.note(value);
        break;
      default:
        break;
    }
  };

  const handleShowStep = (type, stepIx) => {
    return props.type === type && overmindState.stepIndex === stepIx;
  };

  return (
    <>
      <Grid
        container
        direction="row"
        style={{ marginTop: "30px", width: "100%" }}
        justifyContent={
          props.type === "text-input" || (props.type === "finish" && "center")
        }
      >
        {handleShowStep("radio-button", 0) && (
          <Step1
            options={props.options}
            index={props.index}
            carManufacturer={carManufacturer}
            onChange={(val) => handleCarManufacturer(val)}
          />
        )}
        {handleShowStep("checkbox", 1) && (
          <Step2
            options={props.options}
            index={props.index}
            services={overmindState.services}
            onChange={(val, option) => handleService(val, option)}
          />
        )}
        {handleShowStep("text-input", 2) && (
          <Step3
            options={props.options}
            index={props.index}
            onChange={(val, option) => handleContactInformation(val, option)}
          />
        )}
        {handleShowStep("summary", 3) && (
          <Step4
            options={props.options}
            index={props.index}
            stepIndex={overmindState.stepIndex}
            onEdit={(index) => actions.setStepIndex(index)}
          />
        )}
        {handleShowStep("finish", 4) && (
          <Step5
            text={props.text}
            index={props.index}
            stepIndex={overmindState.stepIndex}
            onFinish={(index) => {
              console.log(index);
            }}
          />
        )}
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        position="absolute"
        bottom="150px"
        paddingRight="50px"
      >
        {props.type === "checkbox" && <CouponAndPrice price={price} />}
      </Grid>
    </>
  );
}

function Step1(props) {
  return props.options.map((option, index) => {
    return (
      <RadioButton
        key={`radio-button-${index}`}
        checked={props.carManufacturer === option}
        option={option}
        onChange={(val) => props.onChange(val)}
      />
    );
  });
}

function Step2(props) {
  return props.options.map((option, index) => {
    let service = props.services.find((ser) => ser.service === option.service);
    return (
      <Checkbox
        key={`checkbox-button-${index}`}
        checked={service?.service && true}
        option={option.service + " (" + option.price + "kn)"}
        onChange={(val) => props.onChange(val, option)}
      />
    );
  });
}

function Step3(props) {
  return props.options.map((option, index) => {
    return (
      <Grid item xs={6}>
        <div style={{ margin: "0 10px" }}>
          <TextInput
            key={`text-input-${index}`}
            option={option.title}
            required={option.title === "Napomena (opcionalno)" ? false : true}
            multiline={option.title === "Napomena (opcionalno)" ? true : false}
            onChange={(val) => props.onChange(val, option.code)}
          />
        </div>
      </Grid>
    );
  });
}

function Step4(props) {
  return props.options.map((option, index) => {
    return (
      <Summary
        key={`summary-${index}`}
        option={option}
        stepIndex={props.stepIndex}
        required={option === "Napomena (opcionalno)" ? false : true}
        multiline={option === "Napomena (opcionalno)" ? true : false}
        onEdit={() => props.onEdit(index)}
      />
    );
  });
}

function Step5(props) {
  return (
    <div style={{ fontSize: "25px", fontWeight: "700", margin: "50px" }}>
      {props.text}
    </div>
  );
}
