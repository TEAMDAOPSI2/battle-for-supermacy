import { useContext, useEffect, useState } from 'react';
import articleCtx from '@/context/article-ctx';
import starlink from '@/public/images/starlink_1.jpg';
import useProgressiveImage from '@/hooks/useProgressiveImage';
import * as url from 'url';


const RactangleTeamFlag = ({ name, flag = '',rank='', className = '' }) => {
  return (
    <div className="relative">
      <img className='sm:w-[190px] w-[90px] object-cover'
           src={`https://raw.githubusercontent.com/teamdao-psi3/esport-team/main/bfs-ranks-6/${name}.png`} alt='' />
      {/*<div className="absolute top-0 right-0 mr-10 mt-3 rounded-full bg-primary w-[30px] h-[30px] flex items-center justify-center">*/}
      {/*  {rank}*/}
      {/*</div>*/}
    </div>
  );
};


const Standing = () => {
  const { ranks } = useContext(articleCtx);
  const { global_ranks } = ranks;



  const GenPyramid = ({ global_ranks }) => {
    const totalItems = 12;
    const totalRows = 5;
    const pyramid = [];
    let currentItem = 0;
    // row 1 = 1
    // row 2 = 2
    // row 3 = 3
    // row 4 = 4
    // row 5 = 5
    // generate pyramid with 12 items and 5 rows
    // Calculate the number of items in each row of the pyramid
    const itemsPerRow = [];
    let remainingItems = totalItems;
    for (let i = 1; i <= totalRows; i++) {
      const items = Math.min(i, remainingItems);
      itemsPerRow.push(items);
      remainingItems -= items;
    }

    // Generate the pyramid rows
    let index = 0;
    for (let row = 0; row < totalRows; row++) {
      const items = [];
      for (let col = 0; col < itemsPerRow[row]; col++) {
        if (currentItem < totalItems) {
          const rank = global_ranks[currentItem];
          items.push(
           <RactangleTeamFlag key={index} name={rank?.name} flag={rank?.country} rank={rank?.rank} className="sm:w-[70%] w-full" />
          );
          currentItem++;
          index++;
        }
      }
      pyramid.push(
        <div key={row} className={`flex  ${row === (5-1) ? 'sm:justify-between justify-evenly': 'justify-center'} ${row > 0 && 'sm:-mt-10 -mt-3'}`}>
          {items}
        </div>
      );
    }

    // Render the pyramid container
    return (
      <div className="pyramid-container sm:max-w-full max-w-[300px] m-auto">
        {pyramid}
      </div>
    );
  }



  return (
    <section className='default-section'>
      <div className='page-container'>
        <div className='page-section-title mb-5'>
          <h2 className='text-[3.3rem] font-bold font-inter text-center uppercase'>POWER RANKING GLOBAL</h2>
          <p className='text-[1.8rem] font-inter text-center text-secondary uppercase font-inter'>
            Season 5 - Season 6
          </p>
        </div>
        <div className='card rounded-md p-3' >
          {/*<div className='grid grid-cols-2 sm:grid-cols-4 gap-3'>*/}
          {/*  /!*{*!/*/}
          {/*  /!*  pyramid.map((row, index) => {*!/*/}
          {/*  /!*    return (*!/*/}
          {/*  /!*      <div className="flex flex-col items-center justify-center">*!/*/}
          {/*  /!*        <RactangleTeamFlag key={index} name={rank?.name} flag={rank?.country} className="sm:w-[70%] w-full" />*!/*/}
          {/*  /!*      </div>*!/*/}
          {/*  /!*    )*!/*/}
          {/*  /!*  })*!/*/}
          {/*  /!*}*!/*/}

          {/*</div>*/}

          <GenPyramid global_ranks={global_ranks} />

        </div>
      </div>
    </section>
  );
};
export default Standing;