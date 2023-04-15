import Marquee from 'react-fast-marquee';
import articleCtx from '@/context/article-ctx';
import { useContext, useEffect, useState } from 'react';
import up7 from '@/public/images/sponsors/7up.jpg';
import aquafina from '@/public/images/sponsors/aquafina.jpg';
import cheetos from '@/public/images/sponsors/cheetos.jpg';
import fritos from '@/public/images/sponsors/fritos.jpg';
import gatorade from '@/public/images/sponsors/gatorade.jpg';
import lays from '@/public/images/sponsors/lays.jpg';
import pepsiMax from '@/public/images/sponsors/pepsi-max.jpg';
import lipton from '@/public/images/sponsors/lipton.jpg';
import miranda from '@/public/images/sponsors/miranda.jpg';
import pepsi from '@/public/images/sponsors/pepsi.jpg';
import quaker from '@/public/images/sponsors/quaker.jpg';
import rr from '@/public/images/sponsors/rr.jpg';
import ruffles from '@/public/images/sponsors/ruffles.jpg';
import sb from '@/public/images/sponsors/sb.jpg';
import sodaStream from '@/public/images/sponsors/sodastream.jpg';
import tostitos from '@/public/images/sponsors/tostitos.jpg';

const NavbarMatch = () => {
  const article = useContext(articleCtx);
  const [scores, setScores] = useState([]);

  const sponsors = [ up7, aquafina, cheetos, fritos, gatorade, lays, pepsiMax, lipton, miranda, pepsi, quaker, rr, ruffles, sb, sodaStream, tostitos ];

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
        text += `<span class='font-flag'>${country}</span> &nbsp; ${name} SCORE: ${score} `;
        // add sponsor image to the text
        const ix = Math.floor(Math.random() * sponsors.length);
        text += `<img src="${sponsors[ix].src}" alt="sponsor" /> `;
      });
      setScores((prev) => [...prev, text]);
    });
  }, [article]);

  return (
    <div className="match-nav bg-black flex items-center h-[55px] fixed z-[1] w-full">
      <div className="px-6 flex flex-row text-white gap-2 text-sm">
        <div className="sm:flex hidden">Match Update:</div>
        <Marquee loop={0} speed={20} gradient={false} className="sm:w-11/12 w-10/12">
          {[0, 1].map((item, index) => (
            <div className="w-fit">
              <div className="flex flex-row items-center text-sm" dangerouslySetInnerHTML={{ __html: scores[index] }} />
            </div>
          ))}
        </Marquee>

      </div>
    </div>
  );
};

export default NavbarMatch;
