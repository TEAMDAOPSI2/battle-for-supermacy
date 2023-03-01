import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const Layout = ({ children }) => {
  const [navbar, setNavbar] = useState(false);

  const handleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <>
      <div className="flex flex-row">
        <Navbar isActive={navbar} action={setNavbar} />
        <main id="main-page">
          <div className="sec-nav">
            <div className="image">
              <img
                src="https://pro.eslgaming.com/csgo/proleague/wp-content/uploads/2021/09/logo-max-esl-pro-league.svg?w=1024&h=1024"
                alt=""
              />
            </div>
            <div className="burger">
              <button onClick={handleNavbar}>
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
          </div>
          {children}
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Layout;
