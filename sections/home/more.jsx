import Link from 'next/link';

const More = () => {
  return (
    <section className='default-section'>
      <div className='page-container'>
        <div className='page-section-title'>
          <h2 className='text-[3.3rem] font-bold font-inter text-center uppercase'>Explore more</h2>
          <p className='text-[1.8rem] font-inter font-semibold text-center text-secondary uppercase font-inter'>
            get Further information
          </p>
        </div>

        <div className='grid sm:grid-cols-2 grid-cols-1 gap-8 my-6'>
          <div className='flex flex-col bg-soft-black gap-5 items-center py-6 text-white'>
            <h3 className='sm:text-3xl text-xl font-inter font-bold uppercase text-secondary'>Our Champions</h3>
            <p className='sm:text-lg text-base text-center'>
              Get a full list of all our legendary history of champions, starting with the first season.
            </p>
            <Link href='#'
                  className='uppercase text-sm text-white font-semibold border border-white px-5 py-3 rounded-md transition duration-100 hover:bg-white hover:text-black'>
              Our History
            </Link>
          </div>

          <div className='flex flex-col bg-soft-black gap-5 items-center py-6 text-white'>
            <h3 className='sm:text-3xl text-xl font-inter font-bold uppercase text-secondary'>Our latest News</h3>
            <p className='sm:text-lg text-base text-center'>
              Our latest News <br/>
              <span className='text-dark-gray text-sm'>January 6, 2023</span>
            </p>
            <Link href='#'
                  className='uppercase text-sm text-white font-semibold border border-white px-5 py-3 rounded-md transition duration-100 hover:bg-white hover:text-black'>
              News Overview
            </Link>
          </div>

        </div>

      </div>

    </section>
  );
};

export default More;