import ReactModal from 'react-modal';

import css from './ModalWindow.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  modalClose,
  selectIsOpen,
  selectRenderedComponent,
} from '../../redux/modal/slice';
import clsx from 'clsx';
import AuthenticationModal from '../AuthenticationModal/AuthenticationModal';

const ModalWindow = () => {
  ReactModal.setAppElement('#root');
  const isModalOpen = useSelector(selectIsOpen);
  const renderedComponent = useSelector(selectRenderedComponent);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(modalClose());
  };

  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={handleClick}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      overlayClassName={css.myOverlay}
      className={clsx(css.modal, {
        [css.onOpen]: isModalOpen,
        [css.onClose]: !isModalOpen,
      })}
    >
      {
        <>
          <button
            className={css.closeButton}
            onClick={handleClick}
            aria-label="close button"
          ></button>
          {renderedComponent === 'AuthenticationModal' && (
            <AuthenticationModal />
          )}
        </>
      }
    </ReactModal>
  );
};

export default ModalWindow;
