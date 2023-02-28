import AnchorMain from '@/components/navbar/anchor-main';

const Navbar = () => {
  return (
    <header id='main-header'>
      <nav>
        <div className='img-logo'>
          <img
            src='https://pro.eslgaming.com/csgo/proleague/wp-content/uploads/2021/09/logo-max-esl-pro-league.svg?w=1024&h=1024'
            alt='Netflix Logo' />
        </div>
        <div className='wrap-main-list pt-3'>
          <AnchorMain href='/' text='Season 17' />
          <AnchorMain href='/' text='Season 16' />
          <AnchorMain href='/' text='Season 15' />
          <AnchorMain href='/' text='Team' />
          <AnchorMain href='/' text='Schedule' />
          <AnchorMain href='/' text='Standings' />
          <AnchorMain href='/' text='How To Watch' />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;