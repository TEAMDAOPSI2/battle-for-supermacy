import Head from 'next/head';
import db from '@/db/db.json';
import articleCtx from '@/context/article-ctx';
import { useEffect, useState } from 'react';
import Solo from '@/components/layout/solo';
import  Main  from '@/components/layout/main';

const Home = () => {
  const [article, setArticle] = useState(null);

  const findArticle = (id) => {
    return db.series.find((series) => {
      return series?.season === id;
    });
  };

  useEffect(() => {
    const article = findArticle(6);
    console.log(article);
    setArticle(article);
  }, []);

  const Loader = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader" />
      </div>
    );
  };

  const ActPage = ({ page = 'solo' }) => {
    switch (page) {
      case 'main':
        return <Main />;
      case 'solo':
        return <Solo />;
      default:
        return null; // or throw an error
    }
  };

  return (
    <>
      <articleCtx.Provider value={article}>
        <Head>
          <title>BattleForSupremacy.TV</title>
        </Head>
        {article ? (
         <ActPage />
        ) : (
          <Loader />
        )}
      </articleCtx.Provider>
    </>
  );
};

export default Home;
