import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";

function Contact() {
   const { isDay } = useTheme();
  return (
    <motion.div initial = {{opacity: 0, y:50}}
                whileInView ={{opacity: 1, y:0}}
                transition= {{ duration: 1 }} className="">
      <div className="flex flex-col items-center p-5 space-y-3" id="Support">
        <h1 className="text-2xl font-bold text-dark">Let&apos;s Stay Connected</h1>
        <p className="text-center text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.</p>
      </div>
      <div className={`${isDay ? 'bg-slate-200' : 'bg-secondDark'} m-5 p-2 rounded-md shadow-lg`}>
      <form action="" method="post" name="contactForm" id="contactForm" data-netlify="true" className="flex flex-wrap justify-between items-center  m-5 p-2">
      <input type="text" id="Name" name="Name"  autoComplete="Name" placeholder="Enter Your Name" required className="p-3 rounded-md w-[45%] xs:w-[100%] xxs:w-[100%] m-3"/>
      <input type="text" id="Comapy" name="Comapy" autoComplete="Comapy" placeholder="Comapy (optionel)" required className="p-3 rounded-md w-[45%] xs:w-[100%] xxs:w-[100%] m-3" />
      <input type="Email" id="Email" name="Email" autoComplete="Email" placeholder="Enter Your Email" required className="p-3 rounded-md w-[45%] xs:w-[100%] xxs:w-[100%] m-3" />
      <input type="Number" id="Number" name="Number" autoComplete="Number" placeholder="Enter Your Number" required className="p-3 rounded-md w-[45%] xs:w-[100%] xxs:w-[100%] m-3" />
      <textarea id="comment" name="comment" rows="4" autoComplete="comment"  placeholder="Tell us about yourself" className="m-2 rounded-lg p-3 w-full"></textarea>
      </form>
      <div className="flex flex-col items-center space-y-3 my-3">
      <p className="text-gray-500 text-center">By clicking contact us button, you agree our terms and policy,</p>
      <button className="bg-primary text-white px-5 py-3 font-bold rounded-lg">Contact Us</button>
      </div>
      </div>

    </motion.div>
  )
}

export default Contact