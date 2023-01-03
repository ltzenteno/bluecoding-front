import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <>
      {/* TODO: insert some header here */}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;