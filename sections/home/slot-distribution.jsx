import RactangleTeam from '@/components/ractangle-team';

const SlotDistribution = () => {
  return (
    <div className='bg-soft-black p-5'>
      <h2 className='text-5xl font-bold font-inter text-center uppercase text-white pb-5 border-b border-accent'><span
        className='text-accent'>SLOT</span> DISTRIBUTION</h2>
      <div className='grid sm:grid-cols-4 grid-cols-1 mt-5'>
        <div className='col-span-2'>
          <h3 className='text-xl text-white'>PARTNER TEAMS</h3>
          <div className='flex'>
            <RactangleTeam name="ad" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlotDistribution;