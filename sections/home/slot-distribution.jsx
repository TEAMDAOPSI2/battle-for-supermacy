import RactangleTeam from '@/components/ractangle-team';

const SlotDistribution = () => {
  return (
    <div className='bg-soft-black p-5'>
      <h2 className='text-3xl font-bold font-inter text-center uppercase text-white pb-5 border-b border-accent'><span
        className='text-accent'>SLOT</span> DISTRIBUTION</h2>
      <div className='grid sm:grid-cols-4 grid-cols-1 mt-5'>
        <div className='col-span-2'>
          <h3 className='sm:text-2xl text-xl text-white text-center py-3 '>PARTNER TEAMS</h3>
          <div className='flex flex-wrap gap-2'>
            <RactangleTeam className="w-2/12" name="" image="https://raw.githubusercontent.com/teamdao-psi3/esport-team/main/partners-bfs/1.png" />
            <RactangleTeam className="w-2/12" name="" image="https://raw.githubusercontent.com/teamdao-psi3/esport-team/main/partners-bfs/2.png" />
            <RactangleTeam className="w-2/12" name="" image="https://raw.githubusercontent.com/teamdao-psi3/esport-team/main/partners-bfs/3.png" />
            <RactangleTeam className="w-2/12" name="" image="https://raw.githubusercontent.com/teamdao-psi3/esport-team/main/partners-bfs/4.png" />
            <RactangleTeam className="w-2/12" name="" image="https://raw.githubusercontent.com/teamdao-psi3/esport-team/main/partners-bfs/5.png" />
            <RactangleTeam className="w-2/12" name="" image="https://raw.githubusercontent.com/teamdao-psi3/esport-team/main/partners-bfs/6.png" />
            <RactangleTeam className="w-2/12" name="" image="https://raw.githubusercontent.com/teamdao-psi3/esport-team/main/partners-bfs/7.png" />
            <RactangleTeam className="w-2/12" name="" image="https://raw.githubusercontent.com/teamdao-psi3/esport-team/main/partners-bfs/8.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlotDistribution;