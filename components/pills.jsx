import { Disclosure, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const Pills = (props) => {
  const { title, children } = props;
  return (
    <div className="mb-3 rounded bg-soft-black text-white">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex items-center justify-between p-4 w-full text-left transition ease-in duration-75 ">
              <h3 className="text-lg font-semibold">{title}</h3>
              <FontAwesomeIcon icon={open ? faMinus : faPlus} className="text-white w-4" />
            </Disclosure.Button>
            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Disclosure.Panel className="text-white text-left p-4 transition ease-in duration-75 border-t border-gray-600">
                {children}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Pills;
