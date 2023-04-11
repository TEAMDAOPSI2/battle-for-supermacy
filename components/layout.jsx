import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from '@/public/images/logo.png';
import { useContext, useEffect, useState } from 'react';
import NavbarMatch from '@/components/navbar-match';
import FooterSponsor from '@/components/footer-sponsor';
import navbarCtx from '@/context/navbar-ctx';

const Layout = ({ children }) => {
  const [navbar, setNavbar] = useState(false);
  const [hide, setHide] = useState(true);

  const handleNavbar = () => {
    setNavbar(!navbar);
  };


  useEffect(() => {
    if (navbar) {
      setHide(false);
    }
  }, [navbar]);

  return (
    <>
      <div className='flex flex-row'>
        <navbarCtx.Provider value={{
          hide: hide,
          setNavbar: setHide,
        }}>
          <Navbar isActive={navbar} action={setNavbar} />
          <main id='main-page' className={`${hide && '!w-[calc(100%-80px)] !ml-[80px]'}`}>
            <div className='sec-nav'>
              <div className='image flex flex-row items-center gap-1'>
                <img
                  src={Logo.src}
                  alt=''
                  className='w-[50px] object-contain'
                />
                <h3 className='text-white font-inter text-2xl'>BattleForSupremacy.TV</h3>
              </div>
              <div className='burger'>
                <button onClick={handleNavbar}>
                  <FontAwesomeIcon icon={faBars} />
                </button>
              </div>
            </div>

            {children}
            <Footer />
            <FooterSponsor />
          </main>
        </navbarCtx.Provider>
      </div>
    </>
  );
};

export default Layout;
