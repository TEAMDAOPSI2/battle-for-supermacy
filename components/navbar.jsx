import AnchorMain from '@/components/navbar/anchor-main';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightArrowLeft,
  faBullhorn,
  faClose,
  faCoins, faEquals, faH,
  faRankingStar,
  faS, faSpinner,
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
import AnchorMultiple from '@/components/navbar/anchor-multiple';
import * as events from 'events';

const Navbar = ({ isActive, action }) => {
  const handleNavbar = () => {
    action(!isActive);
  };


  const history = {
    title: 'History',
    svg: <FontAwesomeIcon icon={faH} />,
    mains: [
      {
        title: 'Call of Duty:Mobile',
        sort: 'CODM',
        subLinks: [
          {
            title: 'Solo BR Season 1',
            link: '#',
          },
          {
            title: 'Solo BR Season 2',
            link: '/codm/solo/season-2',
          },
          // {
          //   title: 'Duo BR Season 1',
          //   link: '/codm/duo/season-1',
          // },
          // {
          //   title: 'Duo BR Season 2',
          //   link: '/codm/duo/season-2',
          // },
          {
            title: 'Duo BR Season 3',
            link: '/codm/duo/season-3',
          },
          {
            title: 'TEAM BR Season 5',
            link: '/codm/team/5',
          },
          {
            title: 'TEAM BR Season 6',
            link: '/codm/team/6',
          },
          {
            title: 'TEAM BR Season 7',
            link: '/codm/team/7',
          },
          {
            title: '5v5 Multiplayer Season 3',
            link: '/codm/5v5/season-3',
          },
          {
            title: '1v1 Multiplayer',
            link: '/codm/1v1/season-1',
          },
        ],
      },
    ],
  };

  const league = {
    title: 'League',
    svg: <FontAwesomeIcon icon={faEquals} />,
    mains: [
      {
        title: 'Standard',
        sort: 'ST',
        subLinks: [],
      },
      {
        title: 'Supreme',
        sort: 'SU',
        subLinks: [],
      },
      {
        title: 'Super',
        sort: 'SP',
        subLinks: [],
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
          <AnchorMultiple props={history} />
          <AnchorMultiple props={league} />
          <AnchorMain href='/rankings' text='RANKINGS' svg={<FontAwesomeIcon icon={faRankingStar} />} />
          <AnchorMain href='/' text='PRIZES' svg={<FontAwesomeIcon icon={faCoins} />} />
          <AnchorMain href='/sponsorship' text='SPONSORSHIPS' svg={<FontAwesomeIcon icon={faUserTie} />} />
          <AnchorMain href='/gamemasters' text='GAMEMASTERS' svg={<FontAwesomeIcon icon={faUserGear} />} />
          <AnchorMain href='/shoutcasters' text='SHOUTCASTERS' svg={<FontAwesomeIcon icon={faUserFriends} />} />
          <AnchorMain href='/' text='FAQ' svg={<FontAwesomeIcon icon={faBullhorn} />} />
          <AnchorMain href='https://spin.battleforsupremacy.tv/' text='Spin'
                      svg={<FontAwesomeIcon icon={faSpinner} />} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
