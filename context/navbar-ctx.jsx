import { createContext } from 'react';

// create context
const navbarCtx = createContext({
  hide: {},
  setNavbar: () => {},
});

export default navbarCtx;
