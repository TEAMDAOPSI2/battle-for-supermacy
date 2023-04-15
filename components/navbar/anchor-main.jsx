import Link from 'next/link';
import { useContext } from 'react';
import navbarCtx from '@/context/navbar-ctx';
import { Transition } from '@headlessui/react';

const AnchorMain = (props) => {
  const { href, text, svg } = props;
  const ctx = useContext(navbarCtx);
  const { hide } = ctx;
  return (
    <Link href={href}>
      <div
        className='flex items-center justify-start gap-1 text-dark-gray text-lg uppercase font-inter  py-3 border-b border-gray-700 hover:bg-gray-700 hover:text-white transition-all ease-in-out'>
        {svg && <span className='text-primary pl-2 text-base w-[30px] '>{svg}</span>}
        <Transition
          show={!hide}
          enter='transform transition ease-in-out duration-500 sm:duration-700'
          enterFrom='translate-x-[-100%]'
          enterTo='translate-x-0'
          leave='transform transition ease-in-out duration-500 sm:duration-700'
          leaveFrom='translate-x-0'
          leaveTo='translate-x-[-100%]'>
          <span className='ml-2 tracking-[-1px]'>{text}</span>
        </Transition>
      </div>
    </Link>
  );
};

export default AnchorMain;