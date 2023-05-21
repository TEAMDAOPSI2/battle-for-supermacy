const FormatBoxTop = ({ title, list }) => {
  return (
    <div className='flex flex-col format-list-wrapper '>
      <h3 className='text-2xl font-bold font-inter text-secondary uppercase mb-5 min-h-[70px]'>{title}</h3>
      <ul>
        {
          list.map((item, index) => (
            <li key={index} className='font-inter text-white list-none'>
              {item}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

const Format = ({ data }) => {
  const { rules } = data;
  return (
    <section className='default-section home--format'>
      <div className='page-container'>
        <div className='page-section-title mb-5'>
          <h2 className='text-[3.3rem] font-bold font-inter text-center uppercase'>Format</h2>
        </div>

        <div className='card bg-soft-black p-5'>
          <div className='grid sm:grid-cols-3 grid-cols-1 gap-10'>
            {
              rules?.all.map((rule, index) => {
                return (
                  <FormatBoxTop key={index} title={rule?.title} list={rule?.list} />
                );
              })
            }
          </div>
          <div className='text-sm italic underline decoration-accent py-3'>
            {
              rules?.note.map((note, index) => {
                return (
                  <p key={index} className='text-white'>
                    {note}
                  </p>
                );
              })
            }
          </div>

        </div>


      </div>
    </section>
  );
};

export default Format;