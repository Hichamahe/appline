import image1 from '../images/about-1-light.png'
import image2 from '../images/about-2-light.png'
import { useTheme } from "./ThemeProvider";
import { motion } from 'framer-motion';

function About (){
    const { isDay } = useTheme();
return(
    <div className='flex flex-col mx-7 my-7' id='About'>
    <motion.div initial = {{opacity: 0, y:50}}
                whileInView ={{opacity: 1, y:0}}
                transition= {{ duration: 1 }} className=" my-6 flex xxs:flex-col xs:flex-col sm:flex-col md:flex-col">
    <div className="flex-1 flex items-end justify-center">
    <img src={image1} alt="heroLight" className="h-5/6"/>
    <div className="rounded-md bg-gradient-1 absolute -z-10 aspect-square w-96 h-60 flex-wrap xxs:w-80"></div>
    </div>
        <div className="flex-1 flex flex-col xxs:items-center xs:items-center sm:items-center md:items-center">
            <div className="flex flex-col space-y-7 my-9 xxs:items-center xs:items-center sm:items-center md:items-center">
                <h3 className=' text-primary font-bold text-2xl xxs:text-xl xs:text-xl sm:text-xl md:text-xl'>Track Audience Activities</h3>
                <h1 className={`${isDay ? 'text-dark' : 'text-white'} font-bold text-5xl xxs:text-xl xs:text-2xl sm:text-3xl md:text-4xl`}>Track Your Audience Activities</h1>
                <p  className="text-gray-500 xxs:text-center xs:text-center sm:text-center md:text-center">Schedule your posts for times when your audience is most active. Choose from our best-time predictions, or create your own publishing schedule.</p>
            </div>
            <div className="flex mb-5 items-center">
                <div className={`${isDay ? 'border-gray-500 text-dark' : 'border-dark text-light'} border-solid border  rounded-full flex items-center justify-center mr-3 w-16 h-16`}>1</div>
                <div className="flex flex-col justify-center">
                    <h3 className={`${isDay ? 'text-dark' : 'text-white'} text-lg font-bold`}>Lorem ipsum dolor.</h3>
                    <p className="text-gray-400">Ut ultricies lacus non fermentum ultrices..</p>
                </div>
            </div>
            <div className="flex">
                <div className={`${isDay ? 'border-gray-500 text-dark' : 'border-dark text-light'} border-solid border rounded-full flex items-center justify-center mr-3 w-16 h-16`}>
                    2
                </div>
                <div className="flex flex-col justify-center">
                    <h3 className={`${isDay ? 'text-dark' : 'text-white'} text-lg font-bold`}>Lorem ipsum dolor.</h3>
                    <p className="text-gray-400">Ut ultricies lacus non fermentum ultrices..</p>
                </div>
            </div>
        </div>
        </motion.div>
        <motion.div initial = {{opacity: 0, y:50}}
                whileInView ={{opacity: 1, y:0}}
                transition= {{ duration: 1 }} className='flex  xxs:flex-col-reverse xs:flex-col-reverse sm:flex-col-reverse md:flex-col-reverse'>
            <div className="flex-1 flex flex-col space-y-7 my-9 justify-center xxs:items-center xs:items-center sm:items-center md:items-center">
                <h3 className="text-primary font-bold text-2xl xxs:text-xl xs:text-xl sm:text-xl md:text-xl">Create Audience Reports</h3>
                <h1 className={`${isDay ? 'text-dark' : 'text-white'} font-bold text-5xl xxs:text-xl xs:text-2xl sm:text-3xl md:text-4xl`}>Know More About Your Audience.</h1>
                <p  className="text-gray-500 xxs:text-center xs:text-center sm:text-center md:text-center">Schedule your posts for times when your audience is most active. Choose from our best-time predictions, or create your own publishing schedule.</p>
                <button className='bg-indigo-400 text-white rounded-md px-6 py-2 w-fit'>Know More</button>
            </div>
            <div className="flex-1 flex justify-center items-end">
                <div className='rounded-xl bg-gradient-2 absolute -z-10 aspect-square w-96 h-60 flex-wrap xxs:max-w-[16rem]'></div>
                <img src={image2} alt="heroLight"/>
            </div> 
        </motion.div>
    </div>
)
}

export default About;
