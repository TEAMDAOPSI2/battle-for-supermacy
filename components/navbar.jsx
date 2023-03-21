import AnchorMain from '@/components/navbar/anchor-main';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import Logo from '@/public/images/logo.png';

const Navbar = ({ isActive, action }) => {
  const handleNavbar = () => {
    action(!isActive);
  };

  return (
    <header id="main-header" className={`${isActive ? '!flex' : null}`}>
      <nav>
        <div className="top">
          <div className="img-logo">
            <img
              src={Logo.src}
              alt="BFS Logo"
            />
          </div>
          <div className="burger">
            <button onClick={handleNavbar}>
              <FontAwesomeIcon icon={faClose} />
            </button>
          </div>
        </div>
        <div className="wrap-main-list pt-3">
          <AnchorMain href="/" text="Season 6" />
          <AnchorMain href="/" text="Season 5" />
          <AnchorMain href="/" text="Season 4" />
          <AnchorMain href="/" text="Team" />
          <AnchorMain href="/" text="Schedule" />
          <AnchorMain href="/" text="Standings" />
          <AnchorMain href="how-to-watch" text="How To Watch" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
