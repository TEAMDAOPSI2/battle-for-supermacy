const Hero = () => {
  return (
    <section className='hero'>
      <div className='page-container flex flex-col justify-center align-middle '>
        <div className='img'>
          <img
            className='xs:w-[250px] w-[350px] m-auto'
            src='https://eslpro.imgix.net/csgo/proleague/wp-content/uploads/2022/12/ESL_PRO_LEAGUE_LOGO_XVII-optimized.png?auto=format%2Ccompress&w=1024&h=1024'
            alt='hero' />
        </div>
        <div className='text py-3 text-white'>
          <h1 className='text-[3rem] font-bold font-inter text-center'>SEASON 17</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;