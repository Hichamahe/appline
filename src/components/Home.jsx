import { faApple } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import image from '../images/hero-light.png'
import { useTheme } from "./ThemeProvider";
import { motion } from 'framer-motion';



function Home() {




    const { isDay } = useTheme();

  return (
    <motion.div initial = {{opacity: 0, y:50}}
                whileInView ={{opacity: 1, y:0}}
                transition= {{ duration: 1 }}
                className="pt-40 flex px-10 lg:flex-col md:flex-col sm:flex-col xs:flex-col xxs:flex-col xxs:space-y-20 xs:space-y-20 sm:space-y-20 md:space-y-20 lg:space-y-20">
    <div className="flex flex-col flex-1 w-full lg:items-center lg:justify-center md:items-center md:justify-center sm:items-center sm:justify-center">
    <div className="py-10">
    <p className={` ${isDay ? 'text-dark' : 'text-white'}  py-2 font-medium text-xl`}>Welcom To My World.</p>
    <h1 className={`${ isDay ? 'text-dark' : 'text-white'} py-2 text-4xl font-bold leading-tight`}>Template for <span className="bg-gradient-1 bg-clip-text text-transparent">App & Software Site.</span> </h1>
    <p className='py-2 text-gray-400'>Grow your site template for - App and Software sites Comes with all essential components.</p>
    </div>

    
    <div className="flex items-center flex-wrap xs:flex-col xs:space-y-6 xxs:flex-col xxs:space-y-6 ">

    <div className='relative group'>
    <a href="#" className={`${isDay ? 'bg-dark' : 'bg-light'} border-solid  px-7 py-5 rounded-md flex-1 mx-5 xxs:mx-0 group-hover:opacity-90 transition-colors duration-5000`}>
    <span className={`${isDay ? 'text-light' : 'text-dark'} border-r-2 border-white pr-5`}>
    Downlowd Now
    </span> 
    <FontAwesomeIcon icon={faApple} className={`${isDay ? 'text-light' : 'text-dark'} ml-5 text-2xl transition-colors duration-5000`}/> 
    </a>
    </div>

    <div className='relative group'>
    <a href="" className="flex flex-1 space-x-4 items-center group-hover:text-primary">
    <AiOutlinePlayCircle className={`${isDay ? 'text-gray-600' : 'text-light'} text-6xl transition-colors duration-5000 group-hover:text-primary`}/>
    <span className={`${isDay ? 'text-gray-600' : 'text-light'}  group-hover:text-primary`}>Watch Demo See how it works</span> 
    </a>
    </div>
    
    </div>
    </div>
    <div className="flex-1 flex items-center justify-center">
    <img src={image} alt="heroLight" />
    <div className="rounded-full bg-gradient-1 absolute -z-10 aspect-square w-96 h-96 xxs:w-80 xxs:h-80"></div>
    </div>
    </motion.div>
  )
}

export default Home