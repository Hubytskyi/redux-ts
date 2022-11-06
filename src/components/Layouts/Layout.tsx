import React from 'react';
import Nav from '../Nav/Nav';
import { LayoutProps } from '../../interfaces/layout.interface';

const Layout = ({children}: LayoutProps) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
};

export default Layout;