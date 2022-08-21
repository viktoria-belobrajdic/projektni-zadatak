import React, { useState } from "react";
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
  const [name, setName] = useState(
    overmindState.name ? overmindState.name : ""
  );
  const [email, setEmail] = useState(
    overmindState.email ? overmindState.email : ""
  );
  const [phoneNumber, setPhoneNumber] = useState(
    overmindState.phoneNumber ? overmindState.phoneNumber : ""
  );
  const [note, setNote] = useState(
    overmindState.note ? overmindState.note : ""
  );

  const handleCarManufacturer = (value) => {
    setCarManufacturer(value);
    actions.setCarManufacturer(value);
    if (value) {
      actions.setEnableGoNext(true);
    } else {
      actions.setEnableGoNext(false);
    }
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

    if (newServices.length !== 0) {
      actions.setEnableGoNext(true);
    } else {
      actions.setEnableGoNext(false);
    }

    actions.setServices(newServices);
    actions.setPrice(newPrice);
  };

  const handleContactInformation = (value, code) => {
    switch (code) {
      case "name":
        setName(value);
        actions.setName(value);
        break;
      case "email":
        setEmail(value);
        actions.setEmail(value);
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        actions.phoneNumber(value);
        break;
      case "note":
        setNote(value);
        actions.note(value);
        break;
      default:
        break;
    }

    if (name && email && phoneNumber) {
      actions.setEnableGoNext(true);
    } else {
      actions.setEnableGoNext(false);
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
        style={{ marginTop: "20px", width: "100%" }}
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
            name={name}
            email={email}
            phoneNumber={phoneNumber}
            note={note}
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
        checked={service?.service ? true : false}
        option={option.service + " (" + option.price + "kn)"}
        onChange={(val) => props.onChange(val, option)}
      />
    );
  });
}

function Step3(props) {
  const getValueByCode = (code) => {
    switch (code) {
      case "name":
        return props.name;
      case "email":
        return props.email;
      case "phoneNumber":
        return props.phoneNumber;
      case "note":
        return props.note;
      default:
        return "";
    }
  };
  return props.options.map((option, index) => {
    return (
      <Grid item xs={6} key={`text-input-${index}`}>
        <div style={{ margin: "0 10px" }} key={`text-input-${index}`}>
          <TextInput
            value={getValueByCode(option.code)}
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
        onEdit={() => props.onEdit(index)}
      />
    );
  });
}

function Step5(props) {
  return (
    <div
      style={{
        fontSize: "20px",
        fontWeight: "700",
        margin: "50px",
        width: "600px",
      }}
    >
      {props.text}
    </div>
  );
}
