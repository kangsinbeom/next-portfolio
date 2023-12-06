import MainLogo from './MainLogo';
import NavigationPanel from './NavigationPanel';

const Header = () => {
  return (
    <header className="flex justify-between ">
      <MainLogo />
      <NavigationPanel />
    </header>
  );
};

export default Header;
