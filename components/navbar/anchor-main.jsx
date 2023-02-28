import Link from 'next/link';

const AnchorMain = (props) => {
  const { href, text, svg } = props;
  return (
    <Link href={href}>
      <div
        className='text-dark-gray text-xl uppercase font-inter font-semibold py-3 border-b border-gray-700 hover:bg-gray-700 hover:text-white transition-all ease-in-out'>
        {svg && svg}
        <span className='ml-2 tracking-[-1px]'>{text}</span>
      </div>
    </Link>
  );
};

export default AnchorMain;