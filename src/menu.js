import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { IndexLinkContainer } from "react-router-bootstrap";

function AdminMenu(props) {
	return (
			<NavDropdown title="Admin" id="admin-dropdown">
			<IndexLinkContainer to="/admin/customers">
			<NavDropdown.Item>Customers</NavDropdown.Item>
			</IndexLinkContainer>
			<IndexLinkContainer to="/admin/persons">
			<NavDropdown.Item>Persons</NavDropdown.Item>
			</IndexLinkContainer>
			<NavDropdown.Divider />
			<IndexLinkContainer to="/admin/reports">
			<NavDropdown.Item>Reporting</NavDropdown.Item>
			</IndexLinkContainer>
			<IndexLinkContainer to="/admin/graphs">
			<NavDropdown.Item>Graphs</NavDropdown.Item>
			</IndexLinkContainer>
			<NavDropdown.Divider />
			<IndexLinkContainer to="/admin/flexprojects">
			<NavDropdown.Item>Flex Projects</NavDropdown.Item>
			</IndexLinkContainer>
			<IndexLinkContainer to="/admin/flexpersons">
			<NavDropdown.Item>Flex Persons</NavDropdown.Item>
			</IndexLinkContainer>
			</NavDropdown>
	);
}

function PersonalMenu(props) {
	return (
			<Nav className="ml-auto">
			<NavDropdown
			alignRight
			className="dropdown-menu-right"
				title={props.name}
			id="user-dropdown"
				>
			<IndexLinkContainer to="/password">
			<NavDropdown.Item>Change Password</NavDropdown.Item>
			</IndexLinkContainer>
			<IndexLinkContainer to="/pref">
			<NavDropdown.Item>Preferences</NavDropdown.Item>
			</IndexLinkContainer>
			{props.privileged && (
					<IndexLinkContainer to="/pref/projects">
					<NavDropdown.Item>Project Preferences</NavDropdown.Item>
					</IndexLinkContainer>
			)}
			<NavDropdown.Divider />
			<IndexLinkContainer to="/logout">
			<NavDropdown.Item>Logout</NavDropdown.Item>
			</IndexLinkContainer>
			</NavDropdown>
			</Nav>
	);
}

export default class Menu extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const name = this.props.name ? this.props.name : '';
		const privileged = this.props.privileged ? this.props.privileged : false;
		return (
				<Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
				<Navbar.Brand>Rapsa</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse>
				<Nav className="mr-auto">
				<IndexLinkContainer to="/day">
				<Nav.Link eventKey={2} href="/">
				Day
				</Nav.Link>
				</IndexLinkContainer>
				<IndexLinkContainer to="/week">
				<Nav.Link eventKey={3} href="/">
				Week
				</Nav.Link>
				</IndexLinkContainer>
				<IndexLinkContainer to="/month">
				<Nav.Link eventKey={4} href="/month">
				Month
				</Nav.Link>
				</IndexLinkContainer>
				{this.props.privileged && <AdminMenu />}
				</Nav>
				<PersonalMenu name={name} privileged={privileged} />{" "}
				</Navbar.Collapse>
				</Navbar>
		);
				}
	}
