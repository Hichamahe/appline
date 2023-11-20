// import "./Header.css"
import logo from "../images/logo.svg"
import logoWhite from "../images/logo-white.svg"
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import Navbar from "./Navbar";
import MenuWrapper from "./MenuWrapper"
import { useTheme } from "./ThemeProvider";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";




     const listItems = ["Features", "About", "How It Works", "Support", "Pages"];
     const PageListe = ["Blog Details", "Error", "Sign In", "Sign Up"];
     


function Header() {
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [menuOpen, setMenuOpen] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      document.body.classList.remove('overflow-hidden');
    } else {
      document.body.classList.add('overflow-hidden');
    }
  };

  const { isDay, toggleTheme } = useTheme();
  
  return (
    <div className={` ${isDay ? 'bg-light/50' : ' bg-dark/90'} ${scrolled ? 'border-b-[1px] border-b-slate-900' : '' } flex justify-between px-2 h-20 items-center fixed w-full flex-wrap opacity-1 z-50 transition-colors duration-2000 scroll`}>

     <div className="cursor-pointer">
        { 
          isDay ? 
          <Link to="/"><img src={logo} alt="logo" className=""></img></Link> 
          :
          <Link to="/"><img src={logoWhite} alt="logo" className=""></img></Link>
        }
     </div>

    <Navbar className="flex " listItems={listItems} PageListe={PageListe} isDay={isDay}/>

     <div className="sign flex justify-between items-center xxs:text-center space-x-6">
     {isDay ? <FaSun className=" text-xl cursor-pointer text-black" onClick={toggleTheme}  /> : <FaMoon className={`${isDay ? 'text-dark' : 'text-white'} transition-colors duration-5000`} onClick={toggleTheme} />} 
      <Link to = "/SignIn" className={`${isDay ? 'text-dark' : 'text-white'} cursor-pointer xxs:hidden xs:hidden hover:text-primary`}>Sign In</Link>
      <Link to = "/SignUp">
      <button className="flex xxs:hidden xs:hidden border border-solid cursor-pointer
       border-maincolor
       rounded-lg
       text-white
       bg-indigo-400 px-6 py-2">Sign Up</button>
      </Link>
        <div className="text-dark" onClick={toggleMenu}>
          <FaBars size={24}  className={`${isDay ? 'text-dark' : 'text-light'} lg:hidden xl:hidden 2xl:hidden transition-colors duration-5000`}/> 
        </div>
      </div>
      {menuOpen && (
        <nav className={`${isDay ? 'bg-light' : 'bg-dark'} flex flex-col fixed top-0 left-0 h-screen w-screen items-center justify-center bg-opacity-95`}>
        <FaTimes size={24}  className={`${isDay ? 'text-dark' : 'text-light'} absolute top-[30px] right-[35px] text-2xl`} onClick={toggleMenu}/>
        <MenuWrapper listItems={listItems} PageListe={PageListe} isDay={isDay}/>
        </nav>
      )}
    
    </div>
  )
}


export default Header 