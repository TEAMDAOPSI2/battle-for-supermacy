import { Menu } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretRight, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import navbarCtx from '@/context/navbar-ctx';

const anchorMultiple = ({ props }) => {
  const { title, mains, svg } = props;
  const ctx = useContext(navbarCtx);
  const { hide } = ctx;

  return (
    <Menu>
      {({ open }) => (
        <>
          <Menu.Button as='a'>
            <div
              className='flex cursor-pointer justify-between text-dark-gray px-2 text-xl uppercase font-inter py-3 border-b border-gray-700 hover:bg-gray-700 hover:text-white transition-all ease-in-out'>
              <span className='flex items-center justify-start'>
                {svg && <span className='text-primary text-lg w-[30px]'>{svg}</span>}
                {hide === false && (<span className='ml-2 tracking-[-1px]'>{title}</span>)}
              </span>
              {
                open ? (
                  <span className='text-xl'>
                    <FontAwesomeIcon icon={faCaretUp} className='ml-2' />
                  </span>
                ) : (
                  <span className='text-xl'>
                  <FontAwesomeIcon icon={faCaretDown} className='ml-2' />
                  </span>
                )
              }

            </div>
          </Menu.Button>
          <Menu.Items>
            {mains.map((x) => {
              const [showSub, setShowSub] = useState(false);
              return (
                <Menu.Item key={x.sort}>
                  {({ active }) => (
                    <div
                      className='relative'
                      onMouseEnter={() => setShowSub(true)}
                      onMouseLeave={() => setShowSub(false)}
                    >
                    <span
                      className='flex items-center text-dark-gray text-lg uppercase font-inter  py-3 border-b border-gray-700 hover:bg-gray-700 hover:text-white transition-all ease-in-out'>
                      {
                        hide ? x.sort : <div dangerouslySetInnerHTML={{ __html: x.title }} />
                      }
                      <FontAwesomeIcon icon={faCaretRight} className='ml-2' />
                    </span>

                      { showSub && (
                        <div
                          className='absolute -right-[250px] top-0 block min-w-[250px] z-20 shadow shadow-soft-black'>
                          <div className={`${x.subLinks.length > 0 && 'bg-soft-black p-2 shadow'}`}>
                            {
                              x.subLinks.map((link) => (
                                <a
                                  key={link.link}
                                  href={link.link}
                                  className='group flex items-center w-full px-2 py-2 text-dark-gray hover:bg-gray-700 hover:text-white transition-all ease-in-out'
                                >
                                  {link.title}
                                </a>
                              ))
                            }
                          </div>
                        </div>
                      )}

                      {/* show on mobile only */}

                      <div
                        className="sm:hidden block">
                        <div className='bg-soft-black p-2 shadow'>
                          {
                            x.subLinks.map((link) => (
                              <a
                                key={link.link}
                                href={link.link}
                                className='group flex items-center w-full px-2 py-2 text-dark-gray hover:bg-gray-700 hover:text-white transition-all ease-in-out'
                              >
                                {link.title}
                              </a>
                            ))
                          }
                        </div>
                      </div>


                    </div>
                  )}
                </Menu.Item>
              )
            })}
          </Menu.Items>
        </>
      )}
    </Menu>
  );
};

export default anchorMultiple;