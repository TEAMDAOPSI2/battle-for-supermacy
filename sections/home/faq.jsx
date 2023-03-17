import Pills from '@/components/pills';

const Faq = () => {
  return (
    <section className="default-section">
      <div className="page-container">
        <div className="page-section-title">
          <h2 className="text-[3.3rem] font-bold font-inter text-center uppercase">Faqs</h2>
          <p className="text-[1.8rem] font-inter font-semibold text-center text-secondary uppercase font-inter">
            BFS Pro League explained
          </p>
        </div>

        <div className="pills-group mt-5 flex flex-col gap-3 sm:w-[700px] w-full m-auto">
          <Pills title="What is partner from BFS pro League?">
            <p>
              Currently, 15 teams jointly govern and participate in revenue for BFS Pro League. They also have long-term
              participation slots which protect them from getting relegated.
            </p>
          </Pills>

          <Pills title="Can not partner team take part the league?">
            <p>
              Yes, BFS Pro League is open for everyone to play in regardless of partner status. We believe in an open
              ecosystem, where every new talent has a direct path to play on the world’s biggest stages.
            </p>
          </Pills>

          <Pills title="Do partner teams get preferential seeding in the league?">
            <p>
            Seeding for the groups of BFS Pro League is done based on the BFS World Ranking and independent of partner status.
            </p>
          </Pills>
        </div>
      </div>
    </section>
  );
};

export default Faq;
