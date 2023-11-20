
import { AiOutlineDown } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function MenuWrapper({ listItems, isDay, PageListe}) {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };
  
  const removeclass = ()=>{
    document.body.classList.remove('overflow-hidden')
  }
 

  return (
    <nav className="">
      <ul className="flex flex-col space-y-6">
        {listItems.map((item, index) => (
          <li key={index} className={`${index === listItems.length - 1 ? 'flex' : ''}`}>
            
            <a  href={(() => {
                      switch (item) {
                          case 'Features':
                        return '#Features';
                          case 'About':
                        return '#About';
                          case 'How It Works':
                        return '#How It Works';
                          case 'Support':
                        return '#Support';
                          case 'Pages':
                        return '';
                          default:
                        return '/';
                        }
                      })()} 
                className={` ${isDay ? 'text-dark' : 'text-light'} hover:text-primary`}>
              {item}
            </a>
            
            {item === 'Pages' ? (
              <>
              <AiOutlineDown className={`${isDay ? 'text-dark' : 'text-light'} hover:text-primary m-1`} onClick={toggleMenu}/>
              <div className='p-2' >
                
                <ul
                  className={`p-2 ${
                    isSubMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                  } transition-all duration-300 ease-in-out z-10`}
                >
                  {PageListe.map((el, i) => (
                    <li className="w-36 py-2" key={i}>
                      <Link to={(() => {
                              switch (el) {
                                 case 'Blog Details':
                                return '/BlogDetails';
                                  case 'Error':
                                return '/Error';
                                  case 'Sign In':
                                return '/SignIn';
                                  case 'Sign Up':
                                return '/SignUp';
                              default:
                                return '/';
                              }
                            })()}
                            onClick={removeclass}  
                       className={`${isDay ? 'text-dark' : 'text-light'} hover:text-primary`}>
                        {el}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              </>
            ) : (
              ''
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

MenuWrapper.propTypes = {
  listItems: PropTypes.array.isRequired, // Validez que listItems est un tableau requis
  PageListe: PropTypes.array.isRequired, // Validez que PageListe est un tableau requis
  isDay: PropTypes.bool.isRequired,
}

export default MenuWrapper