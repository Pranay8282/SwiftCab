// import logo from './logo.svg';
import './App.css';
import CabHome from './Home';
import GoCabLogin from './CabLogin';
// import Login from './Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Ride from './Ride';
import AirportRide from './CabAirportRide';
import OnAirport from './OnAirport'
import FromAirport from './FromAirportPick';
import Driver from './Driver';
import Requirement from './Requirement';
import Safety from './Safety';
import DriverSignup from './DriverSignup';
import SelectVehicle from './SelectVehicle';
import DriverDetails from './DriverData';
import BookRide from './BookRide';
import UploadDetails from './UploadData';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import Signup from './Signup';
import ProtectedRoute from './utils/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ConfirmationPage from './ConfirmationPage';
import MyTrips from './Trips';
import RideBooked from './Booke'
import VerifyPhone from './VerifyPhone';
import About from './About';

function App() {
  return (<>
    <Router>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<CabHome />}></Route>
          <Route path='/GoCabLogin' element={<GoCabLogin />}></Route>
          {/* <Route path='/login' element={<Login/>}></Route> */}
          <Route path='/ride' element={<Ride />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path="/AirportRide" element={<AirportRide />} />
          <Route path="/airport/:code" element={<OnAirport />} />
          <Route path="/airportPickup/:code" element={<FromAirport />} />
          <Route path='/Driver' element={<Driver />} />
          <Route path='/Requirement' element={<Requirement />} />
          <Route path='/Safety' element={<Safety />} />
          <Route path='/driver-sign' element={<DriverSignup />} />
          <Route path='/select-vehicle' element={<SelectVehicle />} />
          <Route path='/driver-details' element={<DriverDetails />} />
          <Route path='/book-ride' element={<BookRide />} />
          <Route path='/:documentType' element={<UploadDetails />} />
          <Route path='/dashboard' element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }/>
        <Route  path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home' exact element={<Home/>}/>
        <Route path='/confirmation' element={<ConfirmationPage/>}/>
        <Route path='/ride-booked' element={<RideBooked/>}/>
        <Route path='/mytrips' element={<MyTrips/>}/>
        <Route path='/verify-phone-number' element={<VerifyPhone/>}/>
        </Routes>
      </AuthProvider>
    </Router>
  </>);
}

export default App;
