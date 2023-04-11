import Marquee from 'react-fast-marquee';
const BoxPartner = ({ image, url }) => {
  return (
    <div className='p-3'>
      {/*<Link href={url} className='flex justify-center'>*/}
      {/* */}
      {/*</Link>*/}
      <img className='w-3/4 h-[30px] object-contain'
           src={image?.default.src}
           alt='' />
    </div>
  );
};


const FooterSponsor = () => {

  const importAll = (r) => {
    return r.keys().map(r);
  };

  const images = importAll(require.context('public/images/sponsors', false, /\.(png|jpe?g|svg)$/));
  return (
    <div className='footer-sponsor match-nav bg-black flex items-center h-[55px] fixed z-[1] w-full flex'>
     <Marquee
     gradient={false}
     >
       {
         images.map((image, index) => (
           <BoxPartner key={index} image={image} url='#' />
         ))
       }
     </Marquee>
    </div>
  );
};

export default FooterSponsor;