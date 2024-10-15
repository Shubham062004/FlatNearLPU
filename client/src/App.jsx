import {Routes, Route } from 'react-router-dom'; 
import Homepage from './Components/Homepage/Homepage';
import Dashboard from './Components/Dashboard/Dashboard';
import ComparePage from './Components/ComparePage/ComparePage';
import SignUpPage from './Components/Auth/SignUp';
import LoginPage from './Components/Auth/Login';
import FlatDetailsForm from './Components/FlatDetailsForm/FlatDetailsForm';
import FlatDetails from './Components/FlatDetailsForm/FlatDetails';

function App() {
  return (
     <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/add-flat" element={<FlatDetailsForm />} />
        <Route path="/flat-details" element={<FlatDetails />} />
      </Routes>
     </>
  )
}

export default App;
