import { createContext } from 'react';

const articleCtx =  createContext({
    article:  {},
    setArticle: () => {}
})

export default articleCtx;