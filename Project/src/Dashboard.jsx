import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import loogo from "./assets/logo.png"
import { Link, Outlet, useNavigate } from 'react-router-dom';
import "./css/dashboard.css"
const Dashboard = () =>{
 
  const photo = localStorage.getItem("photo");
  const fname = localStorage.getItem("fname");
  const lname = localStorage.getItem("lname");

  const nav = useNavigate();

  const  logout = () =>{
    localStorage.clear
    nav("/login")
  }
    return(
        <>
          <div className="dashboard-container">
      {/* Top Navbar */}
      <Navbar expand="lg" className="top-navbar">
        <Container fluid className="d-flex justify-content-between">
          <Navbar.Brand href="#">  <div>
          <img 
        src="/logo-2.png" 
        alt="MyBank Logo" 
        width="150" 
        height="auto" 
        className="d-inline-block align-top"
      /> </div>
      
      </Navbar.Brand>
          <div className="profile-section">
            <img src={`http://localhost:8080/uploads/${photo}`} alt="Profile" className="profile-img" />
            <p>{fname} {lname}</p>
            <Nav.Link onClick={logout} className='logout-btn'>Logout</Nav.Link>
          </div>
        </Container>
      </Navbar>
      
      {/* Sidebar Navigation */}
      <div className="main-content">
        <nav className="sidebar">
          <Nav className="flex-column">
            <Nav.Link as={Link} to="balanceinqury" className='linkingdash'>Balance Inquiry</Nav.Link>
            <Nav.Link as={Link} to="accountstatement" className='linkingdash'>Account Statement</Nav.Link>
            <Nav.Link as={Link} to="submitcase" className='linkingdash'>Submit Case</Nav.Link>
            <Nav.Link as={Link} to="withdrawcase" className='linkingdash'>Withdraw Case</Nav.Link>
            <Nav.Link as={Link} to="ministatement" className='linkingdash'>Mini Statement</Nav.Link>
            <Nav.Link as={Link} to="yourprofile" className='linkingdash'>Your Profile</Nav.Link>
            <Nav.Link as={Link} to="resetpassword" className='linkingdash'>Reset Password</Nav.Link>
          </Nav>
        </nav>
        
        {/* Main Outlet Section */}
        <div className="content-area">
          <Outlet />
        </div>
      </div>
    </div>
        </>
    )
}

export default Dashboard
