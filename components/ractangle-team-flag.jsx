const RactangleTeamFlag = ({ name, flag = '', className = '' }) => {
  return (
    <div className={`flex flex-col items-center font-inter gap-6 relative  ${className}`}>
      <svg viewBox='0 0 100 100' version='1.1' xmlns='http://www.w3.org/2000/svg'>
        {/*stroke gradient*/}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0070f3" />
            <stop offset="100%" stopColor="#db2b42" />
          </linearGradient>
        </defs>

        <polygon
          className="relative h-[123px]"
          stroke={'url(#gradient)'}
          fill='transparent'
          strokeWidth='1'
          height="80px"
          points='50 1 95 25 95 75 50 99 5 75 5 25' />
      </svg>

      <div className='absolute w-10/12 h-full flex flex-col justify-center items-center'>
        <div className='flag w-[40px] text-3xl mb-1 font-flag text-center'>
          { flag }
        </div>

        <div className='text'>
          <p className='text-white text-center uppercase font-medium font-inter sm:text-base text-sm'>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default RactangleTeamFlag;