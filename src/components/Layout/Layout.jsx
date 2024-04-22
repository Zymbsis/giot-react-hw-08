import { Suspense } from 'react';
import AppBar from '../AppBar/AppBar';
import css from './Layout.module.css';
import ModalWindow from '../ModalWindow/ModalWindow';

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<div className={css.suspense}></div>}>
        {children}
      </Suspense>
      <ModalWindow />
    </>
  );
};

export default Layout;
