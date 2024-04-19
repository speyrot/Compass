// src/components/NavBar/NavBar.js
import React from 'react';
import { Navbar, Container, Form, FormControl, Image, Offcanvas, Nav, NavDropdown } from 'react-bootstrap';
import './NavBar.css';
import logo from './logoIcon.png';
import profile from './profilePics.png';
import banner from './banner.png';

function NavBar() {
  return (
    <Navbar bg="light" variant="light" expand={false} className="fixed-top">
      <Container fluid>
        <div className="d-flex align-items-center">
          <Navbar.Brand href="#home">
            <img src={logo} width="30" height="30" alt="Compass Logistics logo" />
          </Navbar.Brand>
          <Form className="d-flex">
            <FormControl type="search" placeholder="Search" aria-label="Search" className="me-2" />
          </Form>
        </div>

        <Navbar.Brand className="mx-auto">
          <img src={banner} width="450" height="30" alt="Compass Logistics" />
        </Navbar.Brand>

        <div className="d-flex align-items-center">
          <div className="navbar-profile me-3">
            <Image src={profile} roundedCircle alt="Profile" style={{ width: 30, height: 30 }} />
          </div>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
        </div>

        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown title="Directory" id="directory-dropdown">
                <NavDropdown.Item href="#Companies">Companies</NavDropdown.Item>
                <NavDropdown.Item href="#Contacts">Contacts</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Pricing" id="pricing-dropdown">
                <NavDropdown.Item href="#newRequest">Start a new request</NavDropdown.Item>
                <NavDropdown.Item href="#pricing">Pricing</NavDropdown.Item>
                <NavDropdown.Item href="#bookings">Bookings</NavDropdown.Item>
                <NavDropdown.Item href="#fclRateSearch">FCL Rate Search</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Tariffs" id="tariffs-dropdown">
                <NavDropdown.Item href="#handling">Handling</NavDropdown.Item>
                <NavDropdown.Item href="#air">Air</NavDropdown.Item>
                <NavDropdown.Item href="#fcl">FCL</NavDropdown.Item>
                <NavDropdown.Item href="#lcl">LCL</NavDropdown.Item>
                <NavDropdown.Item href="#courier">Courier</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Shipments" id="shipments-dropdown">
                <NavDropdown.Item href="#dashboard">Dashboard</NavDropdown.Item>
                <NavDropdown.Item href="#tracking">Tracking</NavDropdown.Item>
                <NavDropdown.Item href="#map">Map</NavDropdown.Item>
                <NavDropdown.Item href="#returns">Returns</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Cross Docking" id="cross-dock-dropdown">
                <NavDropdown.Item href="#inputLabels">Input & Labels</NavDropdown.Item>
                <NavDropdown.Item href="#consignments">Consignments</NavDropdown.Item>
                <NavDropdown.Item href="#warehouses">Warehouses</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Purchase Order" id="purchase-order-dropdown">
                <NavDropdown.Item href="#products">Products</NavDropdown.Item>
                <NavDropdown.Item href="#purchaseOrders">Purchase Orders</NavDropdown.Item>
                <NavDropdown.Item href="#consignments">Consignments</NavDropdown.Item>
                <NavDropdown.Item href="#asnReceipt">ASN & Receipt</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Sales Order" id="sales-order-dropdown">
                <NavDropdown.Item href="#products">Products</NavDropdown.Item>
                <NavDropdown.Item href="#asnReceipt">ASN & Receipt</NavDropdown.Item>
                <NavDropdown.Item href="#salesOrders">Sales Orders</NavDropdown.Item>
                <NavDropdown.Item href="#consignments">Consignments</NavDropdown.Item>
                <NavDropdown.Item href="#inventory">Inventory</NavDropdown.Item>
                <NavDropdown.Item href="#warehouses">Warehouses</NavDropdown.Item>
                <NavDropdown.Item href="#stockAdjustments">Stock Adjustments</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#reporting">Reporting</Nav.Link>
              <Nav.Link href="#settings">Settings</Nav.Link>
              <Nav.Link href="#help">Help</Nav.Link>
            </Nav>
            <Form className="d-flex mt-3">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBar;

