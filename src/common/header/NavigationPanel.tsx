'use client';

import { useState } from 'react';
import NavItem from './NavItem';

const NavigationPanel = () => {
  const [select, setSelect] = useState<string>('INTRO');
  const navList = ['INTRO', 'ABOUT', 'SKILLS', 'PROJECT', 'CONTACT'];
  return (
    <div className="flex gap-3 ">
      {navList.map((item) => (
        <NavItem key={item} title={item} />
      ))}
    </div>
  );
};

export default NavigationPanel;
