import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import NavBar from './components/home/NavBar';
import Footer from './components/home/Footer';
import Home from './components/home/Home';
import UserLogin from './components/auth/UserLogin';
import UserSignUp from './components/auth/UserSignUp';
import LandlordLogin from './components/auth/LandlordLogin';
import LandlordSignUp from './components/auth/LandlordSignUp';
import CreateHouse from './components/landlord/CreateHouse';
import Contract from './components/renter/Contract';
import LandlordHouses from './components/landlord/LandlordHouses';
import NewContract from './components/renter/NewContract';
import MapState from './components/home/MapState';
import LikedHouses from './components/renter/LikedHouses';
import LandlordContracts from './components/landlord/LandlordContracts';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/userLogin" element={<UserLogin />} />
          <Route path="/userSignup" element={<UserSignUp />} />
          <Route path="/landlordLogin" element={<LandlordLogin />} />
          <Route path="/landlordSignup" element={<LandlordSignUp />} />
          <Route path="/landlord/addListing" element={<CreateHouse />} />
          <Route path='/landlord/houses' element={<LandlordHouses />} />
          <Route path='/renter/newcontract' element={<NewContract />} />
          <Route path='/renter/contract' element={<Contract />} />
          <Route path='/serach/map' element={<MapState />} />
          <Route path='/renter/likedhouses' element={<LikedHouses />} />
          <Route path='/landlord/contracts' element={<LandlordContracts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;