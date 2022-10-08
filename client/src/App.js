import './App.css';
import Home from './components/home/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import UserLogin from './components/auth/UserLogin';
import UserSignUp from './components/auth/UserSignUp';
import LandlordLogin from './components/auth/LandlordLogin';
import LandlordSignUp from './components/auth/LandlordSignUp';
import CreateHouse from './components/landlord/CreateHouse';
import Contract from './components/renter/Contract';
import LandlordHouses from './components/landlord/LandlordHouses';
import NewContract from './components/renter/NewContract';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/userLogin" element={<UserLogin />} />
          <Route path="/userSignup" element={<UserSignUp />} />
          <Route path="/landlordLogin" element={<LandlordLogin />} />
          <Route path="/landlordSignup" element={<LandlordSignUp />} />
          <Route path="/landlord/addListing" element={ <CreateHouse />} />
          <Route path='/landlord/houses' element={ <LandlordHouses />} /> 
          <Route path='/renter/newcontract' element={ <NewContract /> }/>
          <Route path='/renter/contract' element={ <Contract/> } />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
