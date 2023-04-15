import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import  './home.css';
import Sidebar from '../../components/navbar/Sidebar';
// import vector1 from '../../assets/vector1.png';
import vector1 from '../../assets/export';
import { Link, useHistory } from 'react-router-dom';

function home() {
  return (
    <div className='App-container'>
    <div className='vector-image'>
        <img className = 'vector1' src= {vector1} alt = 'image1'/>
    </div>
    <div className='text-area'>
    <p>MENTAL HEALTH <span>IS JUST AS IMPORTANT AS</span> PHYSICAL HEALTH</p>
    </div>
    <Link to="/login">
    <button>Go to Login</button>
  </Link>
  </div>
  )
}

export default home
