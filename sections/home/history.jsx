import Link from 'next/link';
import Logo from '@/public/images/logo.png';

const History = () => {
  return (
    <section className="default-section">
      <div className="page-container flex flex-col gap-10">
        <div className="card bg-soft-black p-5">
          <div className="flex sm:flex-row flex-col-reverse">
            <div className="flex flex-col gap-5 sm:w-[58%] w-full">
              <h3 className="text-secondary text-3xl uppercase font-inter font-semibold">Season 6 expansion</h3>
              <p className="text-white font-plus-jakarta-sans text-lg">
                After receiving feedback from the community, on-air talent, and the partner teams of the Louvre
                Agreement throughout 2022, we’ve taken the decision to reevaluate BFS Pro League. There are changes and
                improvements we’ll be making in 2023, all of which will be effective starting from Season 6 in
                March.
              </p>
            </div>
            <div className="flex grow justify-center items-center">
              <img
                className="h-[230px] m-auto"
                src="https://eslpro.imgix.net/csgo/proleague/wp-content/uploads/2020/01/icon-globe.png?w=600"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="card bg-soft-black p-5">
          <div className="flex sm:flex-row flex-col">
            <div className="flex grow justify-end items-center">
              <img
                className="h-[230px] m-auto"
                src={Logo.src}
                alt=""
              />
            </div>

            <div className="flex flex-col gap-5 sm:w-[58%] w-full">
              <h3 className="text-secondary text-3xl uppercase font-inter font-semibold">One Tour. one story.</h3>
              <p className="text-white font-plus-jakarta-sans text-lg">
                The BFS Pro Tour is our vision for esports. One open ecosystem connecting all of BFS and DreamHack’s
                competitions around the world. One world for leagues and tournaments. One path from rookie amateur to
                global icon. A place where everybody can be somebody.
              </p>
              <Link href="#" className="bg-secondary uppercase p-3 w-fit font-semibold rounded-sm hover:bg-white">
                GET INFORMED
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
