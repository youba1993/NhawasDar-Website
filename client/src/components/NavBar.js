
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Stack from 'react-bootstrap/Stack';

function NavBar({toggleLogInU, toggleLogInL , toggleSignUpU, toggleSignUpL}) {

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">NhawasDar</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className=" justify-content-end">
          <Stack direction="horizontal" gap={2}>
            <DropdownButton size="sm" id="dropdown-basic-button" variant="secondary" title="Log In">
              <Dropdown.Item onClick={toggleLogInU}>As Renter</Dropdown.Item>
              <Dropdown.Item onClick={toggleLogInL}>As Landlord</Dropdown.Item>
            </DropdownButton>
            <div className="vr" />
            <DropdownButton size="sm" id="dropdown-basic-button" variant="outline-danger" title="Sign Up">
              <Dropdown.Item onClick={toggleSignUpU}>As Renter</Dropdown.Item>
              <Dropdown.Item onClick={toggleSignUpL}>As Landlord</Dropdown.Item>
            </DropdownButton>
          </Stack>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

}

export default NavBar;
