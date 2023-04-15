import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import home from './pages/home/home'
import Forums from './pages/forums/forums';
import events from './pages/events/events.js';
// import OnlineTherapy from './pages/OnlineTherapy';

function App() {
  return (
    <div className="App"><div className='App-header'>
      <Navbar />
       <Router>
      <Routes>
        <Route exact path="/home" element={home} />
        <Route path="/forums" element={Forums} />
        <Route path="/events" element={events} />
      </Routes>
  </Router> 
    </div>
    </div>
  );
}

export default App;
