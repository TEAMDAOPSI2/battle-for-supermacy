import AnchorMain from '@/components/navbar/anchor-main';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightArrowLeft,
  faBullhorn,
  faClose,
  faCoins, faEquals,
  faRankingStar,
  faS,
  faTv,
  faUserFriends,
  faUserGear,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons';
import Logo from '@/public/images/logo.png';
import AnchorDropdown from '@/components/navbar/anchor-dropdown';
import { useContext, useState } from 'react';
import navbarCtx from '@/context/navbar-ctx';
import { Transition } from '@headlessui/react';
import Link from 'next/link';

const Navbar = ({ isActive, action }) => {
  const handleNavbar = () => {
    action(!isActive);
  };

  const seasons = {
    title: 'Seasons',
    svg: <FontAwesomeIcon icon={faS} />,
    links: [
      {
        name: 'Season 6',
        sort: 'S 6',
        href: '/',
      },
      {
        name: 'Season 5',
        sort: 'S 5',
        href: '/season/5',
      },
      {
        name: 'Season 4',
        sort: 'S 4',
        href: '/season/4',
      },
      {
        name: 'Season 3',
        sort: 'S 3',
        href: '/season/3',
      },
      {
        name: 'Season 2',
        sort: 'S 2',
        href: '/season/2',
      },
      {
        name: 'Season 1',
        sort: 'S 1',
        href: '/season/1',
      },
    ],
  };

  const nvContext = useContext(navbarCtx);
  const { hide } = nvContext;


  return (
    <header id='main-header' className={`relative ${isActive ? '!flex' : null} ${hide && '!w-[80px]'}`}>
      <div className='absolute -right-11 top-14'>
        <button className='bg-soft-black py-2 px-4 text-white' onClick={() => {
          nvContext.setNavbar(!hide);
        }}>
          <FontAwesomeIcon icon={faArrowRightArrowLeft} />
        </button>
      </div>
      <nav>
        <div className='top'>
          <div className={`${hide ? 'mb-4' : 'img-logo'}`}>
           <Link href={'/'}>
             <img
               src={Logo.src}
               alt='BattleForSupremacy Logo'
             />
            </Link>
          </div>
          <div className='burger'>
            <button onClick={handleNavbar}>
              <FontAwesomeIcon icon={faClose} />
            </button>
          </div>
        </div>
        <div className='wrap-main-list pt-3'>
          <AnchorMain href='/live' text='🔴 LIVE TV' svg={<FontAwesomeIcon icon={faTv} />} />
          <AnchorDropdown props={seasons} />
          <AnchorMain href='/' text='LEAGUES' svg={<FontAwesomeIcon icon={faEquals} />} />
          <AnchorMain href='/rankings' text='RANKINGS' svg={<FontAwesomeIcon icon={faRankingStar} />} />
          <AnchorMain href='/' text='PRIZES' svg={<FontAwesomeIcon icon={faCoins} />} />
          <AnchorMain href='/' text='SPONSORSHIPS' svg={<FontAwesomeIcon icon={faUserTie} />} />
          <AnchorMain href='/' text='GAMEMASTERS' svg={<FontAwesomeIcon icon={faUserGear} />} />
          <AnchorMain href='/' text='SHOUTCASTERS' svg={<FontAwesomeIcon icon={faUserFriends} />} />
          <AnchorMain href='/' text='FAQ' svg={<FontAwesomeIcon icon={faBullhorn} />} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
