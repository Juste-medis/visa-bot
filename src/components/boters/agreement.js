/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import Globals, { _t } from "../../Ressources/Globals";
import React from "react";
import "./agreement.css";
import "./date.css";
import { Form, Modal } from "react-bootstrap";
import { IoEye, IoCloseCircle } from "react-icons/io5";
import GlobalWorker from "../../Ressources/GlobalWorker";

const AgreementComponent = (props) => {
  const { triggerNextStep } = props;
  const [show, setShow] = useState(false);
  const [triggered, settriggered] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [checked, setchecked] = useState(false);

  React.useEffect(() => {
    return () => {};
  }, []);

  function triggetNext() {
    settriggered(true);
    GlobalWorker.setCurrentData("agree_conditions", true);

    triggerNextStep();
  }
  const rndomId = `checker-${Date.now()}`;
  return (
    <div className="sweet-loading position-relative ">
      {triggered && <div className="component-blender"></div>}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="position-relative p-4">
          <button
            onClick={(e) => {
              handleClose();
            }}
            className=" modal-close btn-dark bg-light border-0 position-absolute"
          >
            <IoCloseCircle />
          </button>
          Woohoo, reading this text in a modal!
          <div className="row justify-content-center">
            <button
              onClick={(e) => {
                handleClose();
              }}
              className="btn-checked border-0 col-4 col-md-3 col-lg-2 mt-5"
            >
              OK
            </button>
          </div>
        </Modal.Body>
      </Modal>
      <div className=" d-flex align-items-center col col-12 p-3 position-relative">
        <Form.Check
          id={rndomId}
          type="switch"
          color={Globals.COLORS.primary}
          onChange={(e) => {
            setchecked(!checked);
          }}
          checked={checked}
        />
        <label htmlFor={rndomId} className="me-2 ms-1">
          {_t("i_accept_conditions")}
        </label>

        <a
          onClick={(e) => {
            handleShow();
          }}
          href="#"
          className="btn-checked border-0"
          style={{ color: Globals.COLORS.primary }}
        >
          (<IoEye color={Globals.COLORS.primary} />)
        </a>
      </div>
      <div className="row justify-content-start">
        <button
          disabled={!checked}
          onClick={(e) => {
            triggetNext();
          }}
          className={`btn-dark col-10 ms-5 rounded-2 fw-bolt p-2 border-0 ${
            checked ? "disabled bg-primary text-light" : "text-dark"
          } `}
        >
          {_t("continue")}
        </button>
      </div>
    </div>
  );
};

export default AgreementComponent;
