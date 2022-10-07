
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

function NavBar() {
  let currentUser = 1;

  const  handleLogout = (e)=>{
    localStorage.removeItem("token")
    currentUser = null
  }

  const authButtons = () => {
    if (currentUser !== null) {
      return (
        <Stack direction="horizontal" gap={2}>
          <DropdownButton size="sm" id="dropdown-basic-button" variant="secondary" title="Log In">
            <Dropdown.Item >As Renter</Dropdown.Item>
            <Dropdown.Item >As Landlord</Dropdown.Item>
          </DropdownButton>
          <div className="vr" />
          <DropdownButton size="sm" id="dropdown-basic-button" variant="outline-danger" title="Sign Up">
            <Dropdown.Item >As Renter</Dropdown.Item>
            <Dropdown.Item >As Landlord</Dropdown.Item>
          </DropdownButton>
        </Stack>
      )
    }else{
      return <Button size="sm" variant="outline-danger" title="Log out" type="radio" onClick={(e)=>handleLogout (e)}>Log out </Button>
    }
  }




  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand  href="#">NhawasDar</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className=" justify-content-end">

        {authButtons()}

      </Navbar.Collapse>
    </Container>
    </Navbar >
  );

}

export default NavBar;
