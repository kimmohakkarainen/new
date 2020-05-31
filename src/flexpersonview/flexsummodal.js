import React, { useState } from "react";
import {
  Modal,
  Button,
  Form,
  Collapse,
  Card,
  ListGroup,
  Spinner
} from "react-bootstrap";
import FlexMonthComponent from "../flexmonthview/flexmonthcomponent";

export default function FlexSumModal({ user, months, handleClose }) {
  return (
    <Modal size="lg" show={user != null} onHide={handleClose}>
      <Modal.Header closeButton>{user.fullname}</Modal.Header>
      <Modal.Body>
        <FlexMonthComponent months={months} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
