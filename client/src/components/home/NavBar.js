
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../redux/actions/LoginAction';

function NavBar() {
  let currentUser = useSelector((state)=> {return state});
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const  handleLogout = (e)=>{
    localStorage.removeItem("token")
    dispatch(logout())
    navigate(0);
  }

  const authButtons = () => {
    if (currentUser.isLoggedIn !== true) {
      return (
        <Stack direction="horizontal" gap={2}>
          <DropdownButton size="sm" id="dropdown-basic-button" variant="secondary" title="Log In">
            <Dropdown.Item as={Link} to="/userLogin">As Renter</Dropdown.Item>
            <Dropdown.Item as={Link} to="/landlordLogin">As Landlord</Dropdown.Item>
          </DropdownButton>
          <div className="vr" />
          <DropdownButton size="sm" id="dropdown-basic-button" variant="outline-danger" title="Sign Up">
            <Dropdown.Item as={Link} to="/userSignup">As Renter</Dropdown.Item>
            <Dropdown.Item as={Link} to="/landlordSignup">As Landlord</Dropdown.Item> 
          </DropdownButton>
        </Stack>
      )
    }else{
      return <Button size="sm" variant="outline-danger" title="Log out" type="radio" onClick={(e)=>handleLogout (e)}>Log out </Button>
    }
  }



//--------------------------------------------------------------------------------------------------
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand  as={Link} to="/" >NhawasDar</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className=" justify-content-end">

        {authButtons()}

      </Navbar.Collapse>
    </Container>
    </Navbar >
  );

}

export default NavBar ;
