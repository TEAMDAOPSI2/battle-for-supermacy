import NavbarMatch from '@/components/navbar-match';
import Hero from '@/sections/home/hero';
import Headline from '@/sections/home/headline';
import Teams from '@/sections/home/teams';
import Format from '@/sections/home/format';
import Slot from '@/sections/home/slots';
import Faq from '@/sections/home/faq';
import More from '@/sections/home/more';

const Main = () => {
  return (
    <>
      <NavbarMatch />
      <div className="mt-[55px]" />
      <Hero />
      <Headline />
      {/*<Match />*/}
      <Teams />
      <Format />
      <Slot />
      {/*<History />*/}
      <Faq />
      <More />
    </>
  )
}

export default Main