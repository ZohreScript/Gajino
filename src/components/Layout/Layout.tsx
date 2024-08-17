import React, { ReactNode } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// import Footer from './Footer/Footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <main className="flex-grow">{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
