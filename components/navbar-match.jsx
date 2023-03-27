import Marquee from 'react-fast-marquee';
import articleCtx from '@/context/article-ctx';
import { useContext, useEffect, useState } from 'react';

const NavbarMatch = () => {
  const article = useContext(articleCtx);
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const matchGroupStage = article?.games?.group_stage;
    // get key from games
    const keys = Object.keys(matchGroupStage);

    // get value from games
    const values = Object.values(matchGroupStage);

    // Group A Round 1, Team a score, Team b score
    keys.forEach((key, index) => {
      const teams = values[index];
      let text = `${key.toUpperCase().replace(/_/g, ' ')} RESULT: `;
      teams.forEach((team) => {
        const { name, score, country } = team;
        text += `${country} ${name} SCORE: ${score} |  `;
      });
      setScores((prev) => [...prev, text]);
    });
  }, [article]);

  return (
    <div className="match-nav bg-soft-black flex items-center h-[55px] fixed z-[1] w-full">
      <div className="px-6 flex flex-row text-white gap-2">
        <p className="sm:w-1/12 w-2/12 sm:flex hidden">Match Update:</p>
        <Marquee loop={0} gradient={false}>
          {[0, 1].map((item, index) => (
            <p className="w-fit">
              {scores[index] ? scores[index] : 'No Match started yet'}
            </p>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default NavbarMatch;
