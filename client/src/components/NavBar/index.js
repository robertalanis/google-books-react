import React, { useState } from "react";
//import "./style.css";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const NavBar = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar color="primary" dark expand="md">
				<NavbarBrand href="/">Google Books</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink href="/search/">Search</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/saved/">Saved</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="https://github.com/robertalanis/google-books-react">GitHub</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default NavBar;
