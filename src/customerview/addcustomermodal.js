import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default class AddCustomerModal extends Component {
  constructor(props) {
    super(props);
    this.state = this.initState();
    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onHide = this.onHide.bind(this);
  }
  
  initState() {
      return { 
          customerId: 0, 
          name: "",
          nameInvalid: false,
          disabled: true
         };
  }
  
  onChangeName(e) {
      const name = e.target.value;
      const valid = /\s*\S.+\S\s*/.test(name);
      this.setState({
          name: name,
          nameInvalid: !valid,
          disabled: !valid
          
      });
  }
  
  onSubmit() {
      const customer = this.state;
      this.setState(this.initState());
      this.props.onSave(customer);
  }
  
  onHide() {
      this.setState(this.initState());
      this.props.onHide();
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Add Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="name">
            <Form.Label>Custom Name</Form.Label>
            <Form.Control autoFocus
              type="text"
              placeholder="enter customer name"
              value={this.state.name}
              isInvalid={this.state.nameInvalid}
              onChange={this.onChangeName}
            />
            <Form.Control.Feedback type="invalid">
            at least 3 characters
            </Form.Control.Feedback>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.onHide}>
            Cancel
          </Button>
          <Button variant="primary" onClick={this.onSubmit} disabled={this.state.disabled} >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
