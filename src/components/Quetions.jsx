import { useState, useEffect } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useTheme } from "./ThemeProvider";
import { motion } from 'framer-motion';
function Quetions() {
  const { isDay } = useTheme();

  const [afficherTexte, setAfficherTexte] = useState(false);
  const toggleTexte = () => {
    setAfficherTexte(!afficherTexte);
  };

  const [afficherTexteTwo, setAfficherTexteTwo] = useState(false);
  const toggleTexteTwo = () => {
    setAfficherTexteTwo(!afficherTexteTwo);
  };

  const [afficherTexteTree, setAfficherTexteTree] = useState(false);
  const toggleTexteTree = () => {
    setAfficherTexteTree(!afficherTexteTree);
  };

  const [afficherTexteFor, setAfficherTexteFor] = useState(false);
  const toggleTexteFor = () => {
    setAfficherTexteFor(!afficherTexteFor);
  };

  useEffect(() => {
    let timeout;
    if (afficherTexte) {
      // Show the text for 5000 milliseconds (5 seconds)
      timeout = setTimeout(() => {
        setAfficherTexte(false);
      }, 5000);
    }

    return () => clearTimeout(timeout);
  }, [afficherTexte]);
  
  return (
    <motion.div initial = {{opacity: 0, y:50}}
                whileInView ={{opacity: 1, y:0}}
                transition= {{ duration: 1 }} 
                className="my-10">
       <div className="flex flex-col items-center space-y-2">
          <h1 className={`${isDay ? 'text-dark' : 'text-light'} font-bold text-2xl`}>Frequently Asked Questions</h1>
          <p className="text-center text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.</p>
       </div>

       <div className=''></div>

       <div className={`${isDay ? 'bg-light' : 'bg-secondDark'} flex flex-col items-center space-y-5 mx-48 rounded-md shadow-lg my-10 md:mx-20 sm:mx-20 xs:mx-10 xxs:mx-5`}>
          <div className='flex justify-between w-full p-5 border-b-[1px] transition-all duration-500 ease-in-out' onClick={toggleTexte}>
            <p className={`${isDay ? 'text-dark' : 'text-white'} cursor-pointer `}>Lorem ipsum dolor sit amet, consectetur</p>
            {afficherTexte ? <FaMinus className={`${isDay ? 'text-dark' : 'text-white'} cursor-pointer text-sm`}/> : <FaPlus className={`${isDay ? 'text-dark' : 'text-white'} cursor-pointer text-sm`}/>}
          </div>
          {afficherTexte && <p className='p-5 text-gray-500'>We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities, digital experiences. Praesent vel nibh a tellus dictum gravida sed tempor nunc</p>}

          <div className='flex justify-between w-full p-5 border-b-[1px] transition-all duration-500 ease-in-out' onClick={toggleTexteTwo}>
            <p className={`${isDay ? 'text-dark' : 'text-white'} cursor-pointer`}>Lorem ipsum dolor sit amet, consectetur</p>
            {afficherTexteTwo ? <FaMinus className={`${isDay ? 'text-dark' : 'text-white'} cursor-pointer text-sm`}/> : <FaPlus className={`${isDay ? 'text-dark' : 'text-white'} cursor-pointer text-sm`} />}
          </div>
           {afficherTexteTwo && <p className='p-5 text-gray-500 '>We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities, digital experiences. Praesent vel nibh a tellus dictum gravida sed tempor nunc</p>}

          <div className='flex justify-between w-full p-5 border-b-[1px] transition-all duration-500 ease-in-out' onClick={toggleTexteTree}>
            <p className={`${isDay ? 'text-dark' : 'text-white'} cursor-pointer`}>Lorem ipsum dolor sit amet, consectetur</p>
            {afficherTexteTree ? <FaMinus className={`${isDay ? 'text-dark' : 'text-white'} cursor-pointer text-sm`}/> : <FaPlus className={`${isDay ? 'text-dark' : 'text-white'} cursor-pointer text-sm`} />}
          </div>
           {afficherTexteTree && <p className='p-5 text-gray-500 '>We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities, digital experiences. Praesent vel nibh a tellus dictum gravida sed tempor nunc</p>}

          <div className='flex justify-between w-full p-5 border-b-[1px] transition-all duration-500 ease-in-out' onClick={toggleTexteFor}>
            <p className={`${isDay ? 'text-dark' : 'text-white'} cursor-pointer`}>Lorem ipsum dolor sit amet, consectetur</p>
            {afficherTexteFor ? <FaMinus className={`${isDay ? 'text-dark' : 'text-white'} cursor-pointer text-sm`}/> : <FaPlus className={`${isDay ? 'text-dark' : 'text-white'} cursor-pointer text-sm`} />}
          </div>
           {afficherTexteFor && <p className='p-5 text-gray-500 '>We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities, digital experiences. Praesent vel nibh a tellus dictum gravida sed tempor nunc</p>}
       </div>

    </motion.div>

  )
}

export default Quetions