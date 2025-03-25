import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BiMessageDetail } from "react-icons/bi";
import { LuMapPin } from "react-icons/lu";
import { ImFacebook2 } from "react-icons/im";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import "../css/navbar2.css"

const Topnav2 =()=>{
    return(
        <>
        {/* <div className="main1"> */}
        <div className="Topnav1">
  <Navbar bg="dark" data-bs-theme="dark" expand="lg" style={{ height: "70px" }}>
    <Container fluid className="d-flex justify-content-between align-items-center">

      {/* Brand & Logo */}
      <div className="d-flex align-items-center">
        <Navbar.Brand href="#home">
          <img
            src="./logo-2.png"
            alt="logo"
            style={{ height: "40px", marginRight: "10px" }}
          />
        </Navbar.Brand>
      </div>

      {/* Nav links and Info */}
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="me-auto align-items-center gap-3 text-white">
          <Nav.Link href="#home" className="text-white">Home</Nav.Link>
          <Nav.Link href="#features" className="text-white">Features</Nav.Link>
          <Nav.Link href="#pricing" className="text-white">Pricing</Nav.Link>
        </Nav>

        {/* Contact Info Section */}
        <div className="d-none d-lg-flex align-items-center gap-4 text-white ms-auto me-4">
          <div className="d-flex align-items-center gap-2">
            <BiMessageDetail /> <span>info@example.com</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <LuMapPin /> <span>Find Nearest Branch</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="d-flex align-items-center gap-3">
          <ImFacebook2 style={{ color: "white", fontSize: "20px" }} />
          <FaSquareInstagram style={{ color: "white", fontSize: "24px" }} />
          <FaLinkedin style={{ color: "white", fontSize: "24px" }} />
          <FaWhatsappSquare style={{ color: "white", fontSize: "26px" }} />
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
</div>


      {/* </div> */}

        </>
    )
}
export default Topnav2
