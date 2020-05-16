import React, { useState } from "react";

import { Modal, Button, Form } from "react-bootstrap";
import { DateTimePicker } from "react-widgets";
import Moment from "moment";
import momentLocalizer from "react-widgets-moment";

Moment.locale("fi");
momentLocalizer();

export default function FlexDetailModal({ user, onSave }) {
  console.log("FlexDetailModal");
  console.log(user);
  const [date, setDate] = useState(
    user.flexDate == null ? null : Moment(user.flexDate).toDate()
  );
  const [value, setValue] = useState(user.flexStart);

  const handleClose = () => onSave(null);
  const handleSave = () => {
    const u = {
      personId: user.personId,
      flexDate: date == null ? null : Moment(date).format("YYYY-MM-DD"),
      flexStart: value
    };
    onSave(u);
  };

  return (
    <Modal show={user != null} onHide={() => {}}>
      <Modal.Header>Edit Person Flex Hour Details</Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="fullname">
            <Form.Label>Fullname</Form.Label>
            <Form.Control type="text" readOnly defaultValue={user.fullname} />
          </Form.Group>
          <Form.Group controlId="date">
            <Form.Label>Flex start date</Form.Label>
            <DateTimePicker
              time={false}
              value={date}
              onChange={begin => setDate(begin)}
            />
            <Form.Text className="text-muted">
              Start date for calculating flex hour balance
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="value">
            <Form.Label>Flex start value</Form.Label>
            <Form.Control
              type="text"
              value={value}
              onChange={e => setValue(e.target.value)}
            />
            <Form.Text className="text-muted">
              Start date for calculating flex hour balance
            </Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
