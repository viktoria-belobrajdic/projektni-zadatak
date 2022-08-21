import React, { useState } from "react";
import MainPageHeader from "../organisms/MainPage/MainPageHeader";
import MainPageBody from "../organisms/MainPage/MainPageBody";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "./Modal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function MainPage(props) {
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  return (
    <>
      <MainPageHeader></MainPageHeader>
      <MainPageBody onOpenModal={() => setOpenModal(true)}></MainPageBody>
      <Modal open={openModal} onClose={handleClose}></Modal>
    </>
  );
}
