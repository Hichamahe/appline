import { useTheme } from "../ThemeProvider";
import Header from '../Header'
import Footer from '../Footer'
import Google from "./game.png";
import { Link } from "react-router-dom";


function SignIn() {
  const {isDay} = useTheme();

  return (
    <>
    <Header />
    <div className="py-[150px]">
       
       <div className={`${isDay ? 'bg-gray-100' : 'bg-secondDark'} flex flex-col justify-center mx-52 md:mx-26 sm:mx-20 xs:mx-10 xxs:mx-5 shadow-md rounded-lg p-8 space-y-4`}>
        <div className={`${isDay ? 'bg-light' : 'bg-dark'} flex w-full rounded-lg p-2 space-x-1`}>
          <button className={`text-light flex-1 p-2 bg-primary rounded-lg cursor-pointer`}>Sign In</button>
          <div className="relative group flex-1">
            <Link to="/SignUp"> <button  className={`${isDay ? 'text-dark' : 'text-light'} w-full p-2 rounded-lg group-hover:text-light group-hover:bg-primary cursor-pointer ml-0`}>Sign Up</button></Link>
          </div>
        </div>
        <div className="space-y-3 ">
          <h1 className={`${isDay ? 'text-dark' : 'text-light'} text-xl text-center`}>Sign in to your account</h1>
          <p className="text-gray-500 text-center">Login to your account for a faster checkout.</p>
          <button className={`${isDay ? 'bg-light' : 'bg-dark border-strock-dark'} flex p-3 w-full rounded-md justify-center relative group space-x-2`}><img src={Google} alt="Google-play" className="" /><span className="text-gray-500 text-base font-bold group-hover:text-primary">Sign In With Google</span></button>
        </div>
        <form className="flex flex-col space-y-3" action="#">
          <label className={`${isDay ? 'text-dark' : 'text-light'} text-sm`}>Your Email</label>
          <input type="Email" name="password" placeholder="Enter Your Email" className={`${isDay ? 'bg-light' : 'bg-dark'} p-3 rounded-md`}/>
          <label className={`${isDay ? 'text-dark' : 'text-light'} text-sm`}>Your Password</label>
          <input type="password" name="password" placeholder="Enter Your Password" className={`${isDay ? 'bg-light' : 'bg-dark'} p-3 rounded-md`} />
          <div className="flex justify-between flex-wrap">
            <label className="">
              <input type="checkbox" name="pass" className="m-2" />
              <span className="text-gray-500">Keep Me Signed In</span>
            </label> 
            <div className="relative group">
               <a href="#" className="text-primary group-hover:decoration-solid ">Forgot Your Password?</a>
            </div>   
          </div>
          <div className="relative group">
          <button className="text-light bg-primary w-full rounded-lg p-3 group-hover:opacity-80">Sign In</button>
          </div>
        </form>
       </div> 
       
    </div>
    <Footer />
    </>
  )
}

export default SignIn