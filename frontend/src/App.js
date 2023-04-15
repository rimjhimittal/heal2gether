import './App.css';
import { Route, Router, Routes } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
// import home from './pages/home/home'
import Home from './pages/home/home'
import Forums from './pages/forums/forums';
import Events from './pages/events/events.js';
import Login from './pages/loginpage/login';
// import OnlineTherapy from './pages/OnlineTherapy';

function App() {
  return (
    <div className="App"><div className='App-header'>
       <Navbar /> 
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/forums" element={<Forums/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
    </div>
  );
}

export default App;