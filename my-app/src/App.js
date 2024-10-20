import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import TheFooter from './components/TheFooter';
import TheNavbar from './components/TheNavbar';
import TheNavbarsub from './components/TheNavbarsub';
import AuthProvider from './context/AuthProvider';
import AllDepartments from './pages/AllDepartments';
import AllDoctors from './pages/AllDoctors';
import Appointment from './pages/Appointment';
import Contact from './pages/Contact';
import DoctorDetails from './pages/DoctorDetails';
import Error from './pages/Error';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Success from './pages/Success';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="bg-gray-700">
          <div className="container">
            <TheNavbarsub />
          </div>
        </div>
        <div className="bg-gray-800">
          <div className="container">
            <TheNavbar />
          </div>
        </div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/all-doctors" element={<AllDoctors />} />
          <Route path="/all-departments" element={<AllDepartments />} />
          <Route path="/doctor-details/:docId" element={<PrivateRoute><DoctorDetails /></PrivateRoute>} />
          <Route path="/appointment-success" element={<PrivateRoute><Success /></PrivateRoute>} />
          <Route path="/appointment" element={<PrivateRoute><Appointment /></PrivateRoute>} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <TheFooter />
      </Router>
    </AuthProvider>
  );
}

export default App;
