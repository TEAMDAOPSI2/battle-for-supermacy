import Marquee from 'react-fast-marquee';

const NavbarMatch = () => {
  return (
    <div className='match-nav bg-soft-black flex items-center h-[55px] fixed z-[1] w-full'>
      <div className='px-6 flex flex-row text-white gap-2'>
        <p className='w-1/12 sm:flex hidden'>Match Update :</p>
        <Marquee
          loop={0}
          gradient={false}>
          {
            [0, 1].map((item, index) => (
              <p className='w-fit'>
                Group A Round 1: not started yet, Group B Round 1: not started yet, Group A Round 2: not started yet
              </p>
            ))
          }
        </Marquee>
      </div>
    </div>
  );
};

export default NavbarMatch;