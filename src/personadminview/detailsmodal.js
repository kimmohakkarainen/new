import React from "react";
import { Alert, Container, Row, Col, Button } from "react-bootstrap";

function DetailsModal(show, handleClose) {

	return(
			<Modal show={show} onHide={handleClose}>
			<Modal.Header>
			<Modal.Title>Person Details</Modal.Title>
			</Modal.Header>
			<Modal.Body>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
				Close
				</Button>
				<Button variant="primary" onClick={handleClose}>
				Save Changes
				</Button>
			</Modal.Footer>
		</Modal>
	);
}