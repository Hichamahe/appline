import { FaGooglePlay, FaApple } from "react-icons/fa"
import image from '../images/hero-light.png'
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";
function DownlodAppline() {
  const { isDay } = useTheme();
  return (
    <motion.div initial = {{opacity: 0, y:50}}
                whileInView ={{opacity: 1, y:0}}
                transition= {{ duration: 1 }} 
                className={`${ isDay ? 'bg-light' : 'bg-secondDark'} relative -z-20 flex  mx-5 rounded-md shadow-lg px-10 pt-14 my-10 md:flex-col xs:flex-col sm:flex-col xxs:flex-col md:space-y-7 xs:space-y-7 sm:space-y-7 xxs:space-y-7`}>
        <div className="flex-1 space-y-3  flex flex-col justify-center md:items-center xs:items-center sm:items-center ">
          <div className="space-y-7 md:text-center xs:text-center sm:text-center ">
            <h1 className={`${ isDay ? 'text-dark' : 'text-light'} text-3xl font-bold`}>Download Appline Now & Get started for free.</h1>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacus risus, molestie id condimentum ut, semper vitae.</p>
          </div>  
          <div className='flex items-center justify-center mx-[10px] flex-wrap lg:justify-start xl:justify-start 2xl:justify-start'>
            <div className="inline-block px-[10px]">
            <a className="inline-flex items-center py-[10px] prl-4 pr-5 bg-primary p-3 rounded-md text-white mb-5 cursor-pointer">
            <span className="mr-[10px]">
            <FaGooglePlay className="flex text-2xl"/>
            </span>
            <span className="text-left">
            <span className="block text-xs opacity-70">get it on</span>
            <span className="block text-sm font-medium">Google play</span>
            </span>
            </a>
            </div>
            <div className="inline-block px-[10px]">
            <a className={`${isDay ? 'bg-dark' : 'bg-light'} inline-flex items-center bg-dark py-[10px] prl-4 pr-5 rounded-md text-white mb-5 cursor-pointer p-3`}>
            <span className="mr-[10px]">
            <FaApple className={`${isDay ? ' text-light' : 'text-dark'} flex text-2xl`}/>
            </span>
            <span className="text-left">
            <span className={`${isDay ? 'opacity-70' : 'text-gray-500'} block text-xs`}>Download from</span>
            <span className={`${isDay ? ' text-light' : 'text-dark'} block text-sm font-medium `}>App store</span>
            </span>
            </a>
            </div>            
           </div>
        </div>
        <div className="flex-1 flex justify-center  z-10 mx-auto items-center ">
            <img src={image} alt="" className=" max-w-full mx-auto"/>
            <div className='absolute rounded-full bg-gradient-2  w-96 h-96 aspect-square xs:w-[370px] xs:h-[370px] xxs:w-60 xxs:h-60 -z-10'></div>
        </div>
    </motion.div>
  )
}

export default DownlodAppline