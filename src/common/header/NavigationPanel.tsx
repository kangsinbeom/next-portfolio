import NavItem from './NavItem';

const NavigationPanel = () => {
  const navList = ['INTRO', 'ABOUT', 'SKILLS', 'PROJECT', 'CONTACT'];
  return (
    <nav className="flex gap-3 ">
      {navList.map((item) => (
        <NavItem key={item} title={item} />
      ))}
    </nav>
  );
};

export default NavigationPanel;
