import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../redux/actions/LoginAction';
import {
  Container,
  Navbar,
  Dropdown,
  DropdownButton,
  Stack,
  Button,
  Nav,
  Image,
} from 'react-bootstrap';

function NavBar() {
  const { isLoggedIn, user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(logout());
    navigate('/');
  };

  const authButtons = () => {
    if (isLoggedIn !== true) {
      return (
        <Stack direction="horizontal" gap={2}>
          <DropdownButton size="sm" id="dropdown-basic-button" variant="secondary" title="Log In">
            <Dropdown.Item as={Link} to="/userLogin">
              <span className="material-symbols-outlined">login</span>Renter
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/landlordLogin">
              <span className="material-symbols-outlined">login</span>Landlord
            </Dropdown.Item>
          </DropdownButton>
          <div className="vr" />
          <DropdownButton size="sm" id="dropdown-basic-button" variant="outline-danger" title="Sign Up">
            <Dropdown.Item as={Link} to="/userSignup">As Renter</Dropdown.Item>
            <Dropdown.Item as={Link} to="/landlordSignup">As Landlord</Dropdown.Item>
          </DropdownButton>
        </Stack>
      );
    }
    return (
      <Button size="sm" variant="outline-danger" title="Log out" type="radio" onClick={handleLogout}>
        <span className="material-symbols-outlined">logout</span>
      </Button>
    );
  };

  const userButtons = () => {
    if (user === undefined) {
      return (
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/landlord/addListing">
            <span className="material-symbols-outlined">add_home</span>add Listing
          </Nav.Link>
          <Nav.Link as={Link} to="/landlord/houses">
            <span className="material-symbols-outlined">house</span>My Listing
          </Nav.Link>
          <Nav.Link as={Link} to="/landlord/contracts">
            <span className="material-symbols-outlined">receipt</span>My Contracts
          </Nav.Link>
        </Nav>
      );
    }
    if (user.id !== 0) {
      return (
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/renter/contract">
            <span className="material-symbols-outlined">receipt</span>My Contracts
          </Nav.Link>
          <Nav.Link as={Link} to="/renter/likedhouses">
            <span className="material-symbols-outlined">loyalty</span>My Favorites
          </Nav.Link>
        </Nav>
      );
    }
    return null;
  };

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <Image src="https://ik.imagekit.io/nvnw6o7ew/renteasy-high-resolution-logo-color-on-transparent-background_Dn-C9usA_.png?updatedAt=1681798648972" width="70" height="70" className="d-inline-block align-top" alt="RentEasy Logo" />
        </Navbar.Brand>
        {userButtons()}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          {authButtons()}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;