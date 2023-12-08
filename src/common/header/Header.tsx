import MainLogo from './MainLogo';
import NavigationPanel from './NavigationPanel';

const Header = () => {
  return (
    <header className="fixed z-10 flex w-full justify-between px-10 pt-4">
      <MainLogo />
      <NavigationPanel />
    </header>
  );
};

export default Header;
