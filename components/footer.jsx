import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDiscord,
  faFacebook,
  faKickstarter,
  faTiktok,
  faTwitch,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';

const BoxPartner = ({ image, url }) => {
  return (
    <div className='border border-gray-700 p-3 hover:bg-black transition duration-200 ease-in-out'>
      <Link href={url} className='flex justify-center'>
        <img className='w-3/4 h-[30px]'
             src='https://pro.eslgaming.com/csgo/proleague/wp-content/uploads/2020/12/intel-logo-white.svg?w=500&h=500'
             alt='' />
      </Link>
    </div>
  );
};

const AnchorText = ({ href, title, className = "" }) => {
  return (
    <li className={`text-dark-gray font-bold hover:text-accent ${className}`}>
      <Link href={href}>{title}</Link>
    </li>
  );
};

const AnchorIcon = ({ href, icon }) => {
  return (
    <li>
      <Link href={href}
            className='flex justify-center p-3 bg-gray-600 rounded-full text-secondary hover:text-black hover:bg-secondary'>
        {icon}
      </Link>
    </li>
  );
};

const Footer = () => {
  // const [fixed, setFixed] = useState(true);
  //
  // const handleScroll = () => {
  //   const pageHeight = document.body.scrollHeight;
  //   const scrollHeight = window.scrollY;
  //   const windowHeight = window.innerHeight;
  //
  //
  //
  //   if ((pageHeight - (scrollHeight + windowHeight)) < 300) {
  //     setFixed(false);
  //   } else {
  //     setFixed(true);
  //   }
  // };
  //
  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     handleScroll();
  //   });
  //
  // }, []);

  return (
    <footer className='footer bg-soft-black mb-[55px]'>
      {/*<div className={`top bg-soft-black border-y border-gray-700 ${fixed ? 'fixed-footer' : ''}`}>*/}
      {/*  <div className='page-container'>*/}
      {/*    <div className='grid sm:grid-cols-7 grid-cols-2'>*/}
      {/*      <BoxPartner image={''} url={'https://www.intel.com/content/www/us/en/homepage.html'} />*/}
      {/*      <BoxPartner image={''} url={'https://www.intel.com/content/www/us/en/homepage.html'} />*/}
      {/*      <BoxPartner image={''} url={'https://www.intel.com/content/www/us/en/homepage.html'} />*/}
      {/*      <BoxPartner image={''} url={'https://www.intel.com/content/www/us/en/homepage.html'} />*/}
      {/*      <BoxPartner image={''} url={'https://www.intel.com/content/www/us/en/homepage.html'} />*/}
      {/*      <BoxPartner image={''} url={'https://www.intel.com/content/www/us/en/homepage.html'} />*/}
      {/*      <BoxPartner image={''} url={'https://www.intel.com/content/www/us/en/homepage.html'} />*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}

      <div className='information py-6'>
        <div className='page-container sm:w-[800px] m-auto w-full'>
          <div className='grid sm:grid-cols-3 gap-4'>
            <div className='flex flex-col'>
              <h3 className='text-white text-xl font-bold font-inter mb-3 uppercase'>Professional Leagues</h3>
              <ul className='flex flex-col gap-3'>
                <AnchorText href='#' className="!text-secondary" title='Supreme League' />
                <AnchorText href='#' className="text-primary" title='Super League' />
                <AnchorText href='#' title='Crypto League' />
                <AnchorText href='#' title='SoftDrink League' />
                <AnchorText href='#' title='Chocolate League' />
                <AnchorText href='#' title='Snacks League' />
                <AnchorText href='#' title='Gadget League' />
                <AnchorText href='#' title='PC League' />
                <AnchorText href='#' title='Console League' />
                <AnchorText href='#' title='Military League' />
                <AnchorText href='#' className="text-green-500" title='Standard League' />
              </ul>
            </div>

            <div className='flex flex-col'>
              <h3 className='text-white text-xl font-bold font-inter mb-3 uppercase'>Contact</h3>
              <ul className='flex flex-col gap-3'>
                <AnchorText href='mailto:GM@BattleForSupremacy.TV' title='GM@BattleForSupremacy.TV' />
              </ul>
            </div>

            <div className='flex flex-col'>
              <h3 className='text-white text-xl font-bold font-inter mb-3 uppercase'>Follow us</h3>
              <ul className='flex flex-row gap-3'>
                <AnchorIcon href='https://www.youtube.com/@BattleForSupremacyTV'
                            icon={<FontAwesomeIcon icon={faYoutube} />} />
                <AnchorIcon href='https://www.twitch.tv/battleforsupremacytv'
                            icon={<FontAwesomeIcon icon={faTwitch} />} />
                <AnchorIcon href='https://discord.gg/KmmkAMAK' icon={<FontAwesomeIcon icon={faDiscord} />} />
                <AnchorIcon href='https://www.tiktok.com/@battleforsupremacy.tv'
                            icon={<FontAwesomeIcon icon={faTiktok} />} />
                <AnchorIcon href='https://kick.com/battleforsupremacytv'
                            icon={<FontAwesomeIcon icon={faKickstarter} />} />
              </ul>
            </div>

          </div>
        </div>
      </div>

    </footer>
  );
};


export default Footer;