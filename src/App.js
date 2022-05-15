
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/Pages/Shared/NavBar/NavBar';
import Login from './Components/Auth/Login/Login';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Appointment from './Components/Pages/Appointment/Appointment';
import Reviews from './Components/Pages/Reviews/Reviews';
import ContactUs from './Components/Pages/ContactUs/ContactUs';
import RequireAuth from './Components/Auth/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/Appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        }></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/Reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/Contact' element={<ContactUs></ContactUs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
