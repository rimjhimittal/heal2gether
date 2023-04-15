// import React from 'react';
// import { Link} from "react-router-dom";
// import  Logo from '../../assets/Logo.png';
// import './Navbar.css';

// export default function Navbar() {
//   return (
//     <div className='navbar'>
//         <div className='logo'>
//             <img src= {Logo} alt= 'heal2gether-logo' />
//         </div>
//         <div className='pages'><ul>
//                 <a href='../../pages/home/home'>HOME</a>
//                 <a href='../../pages/forums/forums.js'>FORUMS</a>
//                 <a href='../../pages/events/events.js'>RESOURCES</a>
//                 <a href='../../pages/events/events.js'>EVENTS</a>
//                 <a href='/'>ONLINE THERAPY</a>
//                 </ul>
//         </div>
        
//     </div>
//   )
// }
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={Logo} alt='heal2gether-logo' />
      </div>
      <div className='pages'>
        <ul>
          <li>
            <Link to='/home'>HOME</Link>
          </li>
          <li>
            <Link to='/forums'>FORUMS</Link>
          </li>
          <li>
            <Link to='/resources'>RESOURCES</Link>
          </li>
          <li>
            <Link to='/events'>EVENTS</Link>
          </li>
          <li>
            <Link to='/online-therapy'>ONLINE THERAPY</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

