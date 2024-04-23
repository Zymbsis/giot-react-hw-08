import { Suspense } from 'react';

import AppBar from '../AppBar/AppBar';
import ModalWindow from '../ModalWindow/ModalWindow';
import Loader from '../Loader/Loader';

import css from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Suspense
        fallback={
          <div className={css.suspense}>
            <Loader />
          </div>
        }
      >
        {children}
      </Suspense>
      <ModalWindow />
    </>
  );
};

export default Layout;
