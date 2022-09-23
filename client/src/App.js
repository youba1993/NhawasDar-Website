
import './App.css';
import LandlordLogin from './components/LandlordLogin';
import UserLogin from './components/UserLogin';
import {useState} from 'react';
import UserSignUp from './components/UserSignUp';
import LandlordSignUp from './components/LandlordSignUp';

function App() {
  const [logIn, setLogIn] = useState(false);
  const [signUp, setSignUp] = useState(false);

  function toggleLogIn() {
    setLogIn(!logIn)
  }

  function toggleSignUp() {
    setSignUp(!signUp)
  }

  return (
    <div className="App">
      <button onClick={toggleLogIn}>Choose Login Role</button>
      {logIn? <UserLogin />:<LandlordLogin />}
      <br/>
      ----------------------------------------------------
      <br/>
      <button onClick={toggleSignUp}>Choose Signup Role</button>
      {signUp? <UserSignUp />:<LandlordSignUp />}

    </div>
  );
}

export default App;
