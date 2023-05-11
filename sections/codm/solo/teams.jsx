import ErrImg from '@/public/images/hex-err.png';

const Team = ({ team }) => {
  const img = `https://raw.githubusercontent.com/teamdao-psi3/esport-team/main/hex-flags/${team.code3}.png`;
  return (
    <div className='flex items-center sm:w-2/12 w-4/12 '>
      <img
        src={img}
        alt={team.code}
        className='w-full h-full'
        onError={(e) => {
          e.target.src = ErrImg.src;
        }}
      />
    </div>
  );
};

const TeamList = ({ teams, numItemsPerRow }) => {
  const totalRows = Math.ceil(teams.length / numItemsPerRow);
  let teamIndex = 0;
  let rows = [];

  for (let i = 1; i <= totalRows; i++) {
    const rowItems = [];

    if (i % 2 === 0) {
      // even row
      for (let j = 0; j < numItemsPerRow - 1; j++) {
        if (teamIndex < teams.length) {
          rowItems.push(<Team team={teams[teamIndex]} />);
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
          rowItems.push(<Team team={teams[teamIndex]} />);
          teamIndex++;
        } else {
          // add empty data to fill row
          rowItems.push(<div className={`w-${12/numItemsPerRow}/12`} />);
        }
      }
    }

    rows.push(<div className='flex flex-row flex-wrap justify-center'>{rowItems}</div>);
  }

  return <div className='wrapper-teams-list-hex mx-auto'>{rows}</div>;
};

const Teams = ({ data }) => {
  const { participants: teams } = data;
  console.log(teams);
  return (
    <section className='default-section' id='teams'>
      <div className='page-container'>
        <div className='page-section-title'>
          <h2 className='text-[3.3rem] font-bold font-inter text-center uppercase'>The biggest CODM League</h2>
          <p className='text-[1.8rem] font-inter text-center text-secondary uppercase font-inter'>
            {data?.totalParticipants} Players | {teams.length} Countries
          </p>
        </div>

        <div className='card bg-soft-black px-6 my-6 py-3'>
          <div className='flex flex-col mb-6 border border-dotted border-white sm:px-6 px-1 py-3'>
            <h3 className='text-2xl font-bold text-white mb-6'>Country Participants</h3>

            <div className="sm:block hidden">
              <TeamList teams={teams} numItemsPerRow={6} />
            </div>

            <div className="sm:hidden block">
              <TeamList teams={teams} numItemsPerRow={3} />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Teams;