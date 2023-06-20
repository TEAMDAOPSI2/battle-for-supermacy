import ErrImg from '@/public/images/hex-err.png';

function CodmDuo() {
  const global_ranks = [
    {
      'rank': '01',
      'country': '🇵🇭',
      'id': '2851',
      'name': 'SAND',
    },
    {
      'rank': '01',
      'country': '🇵🇭',
      'id': '2887',
      'name': 'SAND',
    },
    {
      'rank': '02',
      'country': '🇷🇺',
      'id': '7726',
      'name': 'Klaud',
    },
    {
      'rank': '02',
      'country': '🇷🇺',
      'id': '7342',
      'name': 'Ky3he4nk',
    },
    {
      'rank': '03',
      'country': '🇪🇬',
      'id': '7724',
      'name': 'NagdyYT.amk',
    },
    {
      'rank': '03',
      'country': '🇹🇷',
      'id': '7736',
      'name': 'LAG.YT.FAKE1',
    },
    {
      'rank': '04',
      'country': '🇵🇭',
      'id': '2749',
      'name': 'ALGO',
    },
    {
      'rank': '04',
      'country': '🇵🇭',
      'id': '2753',
      'name': 'ALGO',
    },
    {
      'rank': '04',
      'country': '🇵🇭',
      'id': '4076',
      'name': 'SG',
    },
    {
      'rank': '04',
      'country': '🇵🇭',
      'id': '2831',
      'name': 'SG',
    },
    {
      'rank': '06',
      'country': '🇵🇭',
      'id': '2769',
      'name': 'Watss',
    },
    {
      'rank': '06',
      'country': '🇵🇭',
      'id': '4953',
      'name': 'VrusTzy',
    },
    {
      'rank': '07',
      'country': '🇷🇺',
      'id': '7343',
      'name': 'Load1ng?',
    },
    {
      'rank': '07',
      'country': '🇷🇺',
      'id': '7726',
      'name': 'K1aud.',
    },
    {
      'rank': '08',
      'country': '🇮🇱',
      'id': '7639',
      'name': 'PrinceSsLev',
    },
    {
      'rank': '08',
      'country': '🇮🇱',
      'id': '7470',
      'name': 'iPhanto.YT',
    },
    {
      'rank': '08',
      'country': '🇫🇷',
      'id': '7734',
      'name': 'SlayeRYT.ämk',
    },
    {
      'rank': '08',
      'country': '🇷🇴',
      'id': '7740',
      'name': 'Ɖ・Splashh',
    },
    {
      'rank': '10',
      'country': '🇵🇭',
      'id': '4229',
      'name': 'EURO',
    },
    {
      'rank': '10',
      'country': '🇮🇹',
      'id': '2768',
      'name': 'EURO',
    },
    {
      'rank': '11',
      'country': '🇵🇭',
      'id': '3099',
      'name': 'KLAY',
    },
    {
      'rank': '11',
      'country': '🇵🇭',
      'id': '3078',
      'name': 'KLAY',
    },
    {
      'rank': '12',
      'country': '🇮🇳',
      'id': '6777',
      'name': 'Rkbhai',
    },
    {
      'rank': '12',
      'country': '🇮🇳',
      'id': '8203',
      'name': 'Agent',
    },
    {
      'rank': '13',
      'country': '🇺🇦',
      'id': '8173',
      'name': 'L1ndline',
    },
    {
      'rank': '13',
      'country': '🇺🇦',
      'id': '8172',
      'name': 'nsc・L.S.D',
    },
    {
      'rank': '14',
      'country': '🇵🇭',
      'id': '3082',
      'name': 'KLAY',
    },
    {
      'rank': '14',
      'country': '🇵🇭',
      'id': '4857',
      'name': 'KLAY',
    },
    {
      'rank': '14',
      'country': '🇮🇷',
      'id': '8089',
      'name': 'LøneR-',
    },
    {
      'rank': '14',
      'country': '🇩🇿',
      'id': '8159',
      'name': 'zyneuuu',
    },
    {
      'rank': '16',
      'country': '🇮🇹',
      'id': '6553',
      'name': '月DuckZ',
    },
    {
      'rank': '16',
      'country': '🇮🇹',
      'id': '6558',
      'name': '月wizey',
    },
    {
      'rank': '18',
      'country': '🇮🇳',
      'id': '7654',
      'name': 'CalixHacks???',
    },
    {
      'rank': '18',
      'country': '🇮🇳',
      'id': '7651',
      'name': 'CalixAldeanoYT',
    },
    {
      'rank': '19',
      'country': '🇺🇦',
      'id': '8171',
      'name': 'riot',
    },
    {
      'rank': '19',
      'country': '🇺🇦',
      'id': '8169',
      'name': 'ANDRIAN.TikTok',
    },
    {
      'rank': '19',
      'country': '🇵🇭',
      'id': '6326',
      'name': 'EURO',
    },
    {
      'rank': '19',
      'country': '🇵🇭',
      'id': '4981',
      'name': 'EURO',
    },
    {
      'rank': '21',
      'country': '🇵🇭',
      'id': '3126',
      'name': 'EURO',
    },
    {
      'rank': '21',
      'country': '🇲🇹',
      'id': '6453',
      'name': 'EURO',
    },
    {
      'rank': '21',
      'country': '🇵🇭',
      'id': '2848',
      'name': 'SAND',
    },
    {
      'rank': '21',
      'country': '🇵🇭',
      'id': '4021',
      'name': 'SAND',
    },
    {
      'rank': '21',
      'country': '🇵🇭',
      'id': '7170',
      'name': 'OF',
    },
    {
      'rank': '21',
      'country': '🇵🇭',
      'id': '6994',
      'name': 'OF',
    },
    {
      'rank': '21',
      'country': '🇺🇸',
      'id': '8022',
      'name': 'TØ-SAITAMA',
    },
    {
      'rank': '21',
      'country': '🇺🇸',
      'id': '7597',
      'name': 'TØ-Aden(ØP)',
    },
    {
      'rank': '21',
      'country': '🇪🇸',
      'id': '6572',
      'name': 'EURO',
    },
    {
      'rank': '21',
      'country': '🇯🇵',
      'id': '7227',
      'name': 'TSG',
    },
    {
      'rank': '26',
      'country': '🇯🇵',
      'id': '2807',
      'name': 'Kevsup',
    },
    {
      'rank': '26',
      'country': '🇵🇭',
      'id': '2769',
      'name': 'Watss',
    },
    {
      'rank': '26',
      'country': '🇸🇦',
      'id': '6603',
      'name': 'OF',
    },
    {
      'rank': '26',
      'country': '🇵🇭',
      'id': '6816',
      'name': 'OF',
    },
    {
      'rank': '26',
      'country': '🇮🇳',
      'id': '7574',
      'name': 'Kushina',
    },
    {
      'rank': '26',
      'country': '🇮🇳',
      'id': '7570',
      'name': 'Rick',
    },
    {
      'rank': '26',
      'country': '🇹🇷',
      'id': '7489',
      'name': 'EMP°Arrogance',
    },
    {
      'rank': '26',
      'country': '🇱🇷',
      'id': '7543',
      'name': 'EMP°EmpathyFB',
    },
    {
      'rank': '30',
      'country': '🇷🇺',
      'id': '7386',
      'name': 'GO2H3ELL.amk',
    },
    {
      'rank': '30',
      'country': '🇷🇺',
      'id': '7398',
      'name': '月åurora.YT',
    },
    {
      'rank': '30',
      'country': '🇮🇳',
      'id': '7361',
      'name': 'Void',
    },
    {
      'rank': '30',
      'country': '🇮🇳',
      'id': '7462',
      'name': 'cherry',
    },
    {
      'rank': '30',
      'country': '🇮🇳',
      'id': '7873',
      'name': 'EGツAnubhav',
    },
    {
      'rank': '30',
      'country': '🇮🇳',
      'id': '8094',
      'name': 'EGツChamanchoo',
    },
    {
      'rank': '33',
      'country': '🇸🇦',
      'id': '4283',
      'name': 'PK',
    },
    {
      'rank': '33',
      'country': '🇵🇭',
      'id': '7314',
      'name': 'PK',
    },
    {
      'rank': '33',
      'country': '🇮🇷',
      'id': '7318',
      'name': 'Loser',
    },
    {
      'rank': '33',
      'country': '🇮🇷',
      'id': '7320',
      'name': 'RaeesAri',
    },
    {
      'rank': '33',
      'country': '🇬🇧',
      'id': '7352',
      'name': 'Omen',
    },
    {
      'rank': '33',
      'country': '🇳🇬',
      'id': '7353',
      'name': 'Gay',
    },
    {
      'rank': '33',
      'country': '🇮🇳',
      'id': '7656',
      'name': 'Calix1NSANITY',
    },
    {
      'rank': '33',
      'country': '🇮🇳',
      'id': '6419',
      'name': 'CalixRAKER',
    },
    {
      'rank': '33',
      'country': '🇵🇭',
      'id': '4013',
      'name': 'EURO',
    },
    {
      'rank': '33',
      'country': '🇵🇭',
      'id': '4016',
      'name': 'EURO',
    },
    {
      'rank': '33',
      'country': '🇬🇧',
      'id': '7963',
      'name': 'A5A',
    },
    {
      'rank': '33',
      'country': '🇮🇹',
      'id': '7977',
      'name': 'Mario.amk',
    },
    {
      'rank': '33',
      'country': '🇵🇭',
      'id': '2740',
      'name': 'ALGO',
    },
    {
      'rank': '33',
      'country': '🇵🇭',
      'id': '6487',
      'name': 'ALGO',
    },
    {
      'rank': '41',
      'country': '🇳🇬',
      'id': '8027',
      'name': 'festus',
    },
    {
      'rank': '41',
      'country': '🇳🇬',
      'id': '7989',
      'name': 'AlphaYT',
    },
    {
      'rank': '41',
      'country': '🇷🇺',
      'id': '8167',
      'name': '🧊stm🧊',
    },
    {
      'rank': '41',
      'country': '🇷🇺',
      'id': '7347',
      'name': 'Balford°Con',
    },
    {
      'rank': '41',
      'country': '🇷🇺',
      'id': '7348',
      'name': 'ÑiQueNxD',
    },
    {
      'rank': '41',
      'country': '🇷🇺',
      'id': '7347',
      'name': 'Balford°Con',
    },
    {
      'rank': '41',
      'country': '🇳🇬',
      'id': '7261',
      'name': 'Ⱥmn3x',
    },
    {
      'rank': '41',
      'country': '🇳🇬',
      'id': '7356',
      'name': 'Āgëntt47',
    },
    {
      'rank': '41',
      'country': '🇹🇷',
      'id': '7400',
      'name': 'wK',
    },
    {
      'rank': '41',
      'country': '🇹🇷',
      'id': '7399',
      'name': 'wK',
    },
    {
      'rank': '41',
      'country': '🇪🇬',
      'id': '7480',
      'name': 'cw.HASSAN_YT',
    },
    {
      'rank': '41',
      'country': '🇪🇬',
      'id': '7648',
      'name': 'PKB・GHOST.',
    },
    {
      'rank': '41',
      'country': '🇻🇪',
      'id': '7919',
      'name': 'iGera°',
    },
    {
      'rank': '41',
      'country': '🇻🇪',
      'id': '8045',
      'name': 'Smokee96',
    },
    {
      'rank': '41',
      'country': '🇮🇷',
      'id': '7500',
      'name': 'SPIRIT',
    },
    {
      'rank': '41',
      'country': '🇮🇷',
      'id': '7502',
      'name': 'SEEME',
    },
    {
      'rank': '49',
      'country': '🇮🇳',
      'id': '7367',
      'name': 'Andy',
    },
    {
      'rank': '49',
      'country': '🇮🇳',
      'id': '7370',
      'name': 'Rani',
    },
    {
      'rank': '49',
      'country': '🇳🇬',
      'id': '7645',
      'name': 'ギ°',
    },
    {
      'rank': '49',
      'country': '🇳🇬',
      'id': '7327',
      'name': 'S¡N・holly',
    },
    {
      'rank': '49',
      'country': '🇵🇭',
      'id': '4953',
      'name': 'VrusTzy',
    },
    {
      'rank': '49',
      'country': '🇵🇭',
      'id': '2718',
      'name': 'Blue',
    },
    {
      'rank': '49',
      'country': '🇳🇬',
      'id': '7346',
      'name': 'SLOWCODM',
    },
    {
      'rank': '49',
      'country': '🇳🇬',
      'id': '7364',
      'name': '5thŸøñkø',
    },
    {
      'rank': '49',
      'country': '🇳🇬',
      'id': '7375',
      'name': 'マiam_lonnie',
    },
    {
      'rank': '49',
      'country': '🇳🇬',
      'id': '7415',
      'name': '..',
    },
    {
      'rank': '49',
      'country': '🇿🇲',
      'id': '7491',
      'name': 'Katotola',
    },
    {
      'rank': '49',
      'country': '🇿🇲',
      'id': '7494',
      'name': '悪魔Lįch',
    },
    {
      'rank': '49',
      'country': '🇮🇳',
      'id': '7531',
      'name': 'Ⱥ・Mr.CK',
    },
    {
      'rank': '49',
      'country': '🇵🇰',
      'id': '7603',
      'name': 'J',
    },
    {
      'rank': '49',
      'country': '🇵🇭',
      'id': '6725',
      'name': 'OF',
    },
    {
      'rank': '49',
      'country': '🇵🇭',
      'id': '6729',
      'name': 'OF',
    },
    {
      'rank': '49',
      'country': '🇮🇳',
      'id': '7972',
      'name': '彡Jacky1YT',
    },
    {
      'rank': '49',
      'country': '🇮🇳',
      'id': '7973',
      'name': 'ƓUƝ彡Subha',
    },
    {
      'rank': '49',
      'country': '🇮🇳',
      'id': '7941',
      'name': 'ƓƬ',
    },
    {
      'rank': '49',
      'country': '🇮🇳',
      'id': '8195',
      'name': 'GT',
    },
    {
      'rank': '49',
      'country': '🇮🇳',
      'id': '8057',
      'name': 'ƓUƝ彡QTL-E-AM',
    },
    {
      'rank': '49',
      'country': '🇮🇳',
      'id': '8058',
      'name': 'Rگ・SÀRMÃD',
    },
    {
      'rank': '49',
      'country': '🇳🇬',
      'id': '7261',
      'name': 'Amnex101',
    },
    {
      'rank': '49',
      'country': '🇿🇲',
      'id': '7885',
      'name': 'Juniorshemizee',
    },
    { name: '', rank: '', country: '', id: '' },
    { name: '', rank: '', country: '', id: '' },
  ];

  const Team = ({ team, type }) => {
    const img = `https://raw.githubusercontent.com/teamdao-psi3/esport-team/main/BFS/codm/DUO-BR-POWER-RANKINGS/${team.id}.png`;

    return (
      <div className='flex flex-col relative items-center sm:w-2/12 w-4/12 '>
        {
          team.name !== '' ? (
            <>
              <img
                src={img}
                alt={team.name}
                title={team.id}
                className='w-full h-full'
                loading={'lazy'}
                onError={(e) => {
                  e.target.src = ErrImg.src;
                }}
              />
              <div
                className='absolute left-0 top-1/3 rounded-full bg-secondary text-white w-[30px] h-[30px] flex items-center justify-center'>
                {team.rank}
              </div>
            </>
          ) : (<div className='w-full h-full block' />)
        }
      </div>
    );
  };


  const TeamList = ({ teams, numItemsPerRow, type }) => {
    // const totalRows = Math.ceil(teams.length / numItemsPerRow);
    const totalRows = Math.ceil(teams.length / numItemsPerRow) + Math.ceil((teams.length % numItemsPerRow) / 2);

    let teamIndex = 0;
    let rows = [];

    for (let i = 1; i <= totalRows; i++) {
      const rowItems = [];

      if (i % 2 === 0) {
        // even row
        for (let j = 0; j < numItemsPerRow - 1; j++) {
          if (teamIndex < teams.length) {
            rowItems.push(<Team team={teams[teamIndex]} type={type} />);
            teamIndex++;
          } else {
            // add empty data to fill row
            rowItems.push(<div />);
          }
        }
      } else {
        // odd row
        const itemsInRow = Math.min(numItemsPerRow, teams.length - teamIndex + 1);
        for (let j = 0; j < itemsInRow; j++) {
          if (teamIndex < teams.length) {
            rowItems.push(<Team team={teams[teamIndex]} type={type} />);
            teamIndex++;
          } else {
            // add empty data to fill row
            rowItems.push(<div className={`w-${12 / numItemsPerRow}/12`} />);
          }
        }
      }

      rows.push(<div className='flex flex-row flex-wrap justify-center'>{rowItems}</div>);
    }

    return <div className='wrapper-teams-list-hex mx-auto'>{rows}</div>;
  };


  return (
    <section className='default-section'>
      <div className='page-container'>
        <div className='page-section-title mb-5 bg-black/40 py-4 rounded-md'>
          <h2 className='text-[3.3rem] font-bold font-inter text-center uppercase'>POWER RANKINGS TEAM - Duo Battle
            Royale</h2>
          <p className='text-[1.8rem] font-inter text-center text-secondary uppercase font-inter'>
            As of May 12,2023
          </p>
        </div>
        <div className='card rounded-md p-3'>
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

          {/*<GenPyramid global_ranks={global_ranks} />*/}

          <div>
            <div className='sm:block hidden'>
              <TeamList teams={global_ranks} numItemsPerRow={5} type='player' />
            </div>

            <div className='sm:hidden block'>
              <TeamList teams={global_ranks} numItemsPerRow={3} type='player' />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CodmDuo;