import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default class AddProjectModal extends Component {
  constructor(props) {
    super(props);
    this.state = this.initState();
    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onHide = this.onHide.bind(this);
  }
  
  initState() {
      return {
          projectId: 0,
          customerId: 0,
          name: "",
          nameInvalid: false,
          notes: "",
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
          <Modal.Title>Add Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="name">
            <Form.Label>Project Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter project name"
              value={this.state.name}
              isInvalid={this.state.nameInvalid}
              onChange={this.onChangeName}
            />
            <Form.Control.Feedback type="invalid">
            at least 3 characters
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="notes">
            <Form.Label>Notes</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter notes"
              value={this.state.notes}
              onChange={event => {
                this.setState({ notes: event.target.value });
              }}
            />
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
