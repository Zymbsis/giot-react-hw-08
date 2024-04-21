import { Suspense } from 'react';
import AppBar from '../AppBar/AppBar';
// import css from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </>
  );
};

export default Layout;
