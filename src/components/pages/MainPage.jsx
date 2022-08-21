import React, { useState } from "react";
import MainPageHeader from "../organisms/MainPage/MainPageHeader";
import MainPageBody from "../organisms/MainPage/MainPageBody";
import Modal from "./Modal";

export default function MainPage(props) {
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => setOpenModal(false);

  return (
    <>
      <MainPageHeader></MainPageHeader>
      <MainPageBody onOpenModal={() => setOpenModal(true)}></MainPageBody>
      <Modal open={openModal} onClose={handleClose}></Modal>
    </>
  );
}
