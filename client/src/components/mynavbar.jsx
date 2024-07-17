import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Mynavbar() {
  return (
    <div>
      
      <Navbar bg="success"  data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Lounrty App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Calender</Nav.Link>
            <Nav.Link href="#pricing">Notification</Nav.Link>
            <Nav.Link href="#pricing">Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default Mynavbar
