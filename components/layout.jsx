import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from '@/public/images/logo.png';
import { useState } from 'react';
import NavbarMatch from '@/components/navbar-match';
import FooterSponsor from '@/components/footer-sponsor';

const Layout = ({ children }) => {
  const [navbar, setNavbar] = useState(false);

  const handleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <>
      <div className='flex flex-row'>
        <Navbar isActive={navbar} action={setNavbar} />
        <main id='main-page'>
          <div className='sec-nav'>
            <div className='image flex flex-row items-center gap-1'>
              <img
                src={Logo.src}
                alt=''
                className='w-[50px] object-contain'
              />
              <h3 className="text-white font-inter text-2xl">Battle For Supremacy</h3>
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
      </div>
    </>
  );
};

export default Layout;
