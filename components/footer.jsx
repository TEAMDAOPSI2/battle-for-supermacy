import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
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

const AnchorText = ({ href, title }) => {
  return (
    <li className='text-dark-gray font-bold hover:text-secondary'>
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
              <h3 className='text-white text-xl font-bold font-inter mb-3 uppercase'>BFS Gaming</h3>
              <ul className='flex flex-col gap-3'>
                <AnchorText href='#' title='BFS Pro' />
                <AnchorText href='#' title='BFS Pro Tour' />
                <AnchorText href='#' title='BFS Shop' />
              </ul>
            </div>

            <div className='flex flex-col'>
              <h3 className='text-white text-xl font-bold font-inter mb-3 uppercase'>Contact & press</h3>
              <ul className='flex flex-col gap-3'>
                <AnchorText href='mailto:email@battleforsupremacy.tv' title='email@battleforsupremacy.tv' />
                <AnchorText href='mailto:Press@battleforsupremacy.tv' title='Press@battleforsupremacy.tv' />
              </ul>
            </div>

            <div className='flex flex-col'>
              <h3 className='text-white text-xl font-bold font-inter mb-3 uppercase'>Follow us</h3>
              <ul className='flex flex-row gap-3'>
                <AnchorIcon href='#' icon={<FontAwesomeIcon icon={faFacebook} />} />
                <AnchorIcon href='#' icon={<FontAwesomeIcon icon={faTwitter} />} />
                <AnchorIcon href='#' icon={<FontAwesomeIcon icon={faYoutube} />} />
                <AnchorIcon href='#' icon={<FontAwesomeIcon icon={faTwitch} />} />
              </ul>
            </div>

          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;