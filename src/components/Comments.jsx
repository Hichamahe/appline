import { FaStar } from "react-icons/fa"
import image1 from '../images/avatar-03.png';
import image2 from '../images/avatar-04.png';
import image3 from '../images/avatar-05.png';
import image4 from '../images/avatar-06.png';
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";

function Comments() {
    const { isDay } = useTheme();

    const comments = [
        {comm:"Lorem ipsum dolor sit amet, consect adipiscing elit. Pellentesque dignissim nisi a odio laoreet luctus. Ut sed diam, quis bibendum ex.",
        img:image1,
        name:"Hicham Ahandam",
        job:"Front End Developer",
        points:"5.0"
        },
        {comm:"Lorem ipsum dolor sit amet, consect adipiscing elit. Pellentesque dignissim nisi a odio laoreet luctus. Ut sed diam, quis bibendum ex.",
        img:image2,
        name:"Musharof Chowdhury",
        job:"Web Entrepreneur",
        points:"5.0"
        },
        {comm:"Lorem ipsum dolor sit amet, consect adipiscing elit. Pellentesque dignissim nisi a odio laoreet luctus. Ut sed diam, quis bibendum ex.",
        img:image3,
        name:"Naimur Rahman",
        job:"Product Designer",
        points:"5.0"
        },
        {comm:"Lorem ipsum dolor sit amet, consect adipiscing elit. Pellentesque dignissim nisi a odio laoreet luctus. Ut sed diam, quis bibendum ex.",
        img:image4,
        name:"Devid Miller",
        job:"App Developer",
        points:"4.0"
        }
    ]
  return (
    <motion.div initial = {{opacity: 0, y:50}}
                whileInView ={{opacity: 1, y:0}}
                transition= {{ duration: 1 }}
                className="my-10 mx-3">
       <div className="flex flex-col items-center space-y-5 my-5">
          <h1 className={`${isDay ? 'text-dark' : 'text-white'} text-2xl font-bold`}>What Client&apos;s Say</h1>
          <p className="text-center text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.</p>
       </div>
       <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-3 mx-2">
       {
        comments.map((item, index)=> (
            <div key={index} className={`${isDay ? 'bg-light' : 'bg-secondDark'} flex flex-col shadow-md 
                      rounded-md md:mx-10 sm:mx-10 xs:mx-10 xxs:mx-10`}>
               <div className="border-b-[1px]">
                  <p className="p-5 text-gray-500">{item.comm}</p>
               </div>
               <div className="p-5 space-y-3 md:flex sm:flex lg:block xl:block 2xl:block
                md:justify-between sm:justify-between xs:justify-between xxs:justify-between">
                <div className="flex space-x-3">
                  <img src={item.img} alt="" className="h-[50px] w-[50px] rounded-full" />
                  <div className="flex flex-col">
                     <span className={`${isDay ? 'text-dark' : 'text-white'} text-sm`}>{item.name}</span>
                     <span className="text-xs text-gray-500">{item.job}</span>
                  </div>
                </div>  
                  <div className="flex">
                    <span className={`${isDay ? 'text-dark' : 'text-white'} font-bold`}>{item.points}</span>
                    <div className="flex">
                    {
                        [...Array(Math.floor(item.points))].map((star, starIndex) => {
                            return (
                                <FaStar  key={starIndex} className=" text-yellow-500 mx-1" />
                                )
                            }
                        )
                    }
                    </div>
                  </div>
               </div>
            </div>
        )
        )
       }
       </div>
    </motion.div>
  )
}

export default Comments