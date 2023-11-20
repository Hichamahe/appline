import { useTheme } from "../ThemeProvider";
import Header from '../Header'
import Footer from '../Footer'
import Google from "./game.png";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";


function SignUp() {
  const {isDay} = useTheme();

  return (
    <>
    <Header />
    <div className="py-[150px]">
       
       <div className={`${isDay ? 'bg-gray-100' : 'bg-secondDark'} flex flex-col justify-center mx-52 md:mx-26 sm:mx-20 xs:mx-10 xxs:mx-5 shadow-md rounded-lg p-8 space-y-4`}>
        <div className={`${isDay ? 'bg-light' : 'bg-dark'} flex w-full rounded-lg p-2 space-x-1`}>
          <div className="relative group flex-1">
          <Link to="/SignIn"><button className={`${isDay ? 'text-dark' : 'text-light'} w-full group-hover:text-light group-hover:bg-primary  p-2 rounded-lg cursor-pointer`}>Sign In</button></Link>
          </div>
          <button  className="flex-1 text-light p-2 bg-primary rounded-lg cursor-pointer">Sign Up</button>
        </div>
        <div className="space-y-3 ">
          <h1 className={`${isDay ? 'text-dark' : 'text-light'} text-xl text-center`}>Create your account</h1>
          <p className="text-gray-500 text-center">It&apos;s totally free and super easy</p>
          <button className={`${isDay ? 'bg-light' : 'bg-dark border-strock-dark'} flex p-3 w-full rounded-md justify-center relative group space-x-2`}><img src={Google} alt="Google-play" className="" /><span className="text-gray-500 text-base font-bold group-hover:text-primary">Sign Up With Google</span></button>
        </div>
        <form className="flex flex-col space-y-3" action="#">
          <label className={`${isDay ? 'text-dark' : 'text-light'} text-sm`}>Full Email</label>
          <input type="text" name="name" placeholder="First And Last Name" className={`${isDay ? 'bg-light' : 'bg-dark'} p-3 rounded-md`}/>
          <label className={`${isDay ? 'text-dark' : 'text-light'} text-sm`}>Work Email</label>
          <input type="Email" name="Email" placeholder="Enter Your Email" className={`${isDay ? 'bg-light' : 'bg-dark'} p-3 rounded-md`}/>
          <label className={`${isDay ? 'text-dark' : 'text-light'} text-sm`}>Your Password</label>
          <input type="password" name="password" placeholder="Enter Your Password" className={`${isDay ? 'bg-light' : 'bg-dark'} p-3 rounded-md`} />
          <div className="flex">
              <input type="checkbox" name="pass" className="m-2 flex items-start" />
              <p className="text-gray-500">
              By creating account means you agree to the
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Terms and Conditions
              </a>
              , and our
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Privacy Policy
              </a>
              </p>
          </div>
          <div className="relative group">
          <button className="text-light bg-primary w-full rounded-lg p-3 group-hover:opacity-80">Sign Un</button>
          </div>
        </form>
       </div> 
       
    </div>
    <Footer />
    </>
  )
}

export default SignUp