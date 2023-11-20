import { FaAppStore, FaDatabase, FaTachometerAlt, FaCog, FaUpload,FaSellsy   } from 'react-icons/fa'
import { useTheme } from "./ThemeProvider";
import { motion } from 'framer-motion';


function Features() {
       const { isDay } = useTheme();
        
             
       

  return (
    <motion.div initial = {{opacity: 0, y:50}}
                whileInView ={{opacity: 1, y:0}}
                transition= {{ duration: 1 }}
                className="flex flex-col mx-7 my-20 " id='Features'>
      <div className="flex flex-col text-center space-y-5 mb-6">
         <h1 className={`${isDay ? 'text-dark' : 'text-white'} text-4xl font-bold`}>Amazing features for to make</h1>
         <h1 className={`${isDay ? 'text-dark' : 'text-white'} text-4xl font-bold mb-5`}>your work easier</h1>
         <p className="px-10 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.</p>
      </div>
      <div className={`${isDay ? 'bg-light' : 'bg-secondDark'} grid grid-cols-auto-fill-minmax gap-1 rounded-md flex-wrap shadow-md`}>
        <div className="flex flex-col my-10 items-center justify-center relative group flex-wrap xxs:max-w-[250px]">
           <FaAppStore  className={`${isDay ? 'bg-light' : 'bg-dark'} text-primary text-7xl p-3 flex  rounded-md group-hover:text-white group-hover:bg-primary`}/>
           <h1 className={`${isDay ? 'text-dark' : 'text-white'} flex items-center justify-center text-lg font-bold py-7`}>Crafted for App Landing</h1>
           <p className="text-center text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
        </div>
        
        <div className="flex flex-col my-10 items-center justify-center relative group xxs:w-[250px]">
        <FaDatabase className={`${isDay ? 'bg-light' : 'bg-dark'} text-primary text-7xl p-3  flex rounded-md group-hover:text-white group-hover:bg-primary`}/>
           <h1 className={`${isDay ? 'text-dark' : 'text-white'} flex items-center justify-center text-lg font-bold py-7`}>High-quality Design</h1>
           <p className="text-center text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
        </div>

        <div className="flex flex-col my-10 items-center justify-center relative group xxs:w-[250px]">
           <FaSellsy className={`${isDay ? 'bg-light' : 'bg-dark'} text-primary  text-7xl p-3  flex rounded-md group-hover:text-white group-hover:bg-primary`}/>
           <h1 className={`${isDay ? 'text-dark' : 'text-white'} flex items-center justify-center text-lg font-bold py-7`}>All Essential Sections</h1>
           <p className="text-center text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
        </div>

        <div className="flex flex-col my-10 items-center justify-center relative group xxs:w-[250px]">
           <FaTachometerAlt className={`${isDay ? 'bg-light' : 'bg-dark'} text-primary  text-7xl p-3  flex rounded-md group-hover:text-white group-hover:bg-primary`}/>
           <h1 className={`${isDay ? 'text-dark' : 'text-white'} flex items-center justify-center text-lg font-bold py-7`}>Speed Optimized</h1>
           <p className="text-center text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
        </div>
        <div className="flex flex-col my-10 items-center justify-center relative group xxs:w-[250px]">
           <FaCog  className={`${isDay ? 'bg-light' : 'bg-dark'} text-primary  text-7xl p-3  flex rounded-md group-hover:text-white group-hover:bg-primary`}/>
           <h1 className={`${isDay ? 'text-dark' : 'text-white'} flex items-center justify-center text-lg font-bold py-7`}>Fully Customizable</h1>
           <p className="text-center text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
        </div>

        <div className="flex flex-col my-10 items-center justify-center relative group xxs:w-[250px]">
           <FaUpload className={`${isDay ? 'bg-light' : 'bg-dark'} text-primary  text-7xl p-3  flex rounded-md group-hover:text-white group-hover:bg-primary`}/>
           <h1 className={`${isDay ? 'text-dark' : 'text-white'} flex items-center justify-center text-lg font-bold py-7`}>Regular Updates</h1>
           <p className="text-center text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
        </div>
    </div>
    </motion.div>


  )
}

export default Features