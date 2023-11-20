import { useState } from 'react';
import cadre from '../images/mobile-frame.png';
import image1 from '../images/screen-1-light.png';
import image2 from '../images/screen-2-light.png';
import image3 from '../images/screen-3-light.png';
import { useTheme } from './ThemeProvider';
import { motion } from 'framer-motion';

function Screenshots() {
  const { isDay } = useTheme();
  const images = [image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  return (
    <motion.div initial = {{opacity: 0, y:50}}
                whileInView ={{opacity: 1, y:0}}
                transition= {{ duration: 1 }} className="p-10 relative">
      <div className="flex flex-col items-center justify-center space-y-3">
        <div className='my-3 flex flex-col items-center justify-center space-y-3'>
          <h1 className={`${isDay ? 'text-dark' : 'text-white'} text-xl font-bold`}>Screenshots</h1>
          <p className="text-gray-500 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus.
            Phasellus aliquam ante in maximus.
          </p>
        </div>
        <div className="slider-container overflow-hidden relative w-max-[800px] my-[50px] mx-auto flex justify-center items-center">
        <div className='mobile-frame absolute z-10 text-center'>
          <img src={cadre} alt="" className='w-auto h-auto' />
        </div>
          <div className="slider flex w-auto transition-transform duration-300 ease-in-out h-[705px]" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((image, index) => (
              <div key={index} className="flex items-center justify-center flex-shrink-0 w-full">
                <img src={image} alt={`Slide ${index + 1}`} className='w-auto h-auto xxs:w-64' />
              </div>
            ))}
          </div>
          <div className='absolute top-[88%] space-x-5'>
          <button className={`${isDay ? 'text-secondDark' : 'text-light'} text-2xl bg-transparant h-10 w-10 cursor-pointer border transform translate-y-[100%] rounded-full`} onClick={prevSlide}>&lt;</button>
          <button className={`${isDay ? 'text-secondDark' : 'text-light'} text-2xl bg-transparant h-10 w-10 cursor-pointer border transform translate-y-[100%] rounded-full`} onClick={nextSlide}>&gt;</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Screenshots;
