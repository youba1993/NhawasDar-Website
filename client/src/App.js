
import './App.css';
import LandlordLogin from './components/LandlordLogin';
import UserLogin from './components/UserLogin';
import {useState} from 'react';
import UserSignUp from './components/UserSignUp';
import LandlordSignUp from './components/LandlordSignUp';
import NavBar from './components/NavBar';
import MainPageSearch from './components/MainPageSearch';
import LandlordHouses from './components/LandlordHouses';



function App() {
  const [logInU, setLogInU] = useState(false);
  const [logInL, setLogInL] = useState(false);
  const [signUpU, setSignUpU] = useState(false);
  const [signUpL, setSignUpL] = useState(false);

  function toggleLogInU() {
    setLogInU(!logInU)
    setLogInL(false)
  }
  function toggleLogInL() {
    setLogInL(!logInL)
    setLogInU(false)
  }

  function toggleSignUpU() {
    setSignUpU(!signUpU)
    setSignUpL(false)
  }

  function toggleSignUpL() {
    setSignUpL(!signUpL)
    setSignUpU(false)
  }

  return (
    <div className="p-5 bg-image" style={{
      backgroundImage: `url(https://www.nationsonline.org/gallery/Algeria/Assekrem-Hoggar-mountains-Algeria.jpg)`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: 'center',
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      width: '100vw',
      height: '100vh'
      }}>
    
      <NavBar toggleLogInU={toggleLogInU}  toggleLogInL={toggleLogInL} toggleSignUpL={toggleSignUpL} toggleSignUpU={toggleSignUpU} />
      <br/>
      <MainPageSearch />
      <br/>
      { logInU? <UserLogin />:""}
      { logInL? <LandlordLogin />:""}

      { signUpL? <LandlordSignUp />:""}
      { signUpU? <UserSignUp />:""}     
      
      <LandlordHouses />
    </div>
    
  );
}

export default App;
