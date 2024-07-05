import { useRef } from "react";
import "./style.css";
import logo from '../../assets/logo.png';
import { FaTimes, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function NavBar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="px-8 py-5 h-22" >
      <h3><img className="h-20" src={logo} alt="Logo" /></h3>
      <nav ref={navRef}>
        <NavLink to="/" className={({ isActive }) => `mx-4 font-poppins text-xl text-[#eee] ${isActive ? "border-b-2 border-red-700 text-black" : ""}`}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => `mx-4 font-poppins text-xl text-[#eee] ${isActive ? "border-b-2 border-red-700 text-black" : ""}`}>ABOUT US</NavLink>
        <NavLink to="/destination" className={({ isActive }) => `mx-4 font-poppins text-xl text-[#eee] ${isActive ? "border-b-2 border-red-700 text-black" : ""}`}>BEST DESTINATION</NavLink>
        <NavLink to="/contact-us" className={({ isActive }) => `mx-4 font-poppins text-xl text-[#eee] ${isActive ? "border-b-2 border-red-700 text-black" : ""}`}>CONTACT US</NavLink>
        <button
          className="nav-btn nav-close-btn"
          onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button
        className="nav-btn"
        onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default NavBar;
