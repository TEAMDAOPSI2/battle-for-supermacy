import { Menu } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

const AnchorDropdown = ({ props }) => {
  const { title, links } = props;
  return (
    <Menu>
      {({ open }) => (
        <>
          <Menu.Button as='a'>
            <div
              className='flex cursor-pointer justify-between text-dark-gray px-2 text-2xl uppercase font-inter font-semibold py-3 border-b border-gray-700 hover:bg-gray-700 hover:text-white transition-all ease-in-out'>
              {title}
              {
                open ? (
                  <FontAwesomeIcon icon={faCaretUp} className='ml-2' />
                ) : (
                  <FontAwesomeIcon icon={faCaretDown} className='ml-2' />
                )
              }

            </div>
          </Menu.Button>
          <Menu.Items>
            {links.map((link) => (
              <Menu.Item key={link}>
                {({ active }) => (
                  <a
                    href={link.href}
                    className={`text-xl uppercase font-inter font-semibold py-3 border-b border-gray-700 hover:bg-gray-700 hover:text-white transition-all ease-in-out
                  group flex items-center w-full px-2 py-2 ${link.href === '/' ? 'text-secondary' : 'text-dark-gray '}`}
                  >
                    {link.name}
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