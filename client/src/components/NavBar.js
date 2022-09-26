
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function NavBar({toggleLogInU, toggleLogInL , toggleSignUpU, toggleSignUpL}) {

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">NhawasDar</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className=" justify-content-end">

            <DropdownButton size="sm" id="dropdown-basic-button" title="Log In">
              <Dropdown.Item onClick={toggleLogInU}>As Renter</Dropdown.Item>
              <Dropdown.Item onClick={toggleLogInL}>As Landlord</Dropdown.Item>
            </DropdownButton>

            <DropdownButton size="sm" id="dropdown-basic-button" title="Sign Up">
              <Dropdown.Item onClick={toggleSignUpU}>As Renter</Dropdown.Item>
              <Dropdown.Item onClick={toggleSignUpL}>As Landlord</Dropdown.Item>
            </DropdownButton>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

}

export default NavBar;
