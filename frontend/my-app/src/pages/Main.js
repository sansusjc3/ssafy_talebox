import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../modal/LogoutModal.js";
import "./Main.css";

const Main = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="mainContainer">
      <h1 className="mainText txt">π§π»ββοΈ λνμμ π§π»ββοΈ</h1>
      <div className="buttons">
        <Link to="/home">
          <button className="button1">
            <div className="btnText txt">ππ» λνμ ν</div>
          </button>
        </Link>
        <Link to="/history">
          <button className="button2">
            <div className="btnText txt">π νμ΅κΈ°λ‘</div>
          </button>
        </Link>
        <button className="button3" onClick={openModal}>
          <div className="btnText txt">π λ‘κ·Έμμ</div>
        </button>
        <Modal open={modalOpen} close={closeModal} header="λ‘κ·Έμμ">
          λ‘κ·Έμμ νμκ² μ΄μ?
          <footer className="modalFooter"></footer>
        </Modal>
      </div>
    </div>
  );
};

export default Main;
