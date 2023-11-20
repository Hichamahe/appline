import { FaUser  } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { FaInstalod } from 'react-icons/fa';
import { useTheme } from "./ThemeProvider";
import { motion } from 'framer-motion';
function HowItWork (){
  const { isDay } = useTheme();
return(
    
      <motion.div initial = {{opacity: 0, y:50}}
                whileInView ={{opacity: 1, y:0}}
                transition= {{ duration: 1 }}
                className="my-7 mx-7">
        <div className="flex flex-col items-center mx-20 xs:mx-10 xxs:mx-10 my-5 space-y-5" id='How It Works'>
            <h1 className={`${isDay ? 'text-dark' : 'text-white'} text-3xl text-center`}>How it works ?</h1>
            <p className="text-center text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.</p>
        </div>
        
            <div className={` ${isDay ? 'bg-light' : 'bg-secondDark'} grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1 gap-3 place-items-center my-5 rounded-md w-full p-4 pt-12`}>
              <div className={`rounded-lg flex flex-col items-center w-full space-y-5 p-6 `}>
              <div className='relation group'>
              <FaInstalod className={`${isDay ? 'bg-light' : 'bg-dark'} text-xl text-primary  rounded-lg w-20 h-20 p-5 group-hover:text-white group-hover:bg-primary transition duration-300 `}/>
              </div>
                <h1 className={`${isDay ? 'text-dark' : 'text-white'} text-bold text-xl`}>Install the App</h1>
                <p className="text-center text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
              </div>
              <div className={`rounded-lg flex flex-col items-center w-full space-y-5 p-6`}>
              <div className='relation group '>
              <FaUser className={`${isDay ? 'bg-light' : 'bg-dark'} text-xl text-primary  rounded-lg w-20 h-20 p-5 group-hover:text-white group-hover:bg-primary transition duration-300 `}/>
              </div>
                <h1 className={`${isDay ? 'text-dark' : 'text-white'} text-bold text-xl`}>Setup your profile</h1>
                <p className="text-center text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
              </div>
              <div className={`rounded-lg flex flex-col items-center w-fit  space-y-5 p-6 md:col-span-2`}>
              <div className='relation group'>
              <FaHeart className={`${isDay ? 'bg-light' : 'bg-dark'} text-xl text-primary  rounded-lg w-20 h-20 p-5 group-hover:text-white group-hover:bg-primary transition duration-300 place-items-center`}/>
              </div>
                <h1 className={`${isDay ? 'text-dark' : 'text-white'} text-bold text-xl`}>Enjoy the features!</h1>
                <p className="text-center text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
              </div>
        </div>
        </motion.div>
    
)
}

export default HowItWork;