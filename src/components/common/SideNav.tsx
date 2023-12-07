import SideNavItem from './SideNavItem';

const SideNav = () => {
  return (
    <aside className="fixed right-10 top-1/2 z-10 flex -translate-y-1/2 flex-col gap-10">
      <SideNavItem />
      <SideNavItem />
      <SideNavItem />
      <SideNavItem />
      <SideNavItem />
    </aside>
  );
};

export default SideNav;
