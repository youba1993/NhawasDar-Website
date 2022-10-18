
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../redux/actions/LoginAction';
import Nav from 'react-bootstrap/Nav';


function NavBar() {
  let currentUser = useSelector((state) => { return state.auth });
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const handleLogout = (e) => {
    localStorage.removeItem("token")
    dispatch(logout())
    navigate('/');
  }

  const authButtons = () => {
    if (currentUser.isLoggedIn !== true) {
      return (
        <Stack direction="horizontal" gap={2}>
          <DropdownButton size="sm" id="dropdown-basic-button" variant="secondary" title="Log In">
          
            <Dropdown.Item as={Link} to="/userLogin"><span class="material-symbols-outlined">login</span>Renter</Dropdown.Item>
            <Dropdown.Item as={Link} to="/landlordLogin"><span class="material-symbols-outlined">login</span>Landlord</Dropdown.Item>
          </DropdownButton>
          <div className="vr" />
          <DropdownButton size="sm" id="dropdown-basic-button" variant="outline-danger" title="Sign Up">
            <Dropdown.Item as={Link} to="/userSignup">As Renter</Dropdown.Item>
            <Dropdown.Item as={Link} to="/landlordSignup">As Landlord</Dropdown.Item>
          </DropdownButton>
        </Stack>
      )
    } else {

      return <Button size="sm" variant="outline-danger" title="Log out" type="radio" onClick={(e) => handleLogout(e)}><span class="material-symbols-outlined">logout</span></Button>
    }
  }

  const userButtons = () => {
    if (currentUser.user === undefined) {
      return (
        <Nav className="me-auto">
          <Nav.Link as={Link} to='/landlord/addListing'><span class="material-symbols-outlined">add_home</span>add Listing</Nav.Link>
          <Nav.Link as={Link} to='/landlord/houses'><span class="material-symbols-outlined">house</span>My Listing</Nav.Link>
          <Nav.Link as={Link} to='/landlord/contracts'><span class="material-symbols-outlined">receipt</span>My Contracts</Nav.Link>
        </Nav>
      )
    }
    else {
      if (currentUser.user.id !== 0) {
        return (
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/renter/contract'><span class="material-symbols-outlined">receipt</span>My Contracts</Nav.Link>
            <Nav.Link as={Link} to='/renter/likedhouses'><span class="material-symbols-outlined">loyalty</span>My Favorites</Nav.Link>
          </Nav>
        )
      } else return null
    }
  }

  //--------------------------------------------------------------------------------------------------
  return (
    <Navbar bg="light" >
      <Container fluid>
        <Navbar.Brand as={Link} to="/" > <span class="material-symbols-outlined">bolt</span>RentEasy</Navbar.Brand>
        {userButtons()}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="navbarScroll" className=" justify-content-end">

          {authButtons()}

        </Navbar.Collapse>
      </Container>
    </Navbar >
  );

}

export default NavBar;
