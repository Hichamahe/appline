import { AiOutlineDown } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = ({ listItems, PageListe, isDay}) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  

  const isItemActive = (item) => {
    return activeItem === item ? 'text-primary' : '';
  };

  const handletoggleactive = (item) => {
    if (activeItem === item) {
      // Si le lien actif est cliqué à nouveau, retirez la classe active
      setActiveItem(null);
      setIsSubMenuOpen(false);
    } else {
      // Sinon, mettez à jour l'élément actif
      setActiveItem(item);
      setIsSubMenuOpen(item === 'Pages');
    }
  };




  return (
    <nav className="py-2 xxs:hidden xs:hidden sm:hidden md:hidden">
      <ul className="menu flex justify-center space-x-6">
        {listItems.map((item, index) => (
          <li
            className={`relative group mx-6 ${
              index === listItems.length - 1 ? 'flex' : ''
            } `}
            key={index}
            onMouseEnter={() => {
              if (item === 'Pages') {
                setIsSubMenuOpen(true);
              }
            }}
            onMouseLeave={() => {
              if (item === 'Pages') {
                setIsSubMenuOpen(false);
              }
            }}
          >
            <div className="relative group flex">
              <a href={(() => {
                      switch (item) {
                          case 'Features':
                        return '/#Features';
                          case 'About':
                        return '/#About';
                          case 'How It Works':
                        return '/#How It Works';
                          case 'Support':
                        return '/#Support';
                          case 'Pages':
                        return '';
                          default:
                        return '';
                        }
                      })()} 
                className={`links
                    ${isDay ? 'text-dark' : 'text-light'}
                     group-hover:text-primary relative overflow-hidden cursor-pointer
                     ${isItemActive(item)}
                     `}
                onClick={() => handletoggleactive(item)}
              >
                {item}
              </a>
              {item === 'Pages' ? (
                <AiOutlineDown
                  className={`${
                    isDay ? 'text-dark' : 'text-light'
                  } group-hover:text-primary m-1`}
                />
              ) : (
                ''
              )}
            </div>
            {item === 'Pages' ? (
              <div
                className={`${
                  isDay ? 'bg-light' : 'bg-dark'
                } submenu lg:absolute xl:absolute xxl:absolute top-[2rem] p-3 rounded-md shadow-sm transform -translate-y-2 transition-all duration-300 ease-in-out  ${
                  isSubMenuOpen ? 'block' : 'hidden'
                }`}
              >
                <ul className="p-2">
                  {PageListe.map((el, i) => (
                    <li className="w-36 py-2 relative" key={i}>
                      <Link
                          to={(() => {
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
                        onClick={() => setIsSubMenuOpen(false)}
                        className={`${isDay ? 'text-dark' : 'text-light'} hover:text-primary`}
                      >
                        {el}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              ''
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  listItems: PropTypes.array.isRequired,
  PageListe: PropTypes.array.isRequired,
  isDay: PropTypes.bool.isRequired,

};

export default Navbar;


