import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import "../css/navbar.css"
const TopNav = () => {
    return(
        <>
  <div id="nav2">
  <Navbar expand="lg" className="px-3" bg="light" variant="light" >
    <Container fluid>
      <Navbar.Brand href="#home">Brand</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="me-auto">
          <NavDropdown title="Home" id="home-dropdown">
            <NavDropdown.Item as={Link} to="/home">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="About" id="about-dropdown">
            <NavDropdown.Item as={Link} to="/about">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Service" id="service-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Contact" id="contact-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>

        {/* Buttons grouped with flex utilities */}
        <div className="d-flex gap-2 mt-2 mt-lg-0">
          <Button variant="dark" className="w-100 w-sm-auto">
            <Link to="/login" className="text-white text-decoration-none">Login</Link>
          </Button>
          <Button variant="dark" className="w-100 w-sm-auto">
            <Link to="/register" className="text-white text-decoration-none">Registration</Link>
          </Button>
        </div>

      </Navbar.Collapse>
    </Container>
  </Navbar>
</div>

        </>
    )
}
export default TopNav