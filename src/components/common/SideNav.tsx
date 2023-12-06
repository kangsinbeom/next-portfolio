import SideNavItem from './SideNavItem';

const SideNav = () => {
  return (
    <div className="fixed right-10 top-1/2 z-10 flex -translate-y-1/2 flex-col gap-10">
      <SideNavItem />
      <SideNavItem />
      <SideNavItem />
      <SideNavItem />
      <SideNavItem />
    </div>
  );
};

export default SideNav;
