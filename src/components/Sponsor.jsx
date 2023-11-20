import image1 from '../images/client-01.svg';
import image2 from '../images/client-02.svg';
import image3 from '../images/client-03.svg';
import image4 from '../images/client-04.svg';
import image5 from '../images/client-05.svg';
import image6 from '../images/client-06.svg';
import { motion } from 'framer-motion';

function Sponsor() {
  return (
    <motion.div initial = {{opacity: 0, y:50}}
                whileInView ={{opacity: 1, y:0}}
                transition= {{ duration: 1 }} 
                className="flex flex-wra p-4">
      <div className="flex-grow p-4 ">
        <img src={image1} alt="" className="" />
      </div>
      <div className="flex-grow p-4">
        <img src={image2} alt="" className="" />
      </div>
      <div className="flex-grow p-4">
        <img src={image3} alt="" className="" />
      </div>
      <div className="flex-grow p-4">
        <img src={image4} alt="" className="" />
      </div>
      <div className="flex-grow p-4">
        <img src={image5} alt="" className="" />
      </div>
      <div className="flex-grow p-4">
        <img src={image6} alt="" className="" />
      </div>
    </motion.div>
  )
}

export default Sponsor