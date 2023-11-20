import General from "./components/General"
import BlogDetails from './components/pages/BlogDetails'
import Error from './components/pages/Error'
import SignIn from './components/pages/SignIn'
import SignUp from './components/pages/SignUp'
import { useState, useEffect } from 'react';
import { FaArrowUp  } from "react-icons/fa"
import { ThemeProvider } from "./components/ThemeProvider"
import {Routes, Route, BrowserRouter} from 'react-router-dom';


function App() {
    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Observer le scroll de la page
    const onScroll = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Attacher l'événement de scroll à l'objet window
    window.addEventListener('scroll', onScroll);

    // Nettoyer l'événement lors du démontage du composant
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Pour un retour en haut en douceur
    });
  };
  return (
    <div>  
    <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<General />} />
        <Route path="/BlogDetails" element={<BlogDetails />} />
        <Route path="/Error" element={<Error />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter> 
        <button
               onClick={scrollToTop}
               className={`${isVisible  ? 'block' : 'hidden'} fixed bottom-[20px] right-[20px]  `}>
          <FaArrowUp  className="bg-primary text-white p-1 text-3xl rounded-md"/>
        </button>

    </ThemeProvider>

    </div>
  )
}

export default App
