import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"
import { useTheme } from "./ThemeProvider"

function Footer() {
  const { isDay } = useTheme();
  return (
    <>
    <div className="flex flex-wrap my-5">
      <div className="flex-grow space-y-3 flex flex-col items-center ">
        <h1 className={`text-xl font-bold ${isDay ? 'text-dark' : 'text-light'}`}>Home</h1>
        <ul className="space-y-2 ">

          <li className="cursor-pointer relative group"><a className="text-gray-500 group-hover:text-primary">Product</a></li>
          <li className="cursor-pointer relative group "><a className="text-gray-500 group-hover:text-primary">Pricing</a></li>
          <li className="cursor-pointer relative group "><a className="text-gray-500 group-hover:text-primary">Business</a></li>
          <li className="cursor-pointer relative group "><a className="text-gray-500 group-hover:text-primary">Enterprise</a></li>
        </ul>
      </div>
      <div className="flex-grow space-y-3 flex flex-col items-center">
        <h1 className={`text-xl font-bold ${isDay ? 'text-dark' : 'text-light'}`}>About Us</h1>
        <ul className="space-y-2">
          <li className="cursor-pointer relative group "><a className="text-gray-500 group-hover:text-primary">Company</a></li>
          <li className="cursor-pointer relative group "><a className="text-gray-500 group-hover:text-primary">Leadership</a></li>
          <li className="cursor-pointer relative group "><a className="text-gray-500 group-hover:text-primary">Careers</a></li>
          <li className="cursor-pointer relative group "><a className="text-gray-500 group-hover:text-primary">Diversity</a></li>
        </ul>
      </div>
      <div className="flex-grow space-y-3 flex flex-col items-center">
        <h1 className={`text-xl font-bold ${isDay ? 'text-dark' : 'text-light'}`}>Resources</h1>
        <ul className="space-y-2">
          <li className="cursor-pointer relative group "><a className="text-gray-500 group-hover:text-primary">Andy Guide</a></li>
          <li className="cursor-pointer relative group "><a className="text-gray-500 group-hover:text-primary">Forum</a></li>
          <li className="cursor-pointer relative group "><a className="text-gray-500 group-hover:text-primary">Support</a></li>
          <li className="cursor-pointer relative group "><a className="text-gray-500 group-hover:text-primary">App Directory</a></li>
        </ul>
      </div>
      <div className="flex-grow space-y-3 flex flex-col items-center">
        <h1 className={`text-xl font-bold ${isDay ? 'text-dark' : 'text-light'}`}>Tutorial</h1>
        <ul className="space-y-2">
          <li className="cursor-pointer relative group "><a className="text-gray-500 group-hover:text-primary">10 Leadership Styles</a></li>
          <li className="cursor-pointer relative group "><a className="text-gray-500 group-hover:text-primary">Executive Summary Tips</a></li>
          <li className="cursor-pointer relative group "><a className="text-gray-500 group-hover:text-primary">Prevent Team Burnout</a></li>
          <li className="cursor-pointer relative group "><a className="text-gray-500 group-hover:text-primary">What are OKRs?</a></li>
        </ul>
      </div>                  
    </div>
    <div className="bg-primary flex flex-wrap">
       <div className="flex-grow py-8 flex justify-center">
        <p className="text-white">© 2025 Appline. All rights reserved</p>
       </div>
       <div className="flex flex-grow space-x-4 py-8 justify-center">
       <div className="relative group"><FaFacebook className="text-white opacity-70 group-hover:opacity-100 cursor-pointer"/></div>
       <div className="relative group"><FaTwitter className="text-white opacity-70 group-hover:opacity-100 cursor-pointer"/></div>
       <div className="relative group"><FaInstagram className="text-white opacity-70 group-hover:opacity-100 cursor-pointer"/></div>
       <div className="relative group"><FaLinkedin className="text-white opacity-70 group-hover:opacity-100 cursor-pointer"/></div>
       </div>
       <div className="flex-grow space-x-7 py-8 flex justify-center">
         <a className="text-white">Privacy Policy</a>
         <a className="text-white">Terms and conditions</a>
       </div>
    </div>
    </>
  )
}

export default Footer