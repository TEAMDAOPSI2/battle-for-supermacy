import AnchorMain from '@/components/navbar/anchor-main';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import Logo from '@/public/images/logo.png';
import AnchorDropdown from '@/components/navbar/anchor-dropdown';

const Navbar = ({ isActive, action }) => {
  const handleNavbar = () => {
    action(!isActive);
  };

  const seasons = {
    title: 'Seasons',
    links: [
      {
        name: 'Season 6',
        href: '/',
      },
      {
        name: 'Season 5',
        href: 'season-5',
      },
      {
        name: 'Season 4',
        href: 'season-4',
      },
      {
        name: 'Season 3',
        href: 'season-3',
      },
      {
        name: 'Season 2',
        href: 'season-2',
      },
      {
        name: 'Season 1',
        href: 'season-1',
      }
    ]
  }

  return (
    <header id="main-header" className={`${isActive ? '!flex' : null}`}>
      <nav>
        <div className="top">
          <div className="img-logo">
            <img
              src={Logo.src}
              alt="BattleForSupremacy Logo"
            />
          </div>
          <div className="burger">
            <button onClick={handleNavbar}>
              <FontAwesomeIcon icon={faClose} />
            </button>
          </div>
        </div>
        <div className="wrap-main-list pt-3">
          <AnchorDropdown props={seasons} />
          <AnchorMain href="/" text="Team" />
          <AnchorMain href="/" text="Schedule" />
          <AnchorMain href="/" text="Standings" />
          <AnchorMain href="/" text="GAMEMASTERS" />
          <AnchorMain href="/" text="CASTERS" />
          <AnchorMain href="/" text="MATCHES" />
          <AnchorMain href="/" text="MATCHES" />
          <AnchorMain href="/" text="POWER RANKINGS" />
          <AnchorMain href="how-to-watch" text="How To Watch" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
