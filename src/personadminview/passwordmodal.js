import React, { Component } from "react";

import { Modal, Button, Form } from "react-bootstrap";

export default class PasswordModal extends Component {
  constructor(props) {
    super(props);
    this.state = this.clearState();

    this.onChangeNewPassword = this.onChangeNewPassword.bind(this);
    this.onChangeRepeatPassword = this.onChangeRepeatPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  clearState() {
    return {
      modal: false,
      currentPassword: "",
      currentPasswordInvalid: false,
      newPassword: "",
      newPasswordValid: false,
      newPasswordInvalid: false,
      newPassword2: "",
      newPassword2Valid: false,
      newPassword2Invalid: false
    };
  }

  onChangeNewPassword(e) {
    const newpass = e.target.value;
    const valid =
      newpass.length > 7 &&
      /[A-Z]/.test(newpass) &&
      /[a-z]/.test(newpass) &&
      /[0-9]/.test(newpass);
    const invalid = !valid && newpass.length > 0;
    this.setState({
      newPassword: newpass,
      newPasswordValid: valid,
      newPasswordInvalid: invalid,
      newPassword2: "",
      newPassword2Valid: false,
      newPassword2Invalid: false
    });
  }

  onChangeRepeatPassword(e) {
    const repeat = e.target.value;
    const valid =
      this.state.newPasswordValid && this.state.newPassword == repeat;
    const invalid =
      this.state.newPasswordValid && this.state.newPassword != repeat;

    this.setState({
      newPassword2: repeat,
      newPassword2Valid: valid,
      newPassword2Invalid: invalid
    });
  }

  onSubmit() {
    const params = {
      personId: this.props.user.personId,
      password: this.state.newPassword
    };
    this.setState(this.clearState());
    this.props.onSave(params);
  }

  handleClose() {
    this.props.onSave(null);
  }

  render() {
    return (
      <Modal show={this.props.user != null} onHide={() => {}}>
        <Modal.Header>Edit Person Flex Hour Details</Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="password1">
              <Form.Label>Fullname</Form.Label>
              <Form.Control
                type="text"
                readOnly
                defaultValue={this.props.user.fullname}
              />
            </Form.Group>
            <Form.Group controlId="date">
              <Form.Label>New password</Form.Label>
              <Form.Control
                type="password"
                value={this.state.newPassword}
                isValid={this.state.newPasswordValid}
                isInvalid={this.state.newPasswordInvalid}
                onChange={this.onChangeNewPassword}
              />
              <Form.Control.Feedback type="invalid">
                password must have minimum of 8 characters including capital
                letters, lowercase letters and numbers
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="password2">
              <Form.Label>Verify new password</Form.Label>
              <Form.Control
                type="password"
                value={this.state.newPassword2}
                isValid={this.state.newPassword2Valid}
                isInvalid={this.state.newPassword2Invalid}
                onChange={this.onChangeRepeatPassword}
              />
              <Form.Control.Feedback type="invalid">
                passwords do not match
              </Form.Control.Feedback>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Cancel
          </Button>
          <Button
            onClick={this.onSubmit}
            variant="primary"
            disabled={
              !this.state.newPasswordValid ||
              !this.state.newPassword2Valid ||
              this.state.currentPasswordInvalid
            }
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
