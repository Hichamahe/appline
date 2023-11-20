import Header from '../Header'
import Footer from '../Footer'
import svg from './404.svg'
import { useTheme } from "../ThemeProvider";
import { Link } from 'react-router-dom';

function Error() {
  const { isDay } = useTheme();
  return (
    <div className=''>
       <Header />
       <main className='pt-[229px] pb-[100px] mx-5 space-y-10 flex flex-col justify-center items-center'>
        <div className=''>
           <img src={svg} alt='Error' />
        </div>
        <div className=''>
          <h1 className={`${isDay ? 'text-dark' : 'text-light'} text-4xl font-bold text-center sm:text-3xl xs:text-2xl xxs:text-xl`}>Sorry, the page can&apos;t be found</h1>
        </div>
        <div className=''>
          <p className='text-gray-500 text-center'>The page you were looking for appears to have been moved, deleted or does not exist.</p>
        </div>
        <div className='relative group w-fit'>
          <Link to="/" className='text-light bg-primary px-7 py-3 rounded-lg group-hover:opacity-80'>Back To Homepage</Link>
        </div>      
       </main>
       <Footer />
    </div>
  )
}

export default Error