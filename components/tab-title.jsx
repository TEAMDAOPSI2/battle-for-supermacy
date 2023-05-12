import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

const TabTitle = ({ children, className = '' }) => {
  return (
    <Tab as={Fragment}>
      {({ selected }) => (
        <h3
          className={`uppercase text-xl text-secondary font-bold font-inter cursor-pointer hover:text-white hover:border-b-2 hover:border-b-white outline-0 ${selected ? 'text-white border-b-2 border-b-white' : ''} ${className}`}>
          {children}
        </h3>
      )}
    </Tab>
  );
};

export default TabTitle;