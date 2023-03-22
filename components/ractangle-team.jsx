const RactangleTeam = ({ name, image = '', className = '' }) => {
  return (
    <div className={`relative flex flex-col items-center gap-2 ${className}`}>
      <svg viewBox='0 0 100 100' version='1.1' xmlns='http://www.w3.org/2000/svg'>
        <polygon
          className="relative h-[123px]"
          fill='transparent'
          stroke='#fff'
          strokeWidth='1'
          height="80px"
          points='50 1 95 25 95 75 50 99 5 75 5 25' />
      </svg>
      <div className='absolute flex flex-col items-center sm:top-4 top-3'>
        <div className='w-full h-full '>
          <img src={image} alt={name} loading="lazy" className='w-full h-full object-contain inset-0' />
        </div>
      </div>
    </div>
  );
};

export default RactangleTeam;