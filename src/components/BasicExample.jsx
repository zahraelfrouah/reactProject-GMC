import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
   <Navbar
  expand="lg"
  className="bg-white shadow-lg py-3"
  variant="light"
>
  <Container>
    <Navbar.Brand
      href="#home"
      className="fw-semibold text-warning text-uppercase"
    >
      LuxuryBrand
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />

    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto align-items-center gap-3">
        <Nav.Link
          href="#home"
          className="text-dark fw-medium"
        >
          Home
        </Nav.Link>

        <Nav.Link
          href="#link"
          className="text-dark fw-medium"
        >
          Collections
        </Nav.Link>

        <NavDropdown
          title={<span className="text-warning fw-medium">Explore</span>}
          id="basic-nav-dropdown"
          menuVariant="light"
        >
          <NavDropdown.Item href="#action/3.1">
            Premium
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
            Limited Edition
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">
            Accessories
          </NavDropdown.Item>

          <NavDropdown.Divider />

          <NavDropdown.Item href="#action/3.4">
            All Products
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


  );
}

export default BasicExample;