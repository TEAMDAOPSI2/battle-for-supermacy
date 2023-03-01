import { createContext } from 'react';

// create context
const navbarCtx = createContext({
  navbar: false,
  setNavbar: () => {},
});

export default navbarCtx;
