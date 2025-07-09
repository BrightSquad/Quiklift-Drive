// import './Header.css'
// import { GiHamburgerMenu } from "react-icons/gi";

  
// import React, { useState } from 'react';

//   const Header = () => {
//     const [menuOpen, setMenuOpen] = useState(false);
  
//     function getMenuStyles(menuOpen){
//       if(document.documentElement.clientWidth <= 800)
//         return{
//             right: !menuOpen && "-100%"
//         }
//     }
  
//     return (
//       <div className="h-wrapper">
//         <div className="h-container">
//           <div className="h-logo">QuickLift</div>
//           <div className="h-nav" style={getMenuStyles(menuOpen)}>
//             <span><a href="#hero-wrapper">Home</a></span>
//             <span><a href="#a-wrapper">About</a> </span>
//             <span ><a href="#f-wrapper">Contact</a></span>
//             <span >
//              <a href="https://play.google.com/"> <button className='downloadbtn'>
//               Download           
//               </button></a> 
//               </span>

//           </div>
//           <button className="hamburger" onClick={() => setMenuOpen(((m) => !m))}>
//               <span className="hamburger-icon"><GiHamburgerMenu /></span>
//             </button>
//         </div>
//       </div>
//     );
//   };
  
//   export default Header;


import './Header.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md"; // Add this import
import logo from '../assets/images/bigital logo.png';

import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function getMenuStyles(menuOpen){
    if(document.documentElement.clientWidth <= 800)
      return{
          right: !menuOpen && "-100%"
      }
  }

  return (
    <div className="h-wrapper">
      <div className="h-container">
        <div className="h-logo"> Bigital   </div>
        
        <div className="h-nav" style={getMenuStyles(menuOpen)}>
          <span><a href="#hero-wrapper">Home</a></span>
          <span><a href="#a-wrapper">About</a> </span>
          <span ><a href="#f-wrapper">Contact</a></span>
          <span >
           <a href="https://play.google.com/"> <button className='downloadbtn'>
            Get Started            
            </button></a> 
          </span>
        </div>
        <button className="hamburger" onClick={() => setMenuOpen(((m) => !m))}>
          {menuOpen ? (
            <MdClose className="hamburger-icon" /> // Render MdClose icon when menu is open
          ) : (
            <GiHamburgerMenu className="hamburger-icon" /> // Render GiHamburgerMenu icon when menu is closed
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;