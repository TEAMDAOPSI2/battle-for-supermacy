import { Menu } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import navbarCtx from '@/context/navbar-ctx';

const AnchorDropdown = ({ props }) => {
  const { title, links, svg } = props;
  const ctx = useContext(navbarCtx);
  const { hide } = ctx;
  return (
    <Menu>
      {({ open }) => (
        <>
          <Menu.Button as='a'>
            <div
              className='flex cursor-pointer justify-between text-dark-gray px-2 text-xl uppercase font-inter py-3 border-b border-gray-700 hover:bg-gray-700 hover:text-white transition-all ease-in-out'>
              <span className="flex items-center justify-start">
                {svg && <span className='text-primary text-lg w-[30px]'>{svg}</span>}
                {hide === false && (<span className='ml-2 tracking-[-1px]'>{title}</span>)}
              </span>
              {
                open ? (
                  <span className="text-xl">
                    <FontAwesomeIcon icon={faCaretUp} className='ml-2' />
                  </span>
                ) : (
                  <span className="text-xl">
                  <FontAwesomeIcon icon={faCaretDown} className='ml-2' />
                  </span>
                )
              }

            </div>
          </Menu.Button>
          <Menu.Items>
            {links.map((link) => (
              <Menu.Item key={link.href}>
                {({ active }) => (
                  <a
                    href={link.href}
                    className={`uppercase font-inter py-3 border-b border-gray-700 hover:bg-gray-700 hover:text-white transition-all ease-in-out
                  group flex items-center w-full px-2 py-2 ${link.href === '/' ? 'text-secondary' : 'text-dark-gray '}`}
                  >
                    {
                      hide ?  link.sort : link.name
                    }
                  </a>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </>
      )}
    </Menu>
  );
};

export default AnchorDropdown;