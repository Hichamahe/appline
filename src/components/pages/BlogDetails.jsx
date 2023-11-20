import Header from "../Header"
import image from "./blog-detail.jpg"
import Footer from "../Footer"
import avatar from "./avatar-04.png"
import { FaCalendar  } from "react-icons/fa"
import { FaComment } from "react-icons/fa"
import { FaEye } from "react-icons/fa"
import { useTheme } from "../ThemeProvider";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"


function BlogDetails() {
   const { isDay } = useTheme();
  return (
    <div className="">
    <Header />
    <div className="pt-[150px] px-5 lg:w-max-[1250px]">
        <div className="">
            <img src={image} alt="" className="object-cover object-conter w-full" />
        </div>
        <div className="">
          <h1 className={`${isDay ? 'text-dark' : 'text-light'} text-bold text-3xl text-center my-8`}>50+ High rated online banking mobile apps on playstore.</h1>
          <div className="flex justify-center mb-8 flex-wrap">
            <div className="flex">
              <img src={avatar} alt="" className="rounded-full w-10 h-10" />
              <p className="text-gray-500 pt-2 px-2">By Hicham Ahandam</p>
            </div>
            <div className="flex px-3 pt-2">
                <FaCalendar className="text-gray-500 w-6 h-6" />
                <span className="text-gray-500  px-2">12 Jan 2025</span>
            </div>
            <div className="flex px-3 pt-2">
                <FaComment className="text-gray-500 w-6 h-6" />
                <span className="text-gray-500  px-2">50</span>
            </div>   
            <div className="flex px-3 pt-2">
                <FaEye className="text-gray-500 w-6 h-6" />
                <span className="text-gray-500  px-2">343</span>
            </div>          
          </div>
          <div className="space-y-8 mx-24 md:mx-16 ms:mx-16 xs:mx-10 xxs:mx-0">
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum. Neque sodales ut etiam sit amet. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Quam pellentesque nec nam aliquam sem et tortor consequat. Pellentesque adipiscing commodo elit at imperdiet.
            </p>
            <p className="text-gray-500">
             Semper auctor neque vitae tempus quam pellentesque nec. Amet dictum sit amet justo donec enim diam. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Odio pellentesque diam volutpat commodo sed.
            </p>
            <h1 className={`${isDay ? 'text-dark' : 'text-light'} text-bold text-2xl`}>
            Online banking mobile lists
            </h1>
            <p className="text-gray-500">
             consectetur adipiscing elit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat mattis vulputate cupidatat.
            </p>
            <ul className="list-disc space-y-3 text-gray-500 ml-4">
              <li className="">Consectetur adipiscing elit in voluptate velit.</li>
              <li className="">Mattis vulputate cupidatat.</li>
              <li className="">Vulputate enim nulla aliquet porttitor odio pellentesque</li>
              <li className="">Ligula ullamcorper malesuada proin</li>
            </ul>
            <blockquote className={`${isDay ? 'bg-gray-200' : 'bg-secondDark text-light'} relative`}>
            <p className={`${isDay ? ' text-dark' : 'text-light'} px-16 py-10`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt utionals labore et dolore magna aliqua. Quis lobortis scelerisque fermentum, The Neque ut etiam sit amet.</p>
            <svg width="73" height="74" viewBox="0 0 73 74" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 right-0">
            <circle cx="56.5" cy="17.5" r="49.5" stroke="url(#paint0_linear_57_160)" strokeWidth="14"></circle>
            <defs>
            <linearGradient id="paint0_linear_57_160" x1="0" y1="-39" x2="133.592" y2="38.5086" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF8FE8"></stop>
            <stop offset="1" stopColor="#FFC960"></stop>
            </linearGradient>
            </defs>
            </svg>    
            <svg width="65" height="68" viewBox="0 0 65 68" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 left-0">
            <path d="M43.5018 91.5018C24.1708 110.833 -7.17083 110.833 -26.5018 91.5018C-45.8327 72.1708 -45.8327 40.8292 -26.5018 21.4982C-7.17083 2.16726 24.1708 2.16726 43.5018 21.4982C62.8327 40.8292 62.8327 72.1708 43.5018 91.5018Z" stroke="url(#paint0_linear_58_157)" strokeWidth="14"></path>
            <defs>
            <linearGradient id="paint0_linear_58_157" x1="-61.5836" y1="113" x2="78.5765" y2="15.4155" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8EA5FE"></stop>
            <stop offset="0.541667" stopColor="#BEB3FD"></stop>
            <stop offset="1" stopColor="#90D1FF"></stop>
            </linearGradient>
            </defs>
            </svg>       
            </blockquote>
            <p className="text-gray-500">consectetur adipiscing elit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat mattis vulputate cupidatat.</p>
            <div className="flex justify-between flex-wrap space-y-2">
              <div className="flex flex-col space-y-2">
                 <div className="">
                    <span className="text-gray-500">Popular Tags :</span>
                 </div>
                 <div className="flex flex-wrap">
                 <div className="relative group"><button className={`${isDay ? 'bg-gray-100' : 'bg-secondDark'} m-3 px-5 py-2 rounded-lg group-hover:bg-primary cursor-pointer`}><span className={`${isDay ? 'text-dark' : 'text-light'} text-gray-500 group-hover:text-light`}>Design</span></button></div>
                 <div className="relative group"><button className={`${isDay ? 'bg-gray-100' : 'bg-secondDark'} m-3 px-5 py-2 rounded-lg group-hover:bg-primary cursor-pointer`}><span className={`${isDay ? 'text-dark' : 'text-light'} text-gray-500 group-hover:text-light`}>Developement</span></button></div>
                 <div className="relative group"><button className={`${isDay ? 'bg-gray-100' : 'bg-secondDark'} m-3 px-5 py-2 rounded-lg group-hover:bg-primary cursor-pointer`}><span className={`${isDay ? 'text-dark' : 'text-light'} text-gray-500 group-hover:text-light`}>UI/UX</span></button></div>
                 </div>
              </div>
              <div className="flex flex-col space-y-2">
              <div className="flex justify-end sm:justify-start xs:justify-start xxs:justify-start">
                  <span className="text-gray-500">Share This Post :</span>
                </div>
                <div className="flex flex-wrap">
                <div className="relative group"><FaFacebook className={`${isDay ? 'text-gray-500 bg-gray-100' : 'text-light bg-secondDark '} rounded-lg text-5xl  p-3 group-hover:bg-primary group-hover:text-light`}/></div>
                <div className="relative group"><FaTwitter className={`${isDay ? 'text-gray-500 bg-gray-100' : 'text-light bg-secondDark '} rounded-lg text-5xl ml-3 p-3 group-hover:bg-primary group-hover:text-light`}/></div>
                <div className="relative group"><FaInstagram className={`${isDay ? 'text-gray-500 bg-gray-100' : 'text-light bg-secondDark '} rounded-lg text-5xl ml-3 p-3 group-hover:bg-primary group-hover:text-light`}/></div>
                <div className="relative group"><FaLinkedin className={`${isDay ? 'text-gray-500 bg-gray-100' : 'text-light bg-secondDark '} rounded-lg text-5xl ml-3 p-3 group-hover:bg-primary group-hover:text-light`}/></div>
                </div>
              </div>
            </div>
          </div>
        </div>  
    </div>
        <Footer />  
    </div>
  )
}

export default BlogDetails